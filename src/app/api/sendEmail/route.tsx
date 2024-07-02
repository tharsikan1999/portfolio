import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log({ name, email, subject, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.MAIL_TO,
      subject: subject,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: 'Arial', sans-serif; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #007bff; color: #ffffff; padding: 15px;">
              <h2 style="margin: 0; font-size: 24px;">New Message from Contact Form</h2>
            </div>
            <div style="padding: 20px;">
              <p style="font-size: 16px; margin-bottom: 15px;">
                You have received a new message from <strong>${name}</strong> (${email}):
              </p>
              <div style="border: 1px solid #e9ecef; border-radius: 5px; padding: 15px;">
                <p style="font-size: 16px; margin-bottom: 10px;">
                  <strong>Subject:</strong><br>
                  ${subject}
                </p>
                <p style="font-size: 16px; margin-bottom: 10px;">
                  <strong>Message:</strong><br>
                  ${message.replace(/\n/g, "<br>")}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in POST /api/sendEmail:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only supports POST requests" },
    { status: 405 }
  );
}
