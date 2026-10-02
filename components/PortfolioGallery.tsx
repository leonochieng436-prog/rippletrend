"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/lib/content";

const categories = ["All Projects", "Branding", "Social Media", "Advertising", "Web Design", "Content Creation", "Photography & Video"];
const pageSize = 6;

export default function PortfolioGallery() {
  const [category, setCategory] = useState("All Projects");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const filtered = projects.filter((project) => category === "All Projects" || project.category === category);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="bg-navy-950 py-10 text-white md:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio by category">
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => { setCategory(item); setVisibleCount(pageSize); }} aria-pressed={category === item}
              className={`border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${category === item ? "border-volt bg-volt text-navy-950" : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"}`}>
              {item}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">Showing {visible.length} of {filtered.length} projects</p>
        {visible.length ? (
          <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <article key={project.slug}>
                <Link href={`/portfolio/${project.slug}`} className="group block focus-visible:outline-volt">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                    <Image src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1000&q=85`} alt={`${project.title} concept imagery`} fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 bg-navy-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-volt">Concept work</span>
                    <span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center bg-volt text-navy-950 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 py-4">
                    <div><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-volt">{project.category} <span className="px-1 text-white/30">/</span> {project.industry}</p><h2 className="mt-2 text-lg font-bold text-white transition group-hover:text-volt">{project.title}</h2><p className="mt-1 text-sm leading-5 text-white/55">{project.note}</p></div>
                    <span className="mt-1 shrink-0 text-white/35"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-white/10 py-16 text-center"><p className="text-lg font-semibold">No projects in this category yet.</p><p className="mt-2 text-sm text-white/50">Choose another filter to explore the concept gallery.</p></div>
        )}
        {visible.length < filtered.length && (
          <div className="mt-10 text-center"><button type="button" onClick={() => setVisibleCount((count) => count + pageSize)} className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-volt hover:text-volt">Load more projects <Plus className="h-4 w-4" aria-hidden="true" /></button></div>
        )}
      </div>
    </section>
  );
}