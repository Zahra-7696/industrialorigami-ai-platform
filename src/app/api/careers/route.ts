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

async function fileToAttachment(
  formData: FormData,
  key: string,
  required: boolean,
) {
  const file = formData.get(key);

  if (!(file instanceof File) || file.size === 0) {
    if (required) {
      throw new Error(`Please upload ${key}.`);
    }

    return null;
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new Error(
      `${file.name} is too large. Maximum file size is 10 MB.`,
    );
  }

  if (file.type && !allowedMimeTypes.has(file.type)) {
    throw new Error(
      `${file.name} has an unsupported file type.`,
    );
  }

  const arrayBuffer = await file.arrayBuffer();

  return {
    filename: file.name || key,
    content: Buffer.from(arrayBuffer),
    contentType: file.type || "application/octet-stream",
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const opportunity = getTextField(formData, "opportunity");
    const opportunitySlug = getTextField(formData, "opportunitySlug");
    const name = getTextField(formData, "name");
    const email = getTextField(formData, "email");
    const phone = getTextField(formData, "phone");
    const address = getTextField(formData, "address");
    const interest = getTextField(formData, "interest");
    const workRight = getTextField(formData, "workRight");
    const message = getTextField(formData, "message");

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Please enter your full name." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!phone) {
      return NextResponse.json(
        { ok: false, message: "Please enter your phone number." },
        { status: 400 },
      );
    }

    if (!address) {
      return NextResponse.json(
        { ok: false, message: "Please enter your address." },
        { status: 400 },
      );
    }

    if (!interest || !workRight) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please complete all required selection fields.",
        },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Please write a longer message." },
        { status: 400 },
      );
    }

    const attachments = [];

    const cv = await fileToAttachment(formData, "cv", true);
    const coverLetter = await fileToAttachment(
      formData,
      "coverLetter",
      false,
    );
    const additionalFile = await fileToAttachment(
      formData,
      "additionalFile",
      false,
    );

    if (cv) {
      attachments.push(cv);
    }

    if (coverLetter) {
      attachments.push(coverLetter);
    }

    if (additionalFile) {
      attachments.push(additionalFile);
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_APP_PASSWORD;
    const toEmail =
      process.env.CAREERS_TO_EMAIL ??
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

    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"IndustrialOrigami.AI Careers" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `Career expression of interest: ${name}`,
      text: [
        "New IndustrialOrigami.AI career expression of interest",
        "",
        `Opportunity: ${opportunity}`,
        `Opportunity slug: ${opportunitySlug}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        `Interest: ${interest}`,
        `Right to work in NZ: ${workRight}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New IndustrialOrigami.AI career expression of interest</h2>
        <p><strong>Opportunity:</strong> ${escapeHtml(opportunity)}</p>
        <p><strong>Opportunity slug:</strong> ${escapeHtml(opportunitySlug)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Address:</strong> ${escapeHtml(address)}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Right to work in NZ:</strong> ${escapeHtml(workRight)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      attachments,
    });

    return NextResponse.json({
      ok: true,
      message: "Your expression of interest has been sent successfully.",
    });
  } catch (error) {
    console.error("Career form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "The application could not be sent. Please try again later.",
      },
      { status: 500 },
    );
  }
}
