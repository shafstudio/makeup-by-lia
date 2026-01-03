import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Parse and validate request body
    const { name, email, date, venue, message } = await request.json();

    // 2. Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 3. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 4. Send admin notification email
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email,
      subject: `New Bridal Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #584738; border-bottom: 2px solid #b59e7d; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #584738;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #584738;">Email:</strong> <a href="mailto:${email}" style="color: #b59e7d;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #584738;">Wedding Date:</strong> ${
              date || "Not provided"
            }</p>
            <p style="margin: 10px 0;"><strong style="color: #584738;">Venue:</strong> ${
              venue || "Not provided"
            }</p>
          </div>
          <div style="margin: 20px 0; padding: 15px; background-color: #f7f4ee; border-left: 4px solid #b59e7d;">
            <p style="margin: 0 0 5px 0;"><strong style="color: #584738;">Message:</strong></p>
            <p style="margin: 0; color: #584738;">${
              message || "No message provided"
            }</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #cec1a8;">
            This email was sent from the Makeup by Lia contact form.
          </p>
        </div>
      `,
    });

    // 5. Send user confirmation email
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: email,
      subject: "Thank you for contacting Makeup by Lia",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #584738; padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 32px; letter-spacing: 2px;">MAKEUP BY LIA</h1>
            <p style="color: #b59e7d; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px;">BRIDAL ARTISTRY</p>
          </div>

          <div style="padding: 40px 30px;">
            <h2 style="color: #584738; margin-top: 0;">Thank You for Your Inquiry</h2>
            <p style="color: #584738; line-height: 1.6;">Dear ${name},</p>
            <p style="color: #584738; line-height: 1.6;">
              Thank you for reaching out to Makeup by Lia! We've received your inquiry and are excited to learn more about your special day.
            </p>
            <p style="color: #584738; line-height: 1.6;">
              We will respond to your message within 24 hours. In the meantime, feel free to explore our portfolio and services on our website.
            </p>

            <div style="margin: 30px 0; padding: 20px; background-color: #f7f4ee; border-radius: 8px;">
              <p style="color: #584738; margin: 0; line-height: 1.6;">
                <strong>Your Inquiry Details:</strong><br/>
                Wedding Date: ${date || "Not provided"}<br/>
                Venue: ${venue || "Not provided"}
              </p>
            </div>

            <p style="color: #584738; line-height: 1.6;">
              Best regards,<br/>
              <strong>Makeup by Lia</strong>
            </p>
          </div>

          <div style="background-color: #f7f4ee; padding: 20px 30px; border-top: 2px solid #b59e7d;">
            <p style="color: #666; font-size: 12px; margin: 5px 0;">
              If you have any urgent questions, please email us at <a href="mailto:${
                process.env.CONTACT_EMAIL_TO
              }" style="color: #b59e7d;">${process.env.CONTACT_EMAIL_TO}</a>
            </p>
          </div>
        </div>
      `,
    });

    // 6. Return success response
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
