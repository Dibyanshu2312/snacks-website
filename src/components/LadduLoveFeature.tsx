import gondLaddooImage from '../assets/Prod_images/gond-laddoo.webp';

export default function LadduLoveFeature() {
  return (
    <section className="relative bg-berry py-24 md:py-32 overflow-hidden grain-overlay z-30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] text-gold tracking-tight">
              Laddus That Make Celebrations Unforgettable.
            </h2>
          </div>

          <p className="text-xl text-cream/90 max-w-lg font-medium">
            Pure ghee, no artificial flavor, traditional recipe, made in small batches. Because a celebration without a proper laddu is just a meeting.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { name: "Besan", color: "bg-gold" },
              { name: "Motichoor", color: "bg-saffron" },
              { name: "Dry Fruit", color: "bg-night" }
            ].map((flavor, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full ${flavor.color} shadow-md border-2 border-cream/20`}></div>
                <span className="font-accent font-bold uppercase tracking-wide text-cream">{flavor.name}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="bg-gold text-night font-accent text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:bg-gold/90 transition-colors">
              Shop Laddus
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] md:h-[700px] w-full flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full h-full transform -rotate-2">
            <div className="absolute inset-0 overflow-visible rounded-[3rem] shadow-2xl bg-cream/5 backdrop-blur-sm border border-cream/10 p-4 transform translate-y-[-40px]">
              <img 
                src={gondLaddooImage} 
                alt="Celebration Laddus" 
                className="w-full h-[110%] object-cover rounded-[2.5rem] transform -translate-y-[5%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-40">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.39,105.46,238.15,94.5,281.39,71.5,321.39,56.44Z" className="fill-cream"></path>
        </svg>
      </div>
    </section>
  );
}
