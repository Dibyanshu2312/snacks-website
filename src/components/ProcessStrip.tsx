import { Leaf, Hand, Flame, Package } from 'lucide-react';

const steps = [
  { num: "01", title: "Sourced", body: "Clean, quality ingredients. No shortcuts.", icon: Leaf },
  { num: "02", title: "Handcrafted", body: "Rolled, shaped, and seasoned the traditional way.", icon: Hand },
  { num: "03", title: "Slow-Cooked", body: "No rushing. No preservatives needed.", icon: Flame },
  { num: "04", title: "Packed Fresh", body: "Sealed and shipped within 48 hours.", icon: Package }
];

export default function ProcessStrip() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden grain-overlay z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 md:mb-32">
          <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] text-rust tracking-tight">
            Made by Hand. <br/>
            Not by Machine.
          </h2>
        </div>

        <div className="relative">
          {/* Dashed Path (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-rust/30 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-rust text-cream flex items-center justify-center shadow-xl z-10 relative">
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                    {/* Circle on path */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-rust/20 -z-10"></div>
                    
                    <div className="absolute -top-4 -right-4 font-display text-4xl text-gold drop-shadow-md">
                      {step.num}
                    </div>
                  </div>
                  
                  <h3 className="font-accent text-2xl font-bold uppercase tracking-wide text-night mb-3">
                    {step.title}
                  </h3>
                  <p className="text-night/70 font-medium max-w-[200px]">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
