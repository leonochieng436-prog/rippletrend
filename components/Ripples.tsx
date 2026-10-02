export default function Ripples({ className = "" }: { className?: string }) {
  const rings = [0, 1.4, 2.8, 4.2, 5.6];
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      {rings.map((d) => (
        <span
          key={d}
          className="animate-ripple absolute inset-0 rounded-full border border-cyan-ripple/60"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-ripple shadow-[0_0_40px_12px_rgba(34,211,238,.5)]" />
    </div>
  );
}
