import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "info@mnatechnologies.com.au";
    const fromEmail = process.env.SES_FROM_EMAIL || "noreply@mnatechnologies.com.au";

    const emailParams = {
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
            Charset: "UTF-8",
          },
          Text: {
            Data: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Message:
${message}
            `,
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: [email],
    };

    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
