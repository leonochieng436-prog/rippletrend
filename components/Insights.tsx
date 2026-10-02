import { articles } from "@/lib/content";

export default function Insights() {
  return (
    <section id="insights" className="bg-mist py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Ideas for what comes next</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">The <span className="text-volt">Ripple Effect.</span></h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">Insights, strategies, and ideas for navigating the digital marketplace.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="overflow-hidden border border-white/10 bg-navy-950">
              <div className="h-44 bg-cover bg-center" aria-hidden style={{ backgroundImage: `url('https://images.unsplash.com/${a.image}?auto=format&fit=crop&w=900&q=80')` }} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-volt">{a.category}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">{a.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
