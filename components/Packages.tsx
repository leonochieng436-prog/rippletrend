import { Check } from "lucide-react";
import { packages } from "@/lib/content";

export default function Packages() {
  return (
    <section id="packages" className="bg-mist py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Ways to work together</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Find the right strategy <span className="text-volt">for your business.</span></h2>
        <p className="mt-3 max-w-xl text-white/60">Each engagement is scoped around your goals, services, and budget. Get in touch for a tailored quote.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => {
            const featured = "featured" in p && p.featured;
            return (
              <article key={p.name} className={`flex flex-col border p-6 ${featured ? "border-volt bg-navy-950 text-white" : "border-white/10 bg-navy-900"}`}>
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <p className="mt-1 text-sm text-volt">{p.tagline}</p>
                <p className="mt-5 text-2xl font-extrabold">{p.price}{p.name !== "Custom" && <span className="text-sm font-medium opacity-60"> / month</span>}</p>
                <ul className="mt-5 flex-1 space-y-3 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-white/70"><Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" aria-hidden />{pt}</li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-7 rounded-sm py-3 text-center text-sm font-bold transition ${featured ? "bg-volt text-navy-950 hover:bg-cyan-ripple" : "border border-white/15 text-white hover:border-volt"}`}>Request a quote</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
