const tiles = [
  {
    num: "01",
    title: "No Preservatives",
    body: "Fresh every batch. What you eat is what we made.",
    bg: "bg-cream",
    text: "text-night",
    numColor: "text-night/5"
  },
  {
    num: "02",
    title: "No Palm Oil",
    body: "Better for you. Better for the planet.",
    bg: "bg-night",
    text: "text-cream",
    numColor: "text-cream/5"
  },
  {
    num: "03",
    title: "100% Clean",
    body: "Only ingredients you can pronounce.",
    bg: "bg-night",
    text: "text-cream",
    numColor: "text-cream/5"
  },
  {
    num: "04",
    title: "Giant Portions",
    body: "Because tiny snacks at celebrations are a crime.",
    bg: "bg-cream",
    text: "text-night",
    numColor: "text-night/5"
  }
];

export default function TrustGrid() {
  return (
    <section className="relative bg-pistachio py-24 md:py-32 overflow-hidden grain-overlay z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] text-cream tracking-tight mb-16 md:mb-24 text-center">
          We Take Snacking Seriously.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`relative ${tile.bg} ${tile.text} p-10 md:p-16 rounded-[2rem] shadow-xl overflow-hidden`}
            >
              <div className={`absolute -bottom-10 -right-10 font-display text-[200px] leading-none ${tile.numColor} pointer-events-none select-none`}>
                {tile.num}
              </div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="font-accent text-2xl md:text-3xl font-bold uppercase tracking-wide">
                  {tile.title}
                </h3>
                <p className="text-lg md:text-xl opacity-80 font-medium max-w-sm">
                  {tile.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.39,105.46,238.15,94.5,281.39,71.5,321.39,56.44Z" className="fill-berry"></path>
        </svg>
      </div>
    </section>
  );
}
