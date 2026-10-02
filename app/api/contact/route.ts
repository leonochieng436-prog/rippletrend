import { NextResponse } from "next/server";
import { Resend } from "resend";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  const name = String(b?.name || "").trim();
  const business = String(b?.business || "").trim();
  const email = String(b?.email || "").trim();
  const phone = String(b?.phone || "").trim();
  const service = String(b?.service || "").trim();
  const budget = String(b?.budget || "").trim();
  const message = String(b?.message || "").trim();
  const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPhone = !phone || phone.replace(/\D/g, "").length >= 7;
  if (!name || (!email && !phone) || !validEmail || !validPhone || !message || name.length > 120 || email.length > 160 || phone.length > 40 || message.length > 4000) {
    return NextResponse.json({ error: "Please add your name, a valid email or phone number, and a message." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log("[contact] RESEND_API_KEY not set. Lead:", { name, business, email, phone, service, budget, message });
    return NextResponse.json({ ok: true });
  }
  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "RTM Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "rippletrendinfo@gmail.com",
      subject: `New enquiry from ${name}`,
      html: `<p><b>Name:</b> ${esc(name)}</p><p><b>Business:</b> ${esc(business)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone)}</p><p><b>Service:</b> ${esc(service)}</p><p><b>Budget:</b> ${esc(budget)}</p><p><b>Message:</b></p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't send your message. Please try WhatsApp instead." }, { status: 502 });
  }
}
