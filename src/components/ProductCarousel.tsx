import { ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "Giant Masala Khakra",
    description: "The Crunch That Started It All. Handrolled and perfectly spiced.",
    price: "249",
    variant: "Pack of 3",
    image: "https://picsum.photos/seed/masala-khakra/600/600",
  },
  {
    id: 2,
    name: "Methi Khakra",
    description: "Herb-Loaded. Zero Guilt. Made with fresh methi leaves.",
    price: "249",
    variant: "Pack of 3",
    image: "https://picsum.photos/seed/methi-khakra/600/600",
  },
  {
    id: 3,
    name: "Celebration Laddu",
    description: "Sweet the Way Grandma Made It. Pure ghee and roasted besan.",
    price: "349",
    variant: "Box of 6",
    image: "https://picsum.photos/seed/celebration-laddu/600/600",
  },
  {
    id: 4,
    name: "Dry Fruit Laddu",
    description: "Rich, nutty, and naturally sweet. Packed with premium dry fruits.",
    price: "449",
    variant: "Box of 6",
    image: "https://picsum.photos/seed/dry-fruit-laddu/600/600",
  },
  {
    id: 5,
    name: "Jeera Khakra",
    description: "Classic roasted cumin flavor. Light, crispy, and perfect for tea time.",
    price: "249",
    variant: "Pack of 3",
    image: "https://picsum.photos/seed/jeera-khakra/600/600",
  }
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        if (current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: current.offsetWidth / 2, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-cream py-24 md:py-32" id="shop">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] text-rust tracking-tight mb-6">
              Our Bestsellers
            </h2>
            <p className="text-xl text-night/70 max-w-2xl font-medium">
              Handcrafted snacks made with 100% clean ingredients. No preservatives, no palm oil.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-night/20 flex items-center justify-center text-night hover:bg-night hover:text-cream transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-night/20 flex items-center justify-center text-night hover:bg-night hover:text-cream transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[85vw] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.5rem)] snap-start bg-white rounded-3xl p-6 shadow-sm border border-night/5 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-cream">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-grow flex flex-col">
                <h3 className="font-body font-bold text-2xl text-night mb-2">{product.name}</h3>
                <p className="text-night/70 font-medium mb-6 flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-night/10">
                  <div>
                    <span className="font-body font-bold text-2xl text-rust">₹{product.price}</span>
                    <span className="block font-accent text-xs uppercase text-night/50 font-bold tracking-wider">{product.variant}</span>
                  </div>
                  <button className="bg-night text-cream p-4 rounded-full hover:bg-rust hover:scale-110 transition-all duration-300">
                    <ShoppingBag size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
