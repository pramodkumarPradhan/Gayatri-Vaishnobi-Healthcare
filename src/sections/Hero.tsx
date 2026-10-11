import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, Navigation, Stethoscope, Activity, Clock, ShieldCheck } from 'lucide-react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.6 })
        .from(headlineRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
        .from(subRef.current, { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from(visualRef.current, { opacity: 0, scale: 0.95, duration: 0.8 }, '-=0.5');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative pt-7 md:pt-10 pb-8 md:pb-14 overflow-hidden bg-gradient-to-b from-sky-50/70 via-[#FAFCFF] to-white"
    >
      {/* Clean Ambient Radial Gradient Glows (No stray background image or faded text) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
          
          {/* Text Column */}
          <div className="lg:col-span-6">
            
            {/* Toned Down Palette-Matched 5.0 Rating Badge */}
            <div ref={badgeRef} className="flex flex-wrap items-center gap-2 mb-3.5">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/90 text-brand-navy rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold shadow-xs hover:bg-sky-100/70 transition-colors">
                <span className="text-amber-500 font-black text-sm">★</span>
                <span className="font-extrabold text-brand-navy">5.0</span>
                <span className="text-slate-600 font-semibold">Google Rated Healthcare in Balasore</span>
                <span className="relative flex h-2.5 w-2.5 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* Dominating Ultra-Bold Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[68px] font-black text-[#06152B] mb-4 tracking-tight leading-[1.06]"
            >
              Your Health. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(6,182,212,0.3)]">
                Our Priority.
              </span>
            </h1>

            {/* Tightened, Punchy Paragraph */}
            <p
              ref={subRef}
              className="text-slate-700 mb-6 max-w-2xl text-base sm:text-lg font-semibold leading-relaxed"
            >
              Trusted super multi-speciality clinic, diagnostic laboratory & pharmacy in Balasore. Experienced doctors, automated lab tests, and comprehensive healthcare for your entire family.
            </p>

            {/* Action CTA Buttons */}
            <div ref={ctaRef} className="hidden md:flex flex-wrap items-center gap-4">
              <a href="tel:09853608262" className="btn-primary text-base group shadow-xl shadow-brand-navy/30 px-8 py-4 font-black">
                <Phone className="w-5 h-5 mr-2 text-cyan-300 group-hover:rotate-12 transition-transform" />
                <span>098536 08262</span>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base group hover:border-brand-blue font-black px-7 py-4"
              >
                <Navigation className="w-5 h-5 mr-2 text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Compact Trust Strip */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-800">
              <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-300/80 text-brand-navy px-3.5 py-1.5 rounded-full shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="font-extrabold text-[11px] sm:text-xs text-slate-900">100% Genuine Medicines</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300/80 text-emerald-950 px-3.5 py-1.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-extrabold text-[11px] sm:text-xs text-emerald-900">Automated Diagnostic Lab</span>
              </div>
            </div>

          </div>

          {/* Real Clinic Photo Showcase Column (Aligned to Top with Zero Cropping) */}
          <div ref={visualRef} className="lg:col-span-6 relative">
            
            {/* Ambient Back Glows */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/25 via-sky-300/20 to-brand-blue/20 rounded-[44px] blur-3xl pointer-events-none" />

            {/* Glassmorphic Real Clinic Photo Frame */}
            <div className="relative p-3 sm:p-4 bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_25px_60px_rgba(14,165,233,0.18)] rounded-3xl transition-all duration-500 hover:shadow-[0_35px_80px_rgba(14,165,233,0.25)]">
              
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-sky-100/80 bg-slate-950">
                <img
                  src="/assets/clinic-real-building.jpg"
                  alt="Gayatri Vaishnobi Healthcare Multi Speciality Clinic & Diagnostic Centre in Balasore"
                  className="w-full h-auto block object-contain filter contrast-[1.08] saturate-[1.06] brightness-[1.01]"
                />
              </div>

              {/* Single Caption Strip: No duplicate location mention */}
              <div className="pt-3 pb-0.5 flex items-center justify-between text-xs text-slate-600 px-1">
                <span className="font-extrabold text-brand-navy flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Gayatri Vaishnobi Healthcare
                </span>
                <span className="text-[11px] font-bold text-brand-blue bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                  Multi Speciality Clinic
                </span>
              </div>

            </div>

            {/* Supporting Service Cards: Visible border-2, Icons, and Darker Subtext */}
            <div className="mt-3.5 grid grid-cols-3 gap-2.5">
              <div className="bg-white border-2 border-sky-300/90 rounded-2xl p-2.5 sm:p-3 text-center shadow-md hover:border-brand-blue hover:shadow-lg transition-all">
                <div className="w-8 h-8 mx-auto rounded-xl bg-sky-50 text-brand-blue border border-sky-200/80 flex items-center justify-center mb-1.5 shadow-xs">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-black text-brand-navy block leading-tight">Super Clinic</span>
                <span className="text-[10px] sm:text-[11px] text-slate-900 font-extrabold block mt-0.5 tracking-tight">Visiting Doctors</span>
              </div>

              <div className="bg-white border-2 border-sky-300/90 rounded-2xl p-2.5 sm:p-3 text-center shadow-md hover:border-brand-blue hover:shadow-lg transition-all">
                <div className="w-8 h-8 mx-auto rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center mb-1.5 shadow-xs">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-black text-brand-navy block leading-tight">Digital Lab</span>
                <span className="text-[10px] sm:text-[11px] text-slate-900 font-extrabold block mt-0.5 tracking-tight">Automated Tests</span>
              </div>

              <div className="bg-white border-2 border-sky-300/90 rounded-2xl p-2.5 sm:p-3 text-center shadow-md hover:border-brand-blue hover:shadow-lg transition-all">
                <div className="w-8 h-8 mx-auto rounded-xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center mb-1.5 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-black text-brand-navy block leading-tight">Pharmacy</span>
                <span className="text-[10px] sm:text-[11px] text-slate-900 font-extrabold block mt-0.5 tracking-tight">Open till 10 PM</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
