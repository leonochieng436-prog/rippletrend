"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Ripples from "./Ripples";
import { services, waLink, business } from "@/lib/content";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      setState("done");
    } catch (err) {
      setMsg(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  const field = "mt-1 w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40";
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy-950 py-24 text-white">
      <Ripples className="-left-48 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 opacity-60" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Start a conversation</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Your business has a story. <span className="text-volt">Let&apos;s create the ripple.</span></h2>
          <p className="mt-5 max-w-md text-white/65">Tell us what you are working toward. We&apos;ll get back to you and start shaping a strategy around your goals.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {business.phones.map((phone) => <a key={phone} href={waLink(undefined, `254${phone.replace(/^0/, "").replace(/\s/g, "")}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-3 font-bold text-navy-950 transition hover:brightness-110"><MessageCircle className="h-5 w-5" aria-hidden />WhatsApp {phone}</a>)}
          </div>
          <ul className="mt-6 space-y-1 text-sm text-white/65">
            <li>Email: <a className="underline" href={`mailto:${business.email}`}>{business.email}</a></li>
            {business.phones.map((phone) => <li key={phone}>Phone / WhatsApp: <a className="underline" href={`tel:+254${phone.replace(/^0/, "").replace(/\s/g, "")}`}>{phone}</a></li>)}
            <li>{business.address}</li>
            <li>{business.hours}</li>
          </ul>
        </div>
        <div className="border border-white/10 bg-navy-900/80 p-7">
          {state === "done" ? (
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} role="status">
              <h3 className="text-xl font-bold text-cyan-ripple">Message sent</h3>
              <p className="mt-2 text-white/75">Thanks. We&apos;ll be in touch shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <label className="block text-sm">Full name<input name="name" required autoComplete="name" className={field} /></label>
              <label className="block text-sm">Business name<input name="business" autoComplete="organization" className={field} /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">Email address<input name="email" type="email" autoComplete="email" className={field} /></label>
                <label className="block text-sm">Phone number<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
              </div>
              <label className="block text-sm">Service you need
                <select name="service" className={field} defaultValue="">
                  <option value="" className="text-navy-900">Not sure yet</option>
                  {services.map((s) => (<option key={s.title} className="text-navy-900">{s.title}</option>))}
                </select>
              </label>
              <label className="block text-sm">Project budget (optional)
                <select name="budget" className={field} defaultValue=""><option value="" className="text-navy-900">Prefer to discuss</option><option className="text-navy-900">Under KES 25,000</option><option className="text-navy-900">KES 25,000–75,000</option><option className="text-navy-900">KES 75,000+</option></select>
              </label>
              <label className="block text-sm">Tell us about your project<textarea name="message" required rows={4} className={field} /></label>
              <p className="text-xs text-white/45">Add an email address or phone number so we can reply.</p>
              {state === "error" && <p role="alert" className="text-sm text-red-300">{msg}</p>}
              <button disabled={state === "sending"} className="w-full rounded-sm bg-volt py-3.5 font-bold text-navy-950 transition hover:bg-cyan-ripple disabled:opacity-60">
                {state === "sending" ? "Sending..." : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
