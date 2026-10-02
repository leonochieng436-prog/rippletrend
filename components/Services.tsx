import { ArrowUpRight, Megaphone, Share2, Palette, PenTool, Search, Target, Monitor, Sparkles } from "lucide-react";
import { services } from "@/lib/content";

const icons = { Megaphone, Share2, Palette, PenTool, Search, Target, Monitor, Sparkles };

export default function Services() {
  return (
    <section id="services" className="bg-mist py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">What we do</p><h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-5xl">Explore our best <span className="text-volt">services.</span></h2></div>
          <div className="max-w-xl"><p className="text-sm leading-6 text-white/60">From creative campaigns to data-informed marketing, we build digital solutions to help your business get discovered, earn trust, and grow.</p><a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-volt hover:text-cyan-ripple">Discuss a project <ArrowUpRight className="h-4 w-4" aria-hidden /></a></div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <article key={s.title} className="group min-h-52 border border-white/[0.08] bg-navy-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-volt/50 hover:bg-navy-900">
                <div className="flex items-center justify-between"><span className="font-mono text-xs text-volt">{String(services.indexOf(s) + 1).padStart(2, "0")}</span><Icon className="h-5 w-5 text-white/70 transition group-hover:text-volt" aria-hidden /></div>
                <h3 className="mt-6 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/55">{s.benefit}</p>
                <a href="#contact" aria-label={`Ask about ${s.title}`} className="mt-4 inline-flex text-volt transition-transform group-hover:translate-x-1"><ArrowUpRight className="h-4 w-4" aria-hidden /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
