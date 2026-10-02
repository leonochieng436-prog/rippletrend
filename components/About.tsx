import { ArrowUpRight, BarChart3, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-navy-950 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:items-center">
        <div className="relative grid min-h-[420px] grid-cols-5 grid-rows-6 gap-3">
          <div className="col-span-3 row-span-4 bg-cover bg-center" role="img" aria-label="Creative team planning a campaign" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80')" }} />
          <div className="col-span-2 row-span-3 bg-cover bg-center" role="img" aria-label="Creative production in progress" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80')" }} />
          <div className="col-span-2 row-span-3 bg-cover bg-center" role="img" aria-label="Creative workspace" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80')" }} />
          <div className="col-span-3 row-span-2 flex items-center gap-3 border border-volt/30 bg-navy-900 p-5"><span className="grid h-10 w-10 shrink-0 place-items-center bg-volt text-navy-950"><Lightbulb className="h-5 w-5" aria-hidden /></span><p className="text-sm font-semibold leading-5">Creative ideas. Strategic execution. Meaningful growth.</p></div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">About Ripple Trend</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Ready to <span className="text-volt">grow your business?</span></h2>
          <p className="mt-6 leading-7 text-white/65">Your customers are online. Your competitors are online. Your brand deserves to stand out. We combine strategy, creativity, technology, and data to make your digital presence a meaningful business asset.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-volt pl-4"><BarChart3 className="h-5 w-5 text-volt" aria-hidden /><h3 className="mt-3 font-bold">Business growth</h3><p className="mt-1 text-sm leading-5 text-white/55">Build visibility, reach relevant audiences, and create opportunities.</p></div>
            <div className="border-l-2 border-volt pl-4"><Lightbulb className="h-5 w-5 text-volt" aria-hidden /><h3 className="mt-3 font-bold">Marketing solutions</h3><p className="mt-1 text-sm leading-5 text-white/55">Create useful content, improve campaigns, and strengthen your presence.</p></div>
          </div>
          <ul className="mt-7 grid gap-2 text-sm text-white/65 sm:grid-cols-2"><li>Tailored strategies</li><li>Creative, data-informed work</li><li>Audience-focused campaigns</li><li>Continuous optimization</li></ul>
          <a href="#industries" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-volt hover:text-cyan-ripple">Who we work with <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
        </div>
      </div>
    </section>
  );
}
