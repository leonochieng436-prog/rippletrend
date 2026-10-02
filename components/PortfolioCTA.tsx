import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="border-t border-white/10 bg-navy-900 py-14 text-white md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-volt">Have a project in mind?</p><h2 className="mt-2 text-2xl font-extrabold uppercase sm:text-3xl">Let's create something worth showcasing.</h2></div>
        <div className="flex flex-wrap gap-3"><Link href="/#contact" className="inline-flex items-center gap-2 bg-volt px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyan-ripple">Start a project <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/#contact" className="border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-volt hover:text-volt">Contact us</Link></div>
      </div>
    </section>
  );
}