"use client";
import { useState } from "react";
import { projects } from "@/lib/content";

const cats = ["All", "Branding", "Social Media", "Advertising", "Web Design", "Content Creation"];

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);
  return (
    <section id="work" className="bg-navy-950 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Ideas in motion</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Recently explored <span className="text-volt">projects</span></h2>
        <p className="mt-3 max-w-xl text-white/60">Explore demonstration concepts showing how strategy, creativity, and digital craft can work together. These are not client engagements.</p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-volt text-navy-950" : "bg-white/5 text-white/70 hover:bg-white/10"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {shown.map((p) => (
            <article key={p.title} className="group overflow-hidden border border-white/10 bg-navy-900">
              <div className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]" aria-hidden style={{ backgroundImage: `linear-gradient(0deg,rgba(12,18,15,.18),rgba(12,18,15,.02)),url('https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1200&q=80')` }} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-volt">Demonstration concept · {p.industry}</p>
                <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.note}</p>
                <p className="mt-3 text-sm text-white/50">Services: {p.services}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
