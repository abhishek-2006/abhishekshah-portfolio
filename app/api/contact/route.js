import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Send email to YOU
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Contact from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}

            Message:
            ${message}
        `,
        replyTo: email,
    });

    // 2️⃣ Auto reply to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      text: `Hello ${name},

        Thank you for reaching out! I’ve received your message and I'll get back to you soon.

        -------------------

        Thanks & Regards,
        Abhishek Shah
        `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.log("Email send failed:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
