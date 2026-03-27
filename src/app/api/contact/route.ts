import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, title, organization, email, message } = body;

    // Validate required fields
    if (!name || !organization || !email) {
      return NextResponse.json(
        { error: "Name, organization, and email are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // TODO: Wire up email delivery (Resend, SendGrid, Postmark, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@varelihealth.com',
    //   to: 'hello@varelihealth.com',
    //   subject: `Demo request from ${name} at ${organization}`,
    //   text: `Name: ${name}\nTitle: ${title}\nOrganization: ${organization}\nEmail: ${email}\nMessage: ${message}`,
    // });

    console.log("Contact form submission:", { name, title, organization, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
