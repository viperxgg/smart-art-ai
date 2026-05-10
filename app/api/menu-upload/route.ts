import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const DESTINATION_EMAIL = "info@smartartai.se";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderField(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 0;font-weight:bold;width:34%;font-family:sans-serif;color:#333;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;font-family:sans-serif;color:#555;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function isValidFile(file: File) {
  return file.size > 0 && file.size <= MAX_FILE_SIZE && ALLOWED_TYPES.has(file.type);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const restaurant = getText(formData, "restaurant");
    const message = getText(formData, "message");
    const sourcePage = getText(formData, "sourcePage");
    const files = formData
      .getAll("files")
      .filter((value): value is File => value instanceof File && value.size > 0);

    if (!name) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ success: false, error: "A valid email is required." }, { status: 400 });
    }

    if (!files.length) {
      return NextResponse.json({ success: false, error: "At least one file is required." }, { status: 400 });
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json({ success: false, error: `Maximum ${MAX_FILES} files allowed.` }, { status: 400 });
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE || files.some((file) => !isValidFile(file))) {
      return NextResponse.json(
        { success: false, error: "Only PDF, JPG, PNG or WebP files up to 10 MB each are allowed." },
        { status: 400 },
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type,
      })),
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Smart Art AI" <${process.env.SMTP_USER}>`,
      to: DESTINATION_EMAIL,
      subject: `Ny menyfil från ${name}`,
      replyTo: email,
      attachments,
      html: `
        <h2 style="color:#111;font-family:sans-serif;">Ny meny skickad till Smart Art AI</h2>
        <p style="font-family:sans-serif;color:#555;">Submitted: ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })}</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          ${renderField("Name", name)}
          ${renderField("Email", email)}
          ${renderField("Restaurant", restaurant)}
          ${renderField("SourcePage", sourcePage)}
          ${renderField("Message", message)}
          ${renderField("Files", files.map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join(", "))}
        </table>
        <hr style="margin-top:20px;border:none;border-top:1px solid #eee;">
        <p style="font-family:sans-serif;font-size:12px;color:#999;">Sent from smartartai.se menu upload form</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Menu upload email error", error);
    return NextResponse.json(
      { success: false, error: "Failed to send files. Please try again." },
      { status: 500 },
    );
  }
}
