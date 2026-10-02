import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { business } from "@/lib/content";
const nav = [["Home", "/#top"], ["About", "/about"], ["Services", "/#services"], ["Industries", "/#industries"], ["Portfolio", "/portfolio"], ["Packages", "/#packages"], ["Insights", "/#insights"], ["Contact", "/#contact"]];
const socials = [["Facebook", Facebook], ["Instagram", Instagram], ["LinkedIn", Linkedin], ["Twitter", Twitter]] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10 text-sm text-white/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-12">
        <div>
          <p className="font-bold text-white">Ripple Trend Marketing Agency</p>
          <p className="mt-1">Create the Ripple. Become the Trend.</p>
          <p className="mt-3">{business.address}</p>
          <a className="mt-1 inline-block hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
          <div className="mt-1 flex flex-wrap gap-x-3">{business.phones.map((phone) => <a key={phone} className="hover:text-white" href={`tel:+254${phone.replace(/^0/, "").replace(/\s/g, "")}`}>{phone}</a>)}</div>
        </div>
        <nav aria-label="Footer" className="w-full max-w-md md:ml-auto">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Explore</p>
          <ul className="mt-2 grid list-none grid-cols-2 gap-x-8 p-0">
            {nav.map(([l, h]) => (
              <li key={h} className="border-b border-white/[0.08]">
                <a href={h} className="group block py-2.5 text-sm font-medium text-white/60 transition hover:text-white">
                  <span aria-hidden="true" className="mr-3 inline-block h-px w-3 align-middle bg-volt transition-all group-hover:w-5" />{l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Social platforms</p>
          <ul aria-label="Social media platforms" className="mt-3 grid grid-cols-4 gap-2">
            {socials.map(([label, Icon]) => (
              <li key={label}>
                <span role="img" aria-label={label} title={label} className="grid h-10 w-10 place-items-center border border-white/10 text-white/60 transition hover:border-volt/50 hover:text-volt">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-5 pt-5 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Ripple Trend Marketing Agency</p>
      </div>
      <a href="#top" aria-label="Scroll to top" title="Scroll to top" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-sm bg-volt text-navy-950 shadow-lg transition hover:bg-cyan-ripple">
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </a>
    </footer>
  );
}
