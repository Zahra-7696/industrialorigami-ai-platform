import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "image/png",
  "image/jpeg",
]);

function getTextField(formData: FormData, key: string): string {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = getTextField(formData, "name");
    const email = getTextField(formData, "email");
    const interest = getTextField(formData, "interest");
    const message = getTextField(formData, "message");
    const attachment = formData.get("attachment");

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (!interest) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please choose an area of interest.",
        },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please write a longer message.",
        },
        { status: 400 },
      );
    }

    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
    }> = [];

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          {
            ok: false,
            message: "The attachment must be 10 MB or smaller.",
          },
          { status: 400 },
        );
      }

      if (
        attachment.type &&
        !allowedMimeTypes.has(attachment.type)
      ) {
        return NextResponse.json(
          {
            ok: false,
            message:
              "Unsupported file type. Please attach PDF, DOC, DOCX, TXT, PNG, JPG, or JPEG.",
          },
          { status: 400 },
        );
      }

      const arrayBuffer = await attachment.arrayBuffer();

      attachments.push({
        filename: attachment.name || "attachment",
        content: Buffer.from(arrayBuffer),
        contentType:
          attachment.type || "application/octet-stream",
      });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_APP_PASSWORD;
    const toEmail =
      process.env.CONTACT_TO_EMAIL ??
      "z.torabi.university@gmail.com";

    if (!smtpUser || !smtpPassword) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Email service is not configured. Please set SMTP_USER and SMTP_APP_PASSWORD.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(message).replaceAll(
      "\n",
      "<br />",
    );

    await transporter.sendMail({
      from: `"IndustrialOrigami.AI Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New collaboration enquiry from ${name}`,
      text: [
        "New IndustrialOrigami.AI collaboration enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Area of interest: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New IndustrialOrigami.AI collaboration enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Area of interest:</strong> ${safeInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      attachments,
    });

    return NextResponse.json({
      ok: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "The enquiry could not be sent. Please try again later.",
      },
      { status: 500 },
    );
  }
}
