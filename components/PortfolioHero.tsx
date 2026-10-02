import Image from "next/image";
import Link from "next/link";
import Ripples from "@/components/Ripples";
import { projects } from "@/lib/content";

export default function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-navy-950 pt-24 text-white md:pt-28">
      <Ripples className="-right-24 top-1/2 z-0 h-80 w-80 -translate-y-1/2 opacity-25" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 md:grid-cols-[1.1fr_.9fr] md:pb-14">
        <div>
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/50"><Link href="/" className="hover:text-white">Home</Link><span className="px-2 text-volt">/</span><span aria-current="page" className="text-white">Portfolio</span></nav>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Our portfolio</p>
          <h1 className="mt-3 text-4xl font-extrabold uppercase leading-[1.02] sm:text-5xl md:text-6xl">Ideas brought <span className="text-volt">to life.</span></h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">A curated collection of creative concepts, digital experiences, campaigns, and brand identities.</p>
        </div>
        <div className="grid h-40 grid-cols-3 gap-2 sm:h-48" aria-label="Selected concept imagery">
          {projects.slice(0, 3).map((project) => (
            <div key={project.slug} className="relative overflow-hidden border border-white/10">
              <Image src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=700&q=80`} alt="" fill sizes="(min-width: 768px) 14vw, 30vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}