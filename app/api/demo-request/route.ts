import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type DemoRequestPayload = {
  namn?: string;
  foretag?: string;
  email?: string;
  telefonnummer?: string;
  source?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ success: false, error: message }, { status: 400 });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as DemoRequestPayload;

    const namn = body.namn?.trim() ?? "";
    const foretag = body.foretag?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const telefonnummer = body.telefonnummer?.trim() ?? "";
    const source = body.source?.trim() || "/blog/scandinavian-digital-menu";

    if (!namn) {
      return badRequest("Vänligen fyll i ditt namn.");
    }

    if (!foretag) {
      return badRequest("Vänligen fyll i företagsnamn.");
    }

    if (!emailPattern.test(email)) {
      return badRequest("Vänligen ange en giltig e-postadress.");
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { success: false, error: "Email configuration is missing." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const timestamp = new Date().toLocaleString("sv-SE", {
      timeZone: "Europe/Stockholm",
    });

    const textBody = [
      "Ny demo-förfrågan",
      "",
      `Namn: ${namn}`,
      `Företag: ${foretag}`,
      `E-post: ${email}`,
      `Telefonnummer: ${telefonnummer || "Ej angivet"}`,
      `Sida: ${source}`,
      `Tidpunkt: ${timestamp}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"SmartArtAI System" <${process.env.SMTP_USER}>`,
      to:
        process.env.DEMO_REQUEST_DESTINATION_EMAIL ||
        process.env.DESTINATION_EMAIL ||
        "hello@smartartai.se",
      replyTo: email,
      subject: "Ny demo-förfrågan från Smart Art AI",
      text: textBody,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Demo request email error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Något gick fel. Försök igen om en stund.",
      },
      { status: 500 },
    );
  }
}
