import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Phone, Clock, Navigation as NavIcon, Star, CheckCircle, ShieldCheck, HeartHandshake, ThumbsUp } from 'lucide-react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";
const MAPS_EMBED_URL = "https://maps.google.com/maps?q=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001&t=&z=16&ie=UTF8&iwloc=&output=embed";

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: '100% Authentic Medicines',
    quote: 'Reliable for genuine prescription medicines and verified healthcare products.',
    badge: 'Verified Quality',
  },
  {
    icon: HeartHandshake,
    title: 'Polite & Helpful Staff',
    quote: 'Patient-first assistance and clear guidance provided for every clinic visit.',
    badge: 'Patient Focused',
  },
  {
    icon: ThumbsUp,
    title: 'Prompt & Convenient',
    quote: 'Fast medicine fulfillment and open daily until 10:00 PM in Balasore.',
    badge: 'Extended Hours',
  },
];

export default function LocationSection() {
  useScrollReveal('.loc-reveal', { y: 25, stagger: 0.1 });

  return (
    <section id="location" className="py-14 md:py-24 bg-gradient-to-b from-[#06152B] via-[#091D38] to-[#041122] text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 space-y-12">
        
        {/* Unified Section Header */}
        <div id="trust" className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>5.0 / 5.0 GOOGLE RATED IN BALASORE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">
            Visit & Trust Us in Balasore
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Trusted by thousands of local families for dependable diagnostics, visiting doctors & genuine pharmacy support near Old Stadium, Manikhamb.
          </p>
        </div>

        {/* Unified Interactive Grid: Left Mixed Info Card + Right Google Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* MIXED UNIFIED CARD (Combines Screenshot 1 + Screenshot 2) */}
          <div className="lg:col-span-5 flex flex-col justify-between loc-reveal">
            <div className="bg-[#0A1F3B]/90 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full space-y-6">
              
              <div>
                {/* 5.0 Rating & Hospital Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-cyan-900/60">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex flex-col items-center justify-center text-amber-300 shadow-[inset_0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                    <span className="font-display font-black text-2xl leading-none">5.0</span>
                    <div className="flex text-amber-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">
                      Gayatri Vaishnobi Health Care
                    </h3>
                    <p className="text-xs text-cyan-300 font-semibold mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      Community Recommended & Verified
                    </p>
                  </div>
                </div>

                {/* Contact & Address Details */}
                <div className="pt-6 space-y-4 text-xs sm:text-sm text-slate-300">
                  
                  {/* Full Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-0.5">Full Address</h4>
                      <p className="text-white font-medium leading-relaxed text-xs sm:text-sm">
                        Bagbrundaban Road, near Old Stadium, Manikhamb, Balasore, Odisha 756001
                      </p>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-0.5">Phone Number</h4>
                      <a
                        href="tel:09853608262"
                        className="text-cyan-300 hover:text-white font-black text-base sm:text-lg transition-colors block"
                      >
                        098536 08262
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-0.5">Opening Hours</h4>
                      <p className="text-white font-semibold flex items-center gap-2 text-xs sm:text-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Open Everyday: 8:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-cyan-900/60 grid grid-cols-2 gap-3">
                <a
                  href="tel:09853608262"
                  className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:brightness-110 text-white font-black text-xs py-3.5 px-4 rounded-xl shadow-lg shadow-cyan-500/20 text-center inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 098536 08262</span>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl text-center inline-flex items-center justify-center gap-1.5 transition-all"
                >
                  <NavIcon className="w-4 h-4 text-cyan-300" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Google Map Column */}
          <div className="lg:col-span-7 loc-reveal min-h-[360px] lg:min-h-[460px]">
            <div className="bg-[#0A1F3B]/80 border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl p-3 h-full overflow-hidden relative group flex flex-col justify-between">
              
              <iframe
                title="Gayatri Vaishnobi Health Care Location Map"
                src={MAPS_EMBED_URL}
                className="w-full h-full min-h-[340px] sm:min-h-[380px] rounded-2xl border-0 filter saturate-[1.1] contrast-[1.05]"
                loading="lazy"
                allowFullScreen
              />
              
              {/* Floating Pill on Map */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Near Old Stadium, Manikhamb, Balasore</span>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black text-cyan-300 hover:text-white hover:underline whitespace-nowrap"
                >
                  Open in Maps →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Desktop Trust Highlight Cards (Clean & Integrated) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 pt-4">
          {trustHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative bg-[#0A1D36]/80 border border-cyan-900/60 rounded-3xl p-6 flex flex-col justify-between shadow-lg hover:border-cyan-500/50 hover:bg-[#0C2444] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-cyan-300 uppercase bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-cyan-900/80 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Community Recommended</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
