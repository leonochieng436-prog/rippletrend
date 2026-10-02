import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="bg-navy-950 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">A clear way forward</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">From ideas <span className="text-volt">to impact.</span></h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {processSteps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="grid h-12 w-12 place-items-center border border-volt font-mono font-bold text-volt">{String(i + 1).padStart(2, "0")}</span>
              {i < processSteps.length - 1 && <span aria-hidden className="absolute left-14 top-6 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-volt to-transparent md:block" />}
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
