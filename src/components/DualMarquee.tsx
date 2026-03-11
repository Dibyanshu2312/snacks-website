export default function DualMarquee() {
  const words1 = ["100% CLEAN INGREDIENTS", "NO PALM OIL", "HANDROLLED", "ZERO PRESERVATIVES", "PURE GHEE", "AUTHENTIC TASTE"];
  const words2 = ["SHIPPING PAN-INDIA", "FRESHLY MADE", "PREMIUM QUALITY", "FAMILY RECIPE", "GUILT-FREE SNACKING", "PERFECT CRUNCH"];

  return (
    <section className="bg-night py-8 overflow-hidden flex flex-col gap-4 border-y-4 border-gold z-30 relative">
      {/* Top Strip - Moving Left */}
      <div className="flex whitespace-nowrap animate-marquee-left w-max">
        {Array(8).fill(words1).flat().map((word, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-accent text-xl md:text-2xl font-bold uppercase tracking-widest text-cream">
              {word}
            </span>
            <div className="w-3 h-3 rounded-full bg-rust"></div>
          </div>
        ))}
      </div>

      {/* Bottom Strip - Moving Right */}
      <div className="flex whitespace-nowrap animate-marquee-right w-max">
        {Array(8).fill(words2).flat().map((word, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-accent text-xl md:text-2xl font-bold uppercase tracking-widest text-gold">
              {word}
            </span>
            <div className="w-3 h-3 rounded-full bg-pistachio"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
