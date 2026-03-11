import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-night pt-24 pb-12 overflow-hidden z-30 text-cream">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl text-gold">House of Jains</span>
              </div>
              <p className="font-accent text-lg font-bold uppercase tracking-widest text-cream/60">
                Celebrate Every Bite.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-accent text-sm font-bold uppercase tracking-widest text-gold mb-6">Quick Links</h4>
              <ul className="space-y-4 font-medium text-cream/80">
                <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-accent text-sm font-bold uppercase tracking-widest text-gold mb-6">Help</h4>
              <ul className="space-y-4 font-medium text-cream/80">
                <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-accent text-sm font-bold uppercase tracking-widest text-gold mb-6">Connect</h4>
              <ul className="space-y-4 font-medium text-cream/80">
                <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-cream/10 pt-12 pb-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-display text-3xl mb-2">Join the Party</h4>
              <p className="text-cream/60 font-medium">Get early access to new drops and secret flavors.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-cream/5 border border-cream/20 rounded-l-xl px-6 py-4 outline-none focus:border-gold w-full md:w-80 text-cream placeholder:text-cream/40"
              />
              <button className="bg-gold text-night font-accent text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-r-xl hover:bg-gold/90 transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-center pt-8 border-t border-cream/10">
            <p className="font-accent text-xs font-bold uppercase tracking-widest text-cream/40">
              Made with love and ghee in India
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-16 h-16 bg-pistachio text-cream rounded-full shadow-2xl flex items-center justify-center z-50 border-4 border-cream/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}
