import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Navigation as NavIcon, Clock, Star } from 'lucide-react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

export default function AppointmentCTA() {
  useScrollReveal('.cta-content', { y: 20 });

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white">
      <div className="container-main">
        <div className="cta-content glass-card p-8 md:p-12 text-center max-w-3xl mx-auto border border-sky-200/80 shadow-xl bg-gradient-to-br from-white via-sky-50/40 to-white rounded-3xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 bg-sky-100/80 text-brand-navy rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Gayatri Vaishnobi Health Care</span>
          </div>

          <h2 className="text-h1 text-brand-navy mb-3">
            Need Healthcare Support?
          </h2>

          <p className="text-slate-600 text-base mb-6 max-w-md mx-auto">
            Get in touch for genuine medicines, prescriptions, and healthcare support.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <a
              href="tel:09853608262"
              className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span>Call 098536 08262</span>
            </a>
            
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm px-6 py-3 inline-flex items-center gap-2"
            >
              <NavIcon className="w-4 h-4 text-brand-blue" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/80 px-3.5 py-1.5 rounded-full border border-sky-100">
            <Clock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Open Everyday until 10:00 PM • Manikhamb, Balasore</span>
          </div>

        </div>
      </div>
    </section>
  );
}


