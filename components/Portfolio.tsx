import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export default function Portfolio() {
  return (
    <section id="work" className="bg-navy-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Selected concepts</p><h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Ideas in <span className="text-volt">motion.</span></h2><p className="mt-3 max-w-xl text-sm text-white/60">Illustrative concept work across creative and digital disciplines.</p></div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-volt transition hover:text-cyan-ripple">Explore portfolio <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900"><Image src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=900&q=80`} alt={`${project.title} concept imagery`} fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" /></div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-volt">Concept / {project.category}</p><h3 className="mt-1 text-lg font-bold group-hover:text-volt">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
