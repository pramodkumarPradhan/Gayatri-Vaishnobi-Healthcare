import { Phone, Navigation as NavIcon } from 'lucide-react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

export default function MobileFloatingBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-2xl border-t border-sky-100 shadow-[0_-8px_25px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:09853608262"
          className="btn-primary text-xs py-3 w-full justify-center inline-flex items-center gap-2 font-bold"
        >
          <Phone className="w-4 h-4 text-cyan-300 animate-pulse" />
          <span>098536 08262</span>
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-xs py-3 w-full justify-center inline-flex items-center gap-1.5 font-bold"
        >
          <NavIcon className="w-4 h-4 text-brand-blue" />
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  );
}
