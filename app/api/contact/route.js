import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory sliding window rate limiter (per IP)
// Allows max 5 requests per 15 minutes to prevent spam / mail exhaustion
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps older than the window
  const recent = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  
  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Periodically clean up stale IPs from the map to prevent memory leak
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

// Escape HTML characters to prevent stored XSS / HTML injection in mail clients
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Strip CR/LF to prevent SMTP Header Injection
function sanitizeHeader(str) {
  return String(str).replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req) {
  try {
    // 1. Extract IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 2. Validate configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // 3. Parse JSON safely
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    const { name, email, subject, message, _gotcha, company_url } = body || {};

    // 4. Honeypot check: automated spam bots fill invisible fields
    if (_gotcha || company_url) {
      // Return 200 to trick the bot into thinking it succeeded, but do NOT send any mail
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 5. Strict Input Validation
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80) {
      return NextResponse.json({ error: "Name must be between 2 and 80 characters." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (typeof email !== "string" || email.trim().length > 100 || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (typeof subject !== "string" || subject.trim().length < 2 || subject.trim().length > 120) {
      return NextResponse.json({ error: "Subject must be between 2 and 120 characters." }, { status: 400 });
    }

    if (typeof message !== "string" || message.trim().length < 5 || message.trim().length > 3000) {
      return NextResponse.json({ error: "Message must be between 5 and 3000 characters." }, { status: 400 });
    }

    // 6. Sanitize inputs
    const cleanName = sanitizeHeader(name);
    const cleanEmail = sanitizeHeader(email);
    const cleanSubject = sanitizeHeader(subject);
    const safeHtmlName = escapeHtml(cleanName);
    const safeHtmlEmail = escapeHtml(cleanEmail);
    const safeHtmlSubject = escapeHtml(cleanSubject);
    const safeHtmlMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

    // 7. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 8. Admin Notification Email
    // Only send to Abhishek's verified email. Do NOT blindly relay emails to arbitrary
    // client-provided addresses to prevent open-relay abuse and spam bombing.
    const adminMail = {
      from: `"Portfolio Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: cleanEmail,
      subject: `New Lead: ${cleanName} - ${cleanSubject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #2563eb; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Inquiry Received</h1>
          </div>
          <div style="padding: 30px; color: #1e293b;">
            <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f1f5f9;">
              <h3 style="margin: 0 0 16px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contact Details</h3>
              <p style="margin: 6px 0; font-size: 15px;"><strong>Name:</strong> ${safeHtmlName}</p>
              <p style="margin: 6px 0; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${safeHtmlEmail}" style="color: #2563eb; text-decoration: none;">${safeHtmlEmail}</a></p>
              <p style="margin: 6px 0; font-size: 15px;"><strong>Subject:</strong> ${safeHtmlSubject}</p>
            </div>
            <div>
              <h3 style="margin: 0 0 16px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message Content</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9; line-height: 1.6; color: #334155; word-break: break-word;">
                ${safeHtmlMessage}
              </div>
            </div>
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${safeHtmlEmail}?subject=Re:%20${encodeURIComponent(cleanSubject)}" style="display: inline-block; padding: 14px 28px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">Reply to ${safeHtmlName}</a>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
            Sent via Portfolio Contact System • IP: ${escapeHtml(ip)} • ${new Date().toISOString()}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
