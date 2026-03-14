import heroImage from '../assets/Prod_images/Khakhra.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gold pt-32 pb-20 overflow-hidden grain-overlay flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-[80px] md:text-[120px] leading-[0.85] text-night tracking-tight opacity-0 animate-fade-in-up">
            Snacking Got <br/>
            <span className="inline-block text-rust transform -rotate-2 mt-2">Giant.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-night/80 max-w-xl font-medium opacity-0 animate-fade-in-up delay-100">
            Giant Khakras. Royal Laddus. Made the old way — for the new celebration.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up delay-200">
            <button className="bg-rust text-cream font-accent text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-night transition-colors shadow-lg">
              Shop Snacks
            </button>
            <button className="border-2 border-cream text-night font-accent text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-cream/20 transition-colors">
              Watch How It's Made
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative h-[500px] md:h-[600px] flex justify-center items-center opacity-0 animate-fade-in-up delay-300">
          <div className="relative z-10 w-full max-w-md">
            <img 
              src={heroImage}
              alt="Snack Box" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Badges */}
          {[
            { text: "No Preservatives", top: "10%", left: "-10%" },
            { text: "No Palm Oil", top: "80%", left: "-5%" },
            { text: "Handcrafted", top: "20%", right: "-10%" },
            { text: "100% Clean", top: "70%", right: "-15%" },
          ].map((badge, i) => (
            <div
              key={i}
              className="absolute bg-cream text-night font-accent text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg border border-night/10 z-20"
              style={{ top: badge.top, left: badge.left, right: badge.right }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.39,105.46,238.15,94.5,281.39,71.5,321.39,56.44Z" className="fill-rust"></path>
        </svg>
      </div>
    </section>
  );
}
