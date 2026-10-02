import { business } from "@/lib/content";
const nav = [["Home", "#top"], ["About", "#about"], ["Services", "#services"], ["Industries", "#industries"], ["Portfolio", "#work"], ["Packages", "#packages"], ["Insights", "#insights"], ["Contact", "#contact"]];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 md:flex-row">
        <div>
          <p className="font-bold text-white">Ripple Trend Marketing Agency</p>
          <p className="mt-1">Create the Ripple. Become the Trend.</p>
          <p className="mt-3">{business.address}</p>
          <a className="mt-1 inline-block hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
          <div className="mt-1 flex flex-wrap gap-x-3">{business.phones.map((phone) => <a key={phone} className="hover:text-white" href={`tel:+254${phone.replace(/^0/, "").replace(/\s/g, "")}`}>{phone}</a>)}</div>
          <p className="mt-1">&copy; {new Date().getFullYear()} Ripple Trend Marketing Agency</p>
        </div>
        <nav aria-label="Footer" className="flex max-w-md flex-wrap gap-x-5 gap-y-2">
          {nav.map(([l, h]) => (<a key={h} href={h} className="hover:text-white">{l}</a>))}
        </nav>
      </div>
    </footer>
  );
}
