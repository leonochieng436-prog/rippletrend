import { BriefcaseBusiness, Building2, Camera, MapPinned, Palette, Rocket, ShoppingBag, Utensils } from "lucide-react";

const industries = [
  ["Hospitality & tourism", MapPinned],
  ["Real estate", Building2],
  ["Beauty & wellness", Camera],
  ["Retail & e-commerce", ShoppingBag],
  ["Food & beverage", Utensils],
  ["Professional services", BriefcaseBusiness],
  ["Startups & SMEs", Rocket],
  ["Creative businesses", Palette],
] as const;

export default function Industries() {
  return (
    <section id="industries" className="border-y border-white/[0.08] bg-navy-900 py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Industries</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Brands deserve to <span className="text-volt">be seen.</span></h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/60">We help businesses across Kenya build their identity, strengthen their online presence, and connect with their customers.</p>
        </div>
        <ul className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
          {industries.map(([label, Icon]) => (
            <li key={label} className="flex min-h-28 flex-col justify-between bg-navy-900 p-4 transition hover:bg-navy-800">
              <Icon className="h-5 w-5 text-volt" aria-hidden />
              <span className="text-xs font-semibold leading-4 text-white/80">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}