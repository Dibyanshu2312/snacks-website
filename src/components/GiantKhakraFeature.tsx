import khakhraImage from '../assets/Prod_images/Khakhra.jpg';

export default function GiantKhakraFeature() {
  return (
    <section className="relative bg-saffron py-24 md:py-32 overflow-hidden grain-overlay z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative h-[500px] md:h-[700px] w-full flex justify-center items-center">
          <div className="relative w-full h-full transform rotate-2">
            {/* Torn Paper Edge Effect (CSS clip-path or SVG mask) */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl" style={{
              clipPath: "polygon(0 0, 95% 0, 100% 5%, 98% 10%, 100% 15%, 95% 20%, 100% 25%, 98% 30%, 100% 35%, 95% 40%, 100% 45%, 98% 50%, 100% 55%, 95% 60%, 100% 65%, 98% 70%, 100% 75%, 95% 80%, 100% 85%, 98% 90%, 100% 95%, 95% 100%, 0 100%)"
            }}>
              <img 
                src={khakhraImage} 
                alt="Giant Khakra" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <div>
            <span className="font-accent text-sm font-bold uppercase tracking-widest text-night/60">
              OUR HERO PRODUCT
            </span>
            <h2 className="font-display text-5xl md:text-[90px] leading-[0.9] text-night mt-4 tracking-tight">
              It's Not Just a Khakra. <br/>
              <span className="text-cream">It's a Statement.</span>
            </h2>
          </div>

          <p className="text-xl text-night/80 max-w-lg font-medium">
            Three times the size of a regular khakra. Hand-rolled in small batches with 100% clean ingredients. This is snacking without compromise.
          </p>

          <div className="space-y-4 pt-4">
            {[
              "3x Bigger than regular khakras",
              "100% Clean ingredients",
              "Handrolled in small batches"
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-night/5 border border-night/10 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-night"></div>
                <span className="font-accent font-bold uppercase tracking-wide text-night">{stat}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="bg-night text-saffron font-accent text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:bg-night/90 transition-colors">
              Shop Khakras
            </button>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.39,105.46,238.15,94.5,281.39,71.5,321.39,56.44Z" className="fill-pistachio"></path>
        </svg>
      </div>
    </section>
  );
}
