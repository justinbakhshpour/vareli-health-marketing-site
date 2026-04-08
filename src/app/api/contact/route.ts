import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, title, organization, email, message } = body;

    if (!name || !organization || !email) {
      return NextResponse.json(
        { error: "Name, organization, and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Vareli Health <noreply@varelihealth.com>",
      to: "justin@varelihealth.com",
      subject: `Demo request from ${name} at ${organization}`,
      text: [
        `Name: ${name}`,
        title ? `Title: ${title}` : null,
        `Organization: ${organization}`,
        `Email: ${email}`,
        message ? `\nMessage:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
