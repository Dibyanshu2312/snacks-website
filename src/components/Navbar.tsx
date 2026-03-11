import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-night/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-gold">House of Jains</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Shop', 'Our Story', 'Reviews', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`font-accent text-sm uppercase tracking-wide transition-colors ${
                scrolled ? 'text-cream hover:text-gold' : 'text-night hover:text-rust'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-rust text-cream font-accent text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-rust/90 transition-colors shadow-md">
          Order Now
        </button>
      </div>
    </nav>
  );
}
