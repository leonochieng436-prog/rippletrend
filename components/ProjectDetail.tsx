import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export default function ProjectDetail({ slug }: { slug: string }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return null;
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <main className="bg-navy-950 pt-24 text-white md:pt-28">
        <div className="mx-auto max-w-6xl px-5">
          <nav aria-label="Breadcrumb" className="text-sm text-white/50"><Link href="/" className="hover:text-white">Home</Link><span className="px-2 text-volt">/</span><Link href="/portfolio" className="hover:text-white">Portfolio</Link><span className="px-2 text-volt">/</span><span aria-current="page" className="text-white">{project.title}</span></nav>
          <div className="grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-end md:py-12">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-volt">Concept project / {project.industry}</p><h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight sm:text-5xl md:text-6xl">{project.title}</h1><p className="mt-4 max-w-2xl text-base leading-7 text-white/60">{project.overview}</p></div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-volt"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to portfolio</Link>
          </div>
          <div className="relative aspect-[16/8] overflow-hidden border border-white/10 bg-navy-900">
            <Image src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1800&q=90`} alt={`${project.title} concept visual`} fill priority sizes="(min-width: 1024px) 1152px, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
          </div>
          <p className="mt-3 text-xs text-white/40">Illustrative imagery for a demonstration concept. This is not a published client case study.</p>
          <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[1fr_280px] md:py-16">
            <div className="grid gap-8 sm:grid-cols-2">
              <section><p className="text-xs font-bold uppercase tracking-[0.15em] text-volt">The brief</p><h2 className="mt-3 text-xl font-bold">Project overview</h2><p className="mt-3 text-sm leading-6 text-white/60">{project.overview}</p><h3 className="mt-7 text-lg font-bold">Challenge</h3><p className="mt-2 text-sm leading-6 text-white/60">{project.challenge}</p></section>
              <section><p className="text-xs font-bold uppercase tracking-[0.15em] text-volt">Creative direction</p><h2 className="mt-3 text-xl font-bold">Approach</h2><p className="mt-3 text-sm leading-6 text-white/60">{project.approach}</p><h3 className="mt-7 text-lg font-bold">Services</h3><p className="mt-2 text-sm leading-6 text-white/60">{project.services}</p></section>
            </div>
            <aside className="border-l-2 border-volt pl-5"><p className="text-xs font-bold uppercase tracking-[0.15em] text-volt">Project type</p><p className="mt-3 font-semibold">Demonstration concept</p><p className="mt-3 text-sm leading-5 text-white/55">No client outcomes or performance metrics are claimed for this concept.</p></aside>
          </div>
          <div className="grid gap-4 py-10 sm:grid-cols-2 md:py-14">
            {project.gallery.map((image, imageIndex) => <div key={image} className="relative aspect-[4/3] overflow-hidden bg-navy-900"><Image src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1200&q=85`} alt={`${project.title} illustrative gallery image ${imageIndex + 1}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" /></div>)}
          </div>
          <nav aria-label="Project navigation" className="flex justify-between border-t border-white/10 py-6"><Link href={`/portfolio/${previous.slug}`} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-volt"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Previous concept</Link><Link href={`/portfolio/${next.slug}`} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-volt">Next concept<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></nav>
          <div className="pb-12"><Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-volt hover:text-cyan-ripple">View all projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </main>
    </>
  );
}