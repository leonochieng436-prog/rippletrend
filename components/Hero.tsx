"use client";
import { motion } from "framer-motion";
import Ripples from "./Ripples";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex h-[100vh] items-center overflow-hidden bg-navy-950 pt-16 text-white">
      <div aria-hidden className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85')" }} />
      <div aria-hidden className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(8,13,11,.78)_0%,rgba(8,13,11,.57)_48%,rgba(8,13,11,.2)_100%)]" />
      <Ripples className="-right-40 top-1/2 z-20 h-[38rem] w-[38rem] -translate-y-1/2 opacity-50 md:right-0" />
      <div className="relative z-30 mx-auto w-full max-w-6xl px-5">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-5xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-ripple sm:mb-6 sm:text-xs sm:tracking-[0.18em]">Strategy <span className="px-2 text-volt">/</span> Creativity <span className="px-2 text-volt">/</span> Digital growth</p>
          <h1 className="text-4xl font-extrabold uppercase leading-[.98] sm:text-7xl md:text-8xl">Create the <span className="text-volt">Ripple.</span><br />Become the Trend.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:mt-7 sm:text-lg sm:leading-7">We help ambitious businesses build powerful brands, attract the right audience, and turn digital attention into meaningful growth through strategy, creative content, and technology.</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-9">
            <a href="#services" className="rounded-sm bg-volt px-4 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyan-ripple sm:px-6 sm:py-3.5">Explore our services</a>
            <a href="#contact" className="rounded-sm border border-white/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:px-6 sm:py-3.5">Book a consultation</a>
          </div>
        </motion.div>
        <a href="#services" className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:mt-12 sm:text-xs sm:tracking-[0.16em]"><span className="h-8 w-px bg-volt sm:h-10" />Scroll to discover</a>
      </div>
    </section>
  );
}
