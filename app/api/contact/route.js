import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMail = {
      from: `"Portfolio Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Lead: ${name} - ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #2563eb; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Inquiry Received</h1>
          </div>
          <div style="padding: 30px; color: #1e293b;">
            <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f1f5f9;">
              <h3 style="margin: 0 0 16px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contact Details</h3>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div>
              <h3 style="margin: 0 0 16px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message Content</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9; line-height: 1.6; color: #334155;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
            Sent via Portfolio Contact System • ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    const userMail = {
      from: `"Abhishek Shah" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
          <h2 style="color: #2563eb; font-size: 28px;">Hi ${name},</h2>
          <p style="font-size: 16px; line-height: 1.6;">I've received your message regarding <strong>"${subject}"</strong>. Thank you for taking the time to reach out through my portfolio!</p>
          <p style="font-size: 16px; line-height: 1.6;">I value your inquiry and will review your message shortly. You can expect a personal response from me within <strong>24 to 48 hours</strong>.</p>
          <div style="margin: 30px 0; padding: 20px; border-left: 4px solid #2563eb; background-color: #f8fafc;">
            <p style="margin: 0; font-style: italic; color: #64748b;">"I believe in building digital experiences that matter. I'm excited to see how we can collaborate."</p>
          </div>
          <p style="font-size: 16px;">In the meantime, feel free to explore more of my work:</p>
          <div style="margin-bottom: 30px;">
            <a href="https://github.com/abhishek-2006" style="margin-right: 15px; color: #2563eb; text-decoration: none; font-weight: bold;">GitHub</a>
            <a href="https://x.com/shahabhishek409" style="margin-right: 15px; color: #2563eb; text-decoration: none; font-weight: bold;">Twitter</a>
            <a href="https://linkedin.com/in/abhishek-shah-aa1346326/" style="margin-right: 15px; color: #2563eb; text-decoration: none; font-weight: bold;">LinkedIn</a>
            <a href="https://instagram.com/abhishekshah_112" style="color: #2563eb; text-decoration: none; font-weight: bold;">Instagram</a>
          </div>
          <p style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            Best regards,<br>
            <strong style="color: #1e293b; font-size: 18px;">Abhishek Shah</strong><br>
            <span style="color: #64748b; font-size: 14px;">Full-Stack Developer</span>
          </p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail)
    ]);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.log("Email send failed:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
