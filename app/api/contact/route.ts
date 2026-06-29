import { NextResponse } from "next/server";

import { SITE } from "@/components/siteConfig";
import { normalizeLang } from "@/lib/i18n";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  address?: string;
  message?: string;
  privacy?: boolean;
  website?: string;
  timeToken?: string;
  lang?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const startedAt = Number(payload.timeToken);
  if (!startedAt || Date.now() - startedAt < 3500) {
    return NextResponse.json({ error: "spam_detected" }, { status: 400 });
  }

  if (payload.website?.trim()) {
    return NextResponse.json({ error: "spam_detected" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const service = payload.service?.trim() ?? "";
  const preferredDate = payload.preferredDate?.trim() ?? "";
  const address = payload.address?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const privacy = payload.privacy === true;

  if (!name || name.length < 2 || !phone || phone.length < 5 || !emailRegex.test(email) || !service || !privacy) {
    return NextResponse.json({ error: "validation_failed" }, { status: 400 });
  }

  const normalizedLang = normalizeLang(payload.lang ?? null);
  const subject = `Neue Anfrage: ${service}`;
  const leadText = [
    `Name: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email}`,
    `Dienstleistung: ${service}`,
    preferredDate ? `Wunschtermin: ${preferredDate}` : null,
    address ? `Adresse: ${address}` : null,
    message ? `Nachricht: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM ?? `MOVEBA <${SITE.email}>`;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? SITE.email;

  if (!resendKey) {
    return NextResponse.json({ error: "missing_resend_key" }, { status: 500 });
  }

  const sendLead = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text: leadText,
    }),
  });

  if (!sendLead.ok) {
    return NextResponse.json({ error: "lead_email_failed" }, { status: 502 });
  }

  const confirmationSubject = normalizedLang === "de"
    ? "Ihre Anfrage ist eingegangen"
    : normalizedLang === "ru"
      ? "Ваш запрос получен"
      : "Your request has been received";

  const confirmationText = normalizedLang === "de"
    ? `Hallo ${name},\n\nwir haben Ihre Anfrage für "${service}" erhalten und melden uns zeitnah zurück.\n\nViele Grüße\nMOVEBA GmbH`
    : normalizedLang === "ru"
      ? `Здравствуйте, ${name}!\n\nМы получили ваш запрос на услугу "${service}" и скоро свяжемся с вами.\n\nС уважением,\nMOVEBA GmbH`
      : `Hello ${name},\n\nwe received your request for "${service}" and will get back to you shortly.\n\nBest regards,\nMOVEBA GmbH`;

  const sendConfirmation = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: confirmationSubject,
      text: confirmationText,
    }),
  });

  if (!sendConfirmation.ok) {
    return NextResponse.json({ error: "confirmation_email_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}