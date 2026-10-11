import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, ShieldCheck, HeartHandshake, ThumbsUp, CheckCircle, MapPin } from 'lucide-react';

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
    quote: 'Patient-first assistance and clear guidance provided for every visit.',
    badge: 'Patient Focused',
  },
  {
    icon: ThumbsUp,
    title: 'Prompt & Convenient',
    quote: 'Fast medicine fulfillment and open daily until 10:00 PM.',
    badge: 'Extended Hours',
  },
];

export default function Testimonials() {
  useScrollReveal('.trust-card', { y: 25, stagger: 0.1 });

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#06152B] text-white relative overflow-hidden">
      {/* Background Radial Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container-main relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>5.0 / 5.0 Google Rating</span>
          </div>

          <h2 className="text-h1 text-white mb-4 tracking-tight">
            Trusted in Balasore
          </h2>
          <p className="text-slate-300 text-base max-w-lg mx-auto">
            Trusted by thousands of local families for dependable, compassionate healthcare and genuine pharmacy support.
          </p>
        </div>

        {/* 5.0 Rating Main Hero Banner */}
        <div className="trust-card p-6 md:p-8 mb-12 bg-gradient-to-r from-[#0B2240] via-[#0D2A4F] to-[#0B2240] text-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex flex-col items-center justify-center text-amber-300 shadow-[inset_0_0_15px_rgba(6,182,212,0.25)] shrink-0">
              <span className="font-display font-black text-2xl leading-none">5.0</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">Gayatri Vaishnobi Health Care</h3>
              <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                Bagbrundaban Road, near Old Stadium, Manikhamb, Balasore, Odisha 756001
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <a
              href="tel:09853608262"
              className="btn-accent text-xs px-6 py-3 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              Call 098536 08262
            </a>
          </div>
        </div>

        {/* Trust Highlight Cards Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
          {trustHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="trust-card group relative p-0.5 rounded-3xl bg-transparent transition-all duration-500 hover:-translate-y-2"
              >
                {/* Neon Blue Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

                <div className="relative h-full bg-[#0A1D36] border border-cyan-900/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 group-hover:bg-[#0C2444]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      {/* Floating Pill Container with Soft Inner Glow */}
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-[inset_0_0_12px_rgba(6,182,212,0.3)] group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all duration-300">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-wider text-cyan-300 uppercase bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-extrabold text-white mb-2.5">
                      {item.title}
                    </h4>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-cyan-900/80 flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Community Recommended</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


