import { Leaf, Sparkles, Droplet } from 'lucide-react';

export default function FoundersTable() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden grain-overlay z-30">
      
      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-[0.03] overflow-hidden">
        <div className="font-display text-[200px] md:text-[300px] leading-none text-night transform -rotate-12 whitespace-nowrap select-none">
          HANDCRAFTED HONEST HOMEMADE
        </div>
      </div>

      {/* Scattered Icons */}
      <div className="absolute top-20 left-10 text-rust/20 rotate-45"><Leaf size={48} /></div>
      <div className="absolute bottom-40 right-20 text-gold/30 -rotate-12"><Sparkles size={64} /></div>
      <div className="absolute top-1/2 left-1/4 text-pistachio/20 rotate-90"><Droplet size={32} /></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Left (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-display italic text-4xl md:text-[48px] leading-tight text-rust mb-6">
                "We did not set out to build a brand. We just wanted the snacks to taste like they did at nani's house."
              </h2>
              <p className="font-accent text-sm font-bold uppercase tracking-widest text-night/60">
                FOUNDER, HOUSE OF JAINS
              </p>
            </div>

            <div className="space-y-6 text-night/80 font-medium text-lg leading-relaxed">
              <p>
                It started in a family kitchen. Every celebration, every festival, the house would fill with the aroma of roasting besan and hand-rolled khakras. It was a labor of love, a tradition passed down through generations.
              </p>
              <p>
                But as we grew older, we noticed something. The snacks we bought from stores didn't taste the same. They were filled with preservatives, palm oil, and artificial flavors. The soul was missing.
              </p>
              <p>
                So, we decided to bring it back. We went back to the original recipes. We sourced the cleanest ingredients. And we made them giant—because a celebration demands generosity. House of Jains isn't just a snack brand; it's a return to honest, joyful eating.
              </p>
            </div>
          </div>

          {/* Column 2: Center Timeline (2 cols) */}
          <div className="hidden lg:flex lg:col-span-2 justify-center relative h-full min-h-[600px]">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 w-1 bg-gold/30 left-1/2 -translate-x-1/2"></div>
            
            <div className="flex flex-col justify-between h-full py-12 relative z-10 w-full">
              {[
                { year: "2019", text: "First batch made in a home kitchen" },
                { year: "2020", text: "First 100 orders. All repeat customers." },
                { year: "2022", text: "Giant Khakra launched. Sold out in 48 hours." },
                { year: "2024", text: "A celebration of you." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-cream shadow-md mb-4"></div>
                  <h4 className="font-accent font-bold text-xl text-night mb-2">{item.year}</h4>
                  <p className="text-sm text-night/70 font-medium px-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Right (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative -mt-12 md:-mt-24 z-20">
              <img 
                src="https://picsum.photos/seed/founder/600/800" 
                alt="Founder" 
                className="w-full h-auto object-cover rounded-[2rem] shadow-2xl border-8 border-cream rotate-2"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-8">
              {[
                { text: "No compromise on ingredients. Ever.", bg: "bg-pistachio", textCol: "text-cream" },
                { text: "Handmade means someone's hands, not a machine's.", bg: "bg-saffron", textCol: "text-night" },
                { text: "Every celebration deserves honest food.", bg: "bg-berry", textCol: "text-cream" }
              ].map((val, i) => (
                <div
                  key={i}
                  className={`${val.bg} ${val.textCol} p-6 rounded-2xl shadow-md font-display text-2xl leading-tight`}
                >
                  {val.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
