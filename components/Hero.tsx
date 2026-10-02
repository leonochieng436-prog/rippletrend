"use client";
import { motion } from "framer-motion";
import Ripples from "./Ripples";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-950 pt-16 text-white">
      <div aria-hidden className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85')" }} />
      <div aria-hidden className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(8,13,11,.78)_0%,rgba(8,13,11,.57)_48%,rgba(8,13,11,.2)_100%)]" />
      <Ripples className="-right-40 top-1/2 z-20 h-[38rem] w-[38rem] -translate-y-1/2 opacity-50 md:right-0" />
      <div className="relative z-30 mx-auto w-full max-w-6xl px-5 py-20 md:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-5xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-ripple">Strategy <span className="px-2 text-volt">/</span> Creativity <span className="px-2 text-volt">/</span> Digital growth</p>
          <h1 className="text-4xl font-extrabold uppercase leading-[.98] sm:text-5xl md:text-6xl lg:text-7xl">Create the <span className="text-volt">Ripple.</span><br />Become the Trend.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">We help ambitious businesses build powerful brands, attract the right audience, and turn digital attention into meaningful growth through strategy, creative content, and technology.</p>
          <div className="mt-8 grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
            <a href="#services" className="flex min-h-14 items-center justify-center rounded-sm bg-volt px-2.5 py-3 text-center text-xs font-bold leading-tight text-navy-950 transition hover:bg-cyan-ripple sm:px-5 sm:text-sm">Explore our services</a>
            <a href="#contact" className="flex min-h-14 items-center justify-center rounded-sm border border-white/40 px-2.5 py-3 text-center text-xs font-semibold leading-tight text-white transition hover:border-white hover:bg-white/10 sm:px-5 sm:text-sm">Book a consultation</a>
          </div>
        </motion.div>
        <a href="#services" className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/65 md:mt-12"><span className="h-8 w-px bg-volt" />Scroll to discover</a>
      </div>
    </section>
  );
}
