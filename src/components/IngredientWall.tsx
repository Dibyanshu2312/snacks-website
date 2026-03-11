import { Leaf, Droplet, Flame, Wheat, Sparkles, Sun, Heart, Coffee, Star, Shield, CheckCircle, Zap } from 'lucide-react';

const ingredients = [
  { name: "Whole Wheat Flour", note: "Stone-ground. No maida, ever.", icon: Wheat, tilt: "rotate-2" },
  { name: "Pure Desi Ghee", note: "From grass-fed cows. Real flavour.", icon: Droplet, tilt: "-rotate-2" },
  { name: "Whole Spices", note: "Hand-ground in small batches.", icon: Sparkles, tilt: "rotate-3" },
  { name: "Rock Salt", note: "Himalayan pink. Nothing synthetic.", icon: Star, tilt: "-rotate-1" },
  { name: "Cold-Press Oils", note: "No palm oil. No shortcuts.", icon: Droplet, tilt: "rotate-2" },
  { name: "Fresh Methi", note: "Sourced weekly. Never dried.", icon: Leaf, tilt: "-rotate-3" },
  { name: "Besan", note: "Roasted slow. No raw taste.", icon: Flame, tilt: "rotate-1" },
  { name: "Unrefined Sugar", note: "Khandsari. Not white sugar.", icon: Coffee, tilt: "-rotate-2" },
  { name: "Roasted Nuts", note: "Local farms. No bleaching.", icon: Sun, tilt: "rotate-2" },
  { name: "Dry Fruits", note: "Sun-dried. Zero sulphur.", icon: Heart, tilt: "-rotate-1" },
  { name: "Cardamom", note: "Hand-shelled. Full aroma.", icon: Zap, tilt: "rotate-3" },
  { name: "Filtered Water", note: "Clean. Simple. Nothing else.", icon: Droplet, tilt: "-rotate-2" },
];

export default function IngredientWall() {
  return (
    <section className="relative bg-rust py-24 md:py-32 overflow-hidden grain-overlay z-40">
      
      {/* Vertical Text Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 font-accent text-[150px] font-bold text-cream/5 uppercase tracking-widest whitespace-nowrap pointer-events-none select-none">
        CLEAN LABEL
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <h2 className="font-display text-6xl md:text-[100px] leading-[0.85] text-cream tracking-tight max-w-3xl -ml-4 md:-ml-12">
            Nothing to Hide. <br/>
            Everything to Love.
          </h2>
          <p className="font-accent text-sm md:text-base font-bold uppercase tracking-widest text-cream/60 mt-8 ml-2">
            EVERY INGREDIENT. EVERY BATCH. ALWAYS.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pb-24">
          {ingredients.map((ing, i) => {
            const Icon = ing.icon;
            return (
              <div
                key={i}
                className={`break-inside-avoid bg-cream p-8 rounded-[2rem] shadow-xl transform ${ing.tilt} relative group`}
              >
                <div className="text-rust mb-6">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl md:text-[28px] leading-tight text-night mb-3">
                  {ing.name}
                </h3>
                <p className="text-night/70 font-medium text-lg leading-snug mb-8">
                  {ing.note}
                </p>
                
                <div className="absolute bottom-6 right-6 flex items-center gap-2 text-pistachio opacity-100">
                  <CheckCircle size={16} />
                  <span className="font-accent text-[10px] font-bold uppercase tracking-wider">In Every Batch</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Scrolling Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-night py-4 z-20 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-left w-max">
          {Array(8).fill("We do not use: Preservatives · Palm Oil · Artificial Colors · Refined Sugar · Maida · MSG · ").map((text, i) => (
            <span key={i} className="text-gold font-accent text-xl md:text-2xl font-bold uppercase tracking-widest px-4">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
