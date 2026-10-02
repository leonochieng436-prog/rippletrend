"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Camera,
  Compass,
  FileText,
  Lightbulb,
  MapPinned,
  Monitor,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShoppingBag,
  Target,
  TrendingUp,
  Utensils,
  Users,
} from "lucide-react";
import Ripples from "@/components/Ripples";

const beliefs = [
  ["Strategy", "Direction grounded in your goals.", Compass],
  ["Creativity", "Ideas that make your value clear.", Lightbulb],
  ["Technology", "Tools that make good work go further.", Monitor],
  ["Content", "Useful stories made for your audience.", PenTool],
  ["Data", "Insight that guides the next move.", BarChart3],
] as const;

const strengths = [
  ["Strategy before execution", "We take time to understand your business before shaping the campaign.", Target],
  ["Creative that communicates", "Visuals and content should make your brand's value easier to understand.", Palette],
  ["Audience-focused solutions", "We help you connect with the people your business is here to serve.", Users],
  ["Growth-oriented marketing", "We work toward visibility, engagement, leads, and meaningful business objectives.", TrendingUp],
] as const;

const industries = [
  ["Startups & SMEs", Rocket],
  ["Hospitality & tourism", MapPinned],
  ["Real estate", Building2],
  ["Beauty & wellness", Camera],
  ["Retail & e-commerce", ShoppingBag],
  ["Professional services", FileText],
  ["Creative businesses", Palette],
  ["Nonprofits & organizations", Users],
] as const;

const steps = [
  ["Understand", "We learn about your business, audience, market, and goals."],
  ["Plan", "We develop a strategy tailored to your objectives."],
  ["Create", "We execute campaigns and develop creative digital solutions."],
  ["Improve", "We monitor performance and optimize our approach."],
] as const;

export default function AboutStory() {
  return (
    <>
      <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-950 pt-16 text-white">
        <div aria-hidden className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=85')" }} />
        <div aria-hidden className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(8,13,11,.86)_0%,rgba(8,13,11,.64)_55%,rgba(8,13,11,.28)_100%)]" />
        <div className="relative z-20 mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/55"><a href="/" className="transition hover:text-white">Home</a><span className="px-2 text-volt">/</span><span aria-current="page" className="text-white">About us</span></nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-volt">Who we are</p>
            <h1 className="text-4xl font-extrabold uppercase leading-[1.02] sm:text-6xl md:text-7xl">We create the ripples that <span className="text-volt">move brands forward.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">We are Ripple Trend Marketing Agency, a creative and technology-driven team helping businesses build powerful brands, connect with their audiences, and turn digital presence into meaningful growth.</p>
            <a href="#story" className="mt-8 inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-sm font-bold transition hover:border-volt hover:text-volt">Explore our approach <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </motion.div>
        </div>
      </section>

      <section id="story" className="bg-navy-950 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16">
          <div className="grid min-h-[390px] grid-cols-5 grid-rows-6 gap-3">
            <div role="img" aria-label="Creative team collaborating on a campaign" className="col-span-3 row-span-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80')" }} />
            <div role="img" aria-label="Content production in a creative studio" className="col-span-2 row-span-3 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80')" }} />
            <div role="img" aria-label="A modern creative workspace" className="col-span-2 row-span-3 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80')" }} />
            <div className="col-span-3 row-span-2 flex items-center border border-volt/30 bg-navy-900 p-4 sm:p-5"><p className="text-sm font-bold leading-5 text-white">Creative ideas. Strategic execution. Meaningful growth.</p></div>
          </div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Our story</p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Turning ideas into <span className="text-volt">influence.</span></h2>
            <p className="mt-6 leading-7 text-white/65">Ripple Trend Marketing Agency is a creative digital marketing agency built to help businesses turn ideas into influence and online presence into growth.</p>
            <p className="mt-4 leading-7 text-white/65">Having a social media account is not the same as having a digital marketing strategy. We bring together marketing strategy, creative design, content, technology, and digital advertising to help brands communicate better and reach the right people.</p>
            <a href="#mission" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-volt hover:text-cyan-ripple">What guides us <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </motion.div>
        </div>
      </section>

      <section id="mission" className="border-y border-white/[0.08] bg-navy-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Our purpose</p><h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-4xl">Built to help brands <span className="text-volt">move forward.</span></h2></div>
          <div className="grid border border-white/10 md:grid-cols-2">
            <motion.article whileHover={{ y: -3 }} className="border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r">
              <p className="font-mono text-xs text-volt">01 / OUR MISSION</p><h3 className="mt-5 text-2xl font-bold">Help businesses grow.</h3>
              <p className="mt-3 max-w-lg leading-7 text-white/60">We help businesses grow through creative, strategic, and technology-driven marketing that builds visibility, engagement, trust, and meaningful results.</p>
            </motion.article>
            <motion.article whileHover={{ y: -3 }} className="p-6 sm:p-8">
              <p className="font-mono text-xs text-volt">02 / OUR VISION</p><h3 className="mt-5 text-2xl font-bold">Make brands influential.</h3>
              <p className="mt-3 max-w-lg leading-7 text-white/60">We aspire to become a leading African digital marketing agency, transforming businesses into recognizable, influential, and competitive brands.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Our philosophy</p><h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-5xl">Where creativity <span className="text-volt">meets strategy.</span></h2><p className="mt-4 leading-7 text-white/60">Great marketing starts with understanding. Creativity gets attention; strategy gives it direction. We bring the right disciplines together around meaningful objectives.</p></div>
          <div className="relative mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {beliefs.map(([title, copy, Icon], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="group min-h-40 bg-navy-950 p-5 transition-colors hover:bg-navy-900">
                <Icon className="h-5 w-5 text-volt transition-transform group-hover:scale-110" aria-hidden="true" /><h3 className="mt-6 font-bold">{title}</h3><p className="mt-2 text-sm leading-5 text-white/55">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Why Ripple Trend</p><h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-5xl">More than marketing. <span className="text-volt">A partner in growth.</span></h2></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(([title, copy, Icon], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="group border border-white/10 p-5 transition-colors hover:border-volt/40 hover:bg-white/[0.03]">
                <div className="flex items-center justify-between"><span className="font-mono text-xs text-volt">0{index + 1}</span><Icon className="h-5 w-5 text-white/60 transition group-hover:text-volt" aria-hidden="true" /></div><h3 className="mt-8 font-bold">{title}</h3><p className="mt-2 text-sm leading-5 text-white/55">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-navy-950 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Who we work with</p><h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Helping businesses of every size <span className="text-volt">move forward.</span></h2></div>
          <ul className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {industries.map(([label, Icon]) => <li key={label} className="flex min-h-24 flex-col justify-between bg-navy-950 p-3 transition hover:bg-navy-900 sm:p-4"><Icon className="h-5 w-5 text-volt" aria-hidden="true" /><span className="mt-4 text-xs font-semibold leading-4 text-white/75">{label}</span></li>)}
          </ul>
        </div>
      </section>

      <section id="approach" className="bg-navy-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">How we work</p><h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-5xl">A thoughtful process. <span className="text-volt">Clear momentum.</span></h2>
          <ol className="mt-10 grid gap-8 border-l border-volt/40 pl-5 sm:grid-cols-2 sm:border-l-0 sm:pl-0 lg:grid-cols-4">
            {steps.map(([title, copy], index) => <motion.li key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="relative border-t border-white/10 pt-4 sm:pl-4"><span className="absolute -left-[1.6rem] top-4 h-2 w-2 bg-volt sm:left-4 sm:top-[-5px]" /><span className="font-mono text-xs text-volt">0{index + 1}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{copy}</p></motion.li>)}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-white/10 bg-navy-900 py-20 text-white md:py-28">
        <Ripples className="-right-32 top-1/2 z-0 h-[34rem] w-[34rem] -translate-y-1/2 opacity-30" />
        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Let's move forward</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Every great trend starts with <span className="text-volt">a ripple.</span></h2>
          <p className="mt-5 max-w-xl leading-7 text-white/60">Your business has potential. Let's turn your ideas into a strategy that helps your brand reach the right audience and move forward.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="/#contact" className="inline-flex items-center gap-2 bg-volt px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyan-ripple">Let's work together <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><a href="/#services" className="border border-white/25 px-5 py-3 text-sm font-semibold transition hover:border-volt hover:text-volt">Explore our services</a></div>
        </div>
      </section>
    </>
  );
}