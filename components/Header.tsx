"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["About", "#about"], ["Services", "#services"], ["Industries", "#industries"], ["Portfolio", "#work"],
  ["Packages", "#packages"], ["Process", "#process"], ["Insights", "#insights"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-bold text-white">
          <span className="relative grid h-7 w-7 place-items-center">
            <span className="absolute inset-0 rounded-full border border-volt/70" />
            <span className="h-3 w-3 rounded-full bg-volt" />
          </span>
          <span className="leading-tight">Ripple Trend<span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">Marketing Agency</span></span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          {links.map(([l, h]) => (<a key={h} href={h} className="transition hover:text-white">{l}</a>))}
          <a href="#contact" className="rounded-sm bg-volt px-4 py-2 font-bold text-navy-950 transition hover:bg-cyan-ripple">Let&apos;s Talk</a>
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-navy-950 md:hidden">
            <div className="flex flex-col gap-1 px-5 pb-5">
              {links.map(([l, h]) => (<a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-white/85">{l}</a>))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-sm bg-volt py-3 text-center font-bold text-navy-950">Let&apos;s Talk</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
