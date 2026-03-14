import { Star, Instagram } from 'lucide-react';

const reviews = [
  {
    quote: "The size of these khakras is insane! And the taste takes me right back to my childhood in Gujarat. Absolutely love the Methi one.",
    name: "Priya Sharma",
    city: "Mumbai",
    product: "Methi Khakra",
    border: "border-rust",
    rotate: "-rotate-2"
  },
  {
    quote: "Ordered the Besan Laddus. He usually hates packaged sweets, but he finished half the laddus in one sitting. Pure ghee magic.",
    name: "Rahul Desai",
    city: "Ahmedabad",
    product: "Besan Laddu",
    border: "border-gold",
    rotate: "rotate-1",
    scale: "scale-105",
    zIndex: "z-20"
  },
  {
    quote: "Finally a brand that doesn't use palm oil. The crunch is perfect, the spices are balanced. This is my new 5 PM chai companion.",
    name: "Sneha Reddy",
    city: "Bangalore",
    product: "Giant Masala Khakra",
    border: "border-pistachio",
    rotate: "rotate-3"
  }
];

const instaImages = [
  "https://picsum.photos/seed/insta1/300/300",
  "https://picsum.photos/seed/insta2/300/300",
  "https://picsum.photos/seed/insta3/300/300",
  "https://picsum.photos/seed/insta4/300/300",
  "https://picsum.photos/seed/insta5/300/300",
  "https://picsum.photos/seed/insta6/300/300"
];

export default function SocialProof() {
  return (
    <section className="relative bg-night py-24 md:py-32 overflow-hidden grain-overlay z-30">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] text-gold tracking-tight max-w-4xl mx-auto">
            They Ordered Once. <br/>
            They Never Stopped.
          </h2>
        </div>

        {/* Reviews */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 mt-16">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className={`relative bg-cream p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-4 ${rev.border} ${rev.rotate} ${rev.scale || ''} ${rev.zIndex || 'z-10'} w-full max-w-sm lg:-mx-4`}
            >
              <div className="flex gap-1 text-gold mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="currentColor" />)}
              </div>
              <p className="font-medium text-night/80 text-lg leading-relaxed mb-8 italic">
                "{rev.quote}"
              </p>
              <div className="border-t border-night/10 pt-6">
                <p className="font-accent font-bold uppercase tracking-wide text-night text-sm">
                  {rev.name}
                </p>
                <p className="text-night/60 text-xs font-medium uppercase tracking-widest mb-2">
                  {rev.city}
                </p>
                <p className="font-accent text-xs font-bold text-rust uppercase tracking-wider">
                  Bought: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="w-full overflow-hidden pb-12">
        <div className="flex gap-4 w-max animate-marquee-left">
          {[...instaImages, ...instaImages, ...instaImages, ...instaImages].map((img, i) => (
            <div key={i} className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-cream/10 shrink-0 group relative">
              <img src={img} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-night/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <Instagram size={32} className="text-cream" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-transparent border-2 border-gold text-gold font-accent text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-gold hover:text-night transition-colors inline-flex items-center gap-3">
          <Instagram size={18} />
          Follow @houseofjains
        </button>
      </div>
    </section>
  );
}
