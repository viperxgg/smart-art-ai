import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create an HTML summary of the submitted data
    let htmlContent = `<h2>New Inquiry from SmartArtAI Website</h2>`;
    htmlContent += `<table style="width: 100%; border-collapse: collapse; margin-top: 15px;">`;
    
    for (const [key, value] of Object.entries(data)) {
      if (key !== 'Subject' && value) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px 0; font-weight: bold; width: 30%; font-family: sans-serif;">${key}</td>
            <td style="padding: 10px 0; font-family: sans-serif;">${value}</td>
          </tr>
        `;
      }
    }
    htmlContent += `</table>`;

    const subject = data.Subject || 'New Request – SmartArtAI';
    
    // The user will set SMTP_USER and SMTP_PASS in their .env file (e.g. Google App Password)
    // The DESTINATION_EMAIL is where they want to receive the leads (e.g. azzam.khalaf.swd23@gmail.com)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SmartArtAI System" <${process.env.SMTP_USER}>`,
      to: "hello@smartartai.se",
      subject: subject,
      html: htmlContent,
      replyTo: data['E-post'] || data['Epost'] || data.email,
    };

    await transporter.sendMail(mailOptions);

    // --- AUTOMATIC CUSTOMER REPLY ---
    const customerEmail = data['E-post'] || data['Epost'] || data.email;
    const customerName = data['Namn'] || data['Name'] || "Vän";
    const product = data.Product || data.Tjänst || "";

    if (customerEmail) {
      let autoReplyHtml = "";
      let autoReplySubject = "";

      if (product === "Smart Menu Experience") {
        autoReplySubject = "Tack för ditt intresse för Smart Menu Experience! 🍽️";
        autoReplyHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #000;">Hej ${customerName}!</h2>
            <p>Tack för att du kontaktade oss angående <strong>Smart Menu Experience</strong>. Vi är glada att du vill utforska hur en modern digital meny kan lyfta din verksamhet.</p>
            <p>Vårt team kommer att granska din förfrågan och återkomma inom kort för att boka en kort demo eller diskutera nästa steg.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #888;">Med vänliga hälsningar,<br>Team SmartArt AI Solutions</p>
          </div>
        `;
      } else if (product.includes("AI Assistant") || product.includes("Agent X") || product.includes("Intelligens")) {
        autoReplySubject = "Din AI-strategi är på väg! 🤖";
        autoReplyHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #000;">Hej ${customerName}!</h2>
            <p>Tack för att du visat intresse för våra <strong>AI-lösningar</strong>. Vi har mottagit din analys och håller på att titta på hur vi kan implementera neural intelligens i dina flöden.</p>
            <p>En av våra specialister hör av sig snarast för en djupare genomgång av din personliga blueprint.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #888;">SmartArt AI – Framtidens automatisering</p>
          </div>
        `;
      } else {
        autoReplySubject = "Vi har mottagit din förfrågan – SmartArt AI";
        autoReplyHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #000;">Hej ${customerName}!</h2>
            <p>Tack för att du hörde av dig till oss på SmartArt AI. Vi har tagit emot din förfrågan angående <strong>${product || "vår expertis"}</strong>.</p>
            <p>Vi går igenom dina uppgifter nu och återkommer till dig så snart vi kan (vanligtvis inom 24 timmar) för att diskutera hur vi bäst hjälper din organisation framåt.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #888;">Hälsningar,<br>Azzam & Teamet på SmartArt AI</p>
          </div>
        `;
      }

      await transporter.sendMail({
        from: `"SmartArt AI" <${process.env.SMTP_USER}>`,
        to: customerEmail,
        subject: autoReplySubject,
        html: autoReplyHtml,
      });
    }

    return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
