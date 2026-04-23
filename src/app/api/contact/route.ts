import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const projectLabels: Record<string, string> = {
  neu: "Neue Website",
  redesign: "Redesign",
  seo: "SEO / Sichtbarkeit",
  shop: "Onlineshop",
};

const budgetLabels: Record<string, string> = {
  small: "bis 500 €",
  medium: "500 – 1.500 €",
  large: "1.500 – 3.000 €",
  xl: "3.000 € +",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, projectType, budget, page } = body;

    if (!name || !contact) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder" }, { status: 400 });
    }

    // 1. In Supabase speichern
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        contact,
        project_type: projectType,
        budget,
        page: page ?? "unbekannt",
        status: "neu",
      });

    if (dbError) {
      console.error("Supabase error:", dbError.message);
    }

    // 2. E-Mail senden
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: "mail@timmschurig.com",
      subject: `🔔 Neue Anfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 16px;">
          <div style="background: #00bc7d; padding: 4px 16px; border-radius: 8px; display: inline-block; margin-bottom: 24px;">
            <span style="color: white; font-weight: bold; font-size: 14px;">Neue Anfrage</span>
          </div>
          <h1 style="font-size: 24px; color: #0f172a; margin: 0 0 8px;">Anfrage von ${name}</h1>
          <p style="color: #64748b; font-size: 14px; margin: 0 0 32px;">Eingegangen über: <strong>${page}</strong></p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td>
              <td style="padding: 12px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Kontakt</td>
              <td style="padding: 12px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${contact}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Projektart</td>
              <td style="padding: 12px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${projectLabels[projectType] ?? projectType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Budget</td>
              <td style="padding: 12px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${budgetLabels[budget] ?? budget}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #00bc7d15; border-radius: 12px; border: 1px solid #00bc7d30;">
            <p style="margin: 0; color: #0f172a; font-size: 14px;">
              👉 <strong>Jetzt antworten:</strong> Ruf ${name} unter <strong>${contact}</strong> an oder schreib direkt zurück.
            </p>
          </div>

          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px; text-align: center;">
            timmschurig.com · Automatische Benachrichtigung
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
