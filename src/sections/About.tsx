import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Activity } from 'lucide-react';
import ThreeMedicalHero from '@/components/ThreeMedicalHero';

export default function About() {
  useScrollReveal('.about-reveal', { y: 25, stagger: 0.1 });
  useScrollReveal('.about-card-reveal', { scale: 0.96, duration: 0.8 });

  return (
    <section id="about" className="py-12 md:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: About Us Story & Healthcare Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="about-reveal inline-flex items-center gap-2 bg-sky-100 text-brand-navy rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>ABOUT GAYATRI VAISHNOBI HEALTHCARE</span>
            </div>

            <h2 className="about-reveal text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.1]">
              Compassionate Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700">
                Advanced Medicine.
              </span>
            </h2>

            <p className="about-reveal text-slate-700 text-xs sm:text-base leading-relaxed font-medium">
              Located on Bagbrundaban Road near Old Stadium, Manikhamb, Balasore, Gayatri Vaishnobi Health Care provides expert doctor consultations, automated lab testing, and genuine medicines open everyday till 10:00 PM under one roof.
            </p>

            {/* Feature Highlights Grid: Compact 2-Item on Mobile, Full on Desktop */}
            <div className="about-reveal grid grid-cols-2 gap-2 sm:gap-3 pt-1">
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-sky-100 shadow-xs flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-cyan-50 text-brand-blue flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-slate-800">Genuine Medicines</span>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-sky-100 shadow-xs flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-slate-800">Open Till 10 PM</span>
              </div>

              <div className="hidden sm:flex p-3.5 rounded-2xl bg-white border border-sky-100 shadow-sm items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">Automated Pathology & Lab</span>
              </div>

              <div className="hidden sm:flex p-3.5 rounded-2xl bg-white border border-sky-100 shadow-sm items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">Visiting Specialist Doctors</span>
              </div>
            </div>

            {/* Compact CTAs for Mobile */}
            <div className="about-reveal grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3.5 pt-2">
              <a
                href="#doctors"
                className="btn-primary text-xs sm:text-sm py-2.5 sm:py-3.5 px-3 sm:px-6 inline-flex items-center justify-center gap-1.5 font-bold"
              >
                <span>Doctors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#diagnostics"
                className="btn-outline text-xs sm:text-sm py-2.5 sm:py-3.5 px-3 sm:px-6 inline-flex items-center justify-center gap-1.5 font-bold"
              >
                <span>Diagnostics</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Medical Capsule Pill Showcase */}
          <div className="lg:col-span-5 about-card-reveal relative">
            
            {/* Ambient Lighting Behind 3D Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/25 via-sky-300/20 to-blue-500/25 rounded-[38px] blur-2xl pointer-events-none" />

            <div className="relative p-4 sm:p-5 bg-white/70 backdrop-blur-2xl border border-sky-100/90 shadow-[0_20px_60px_rgba(14,165,233,0.18)] rounded-3xl transition-all duration-500 hover:shadow-[0_30px_70px_rgba(14,165,233,0.25)] group">
              
              {/* Floating Quality Tag */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md border border-sky-100 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-black text-brand-navy uppercase tracking-wider">
                  Quality Healthcare
                </span>
              </div>

              {/* 3D Medical Capsule Pill Component */}
              <div className="relative h-[300px] sm:h-[350px] w-full flex items-center justify-center">
                <ThreeMedicalHero />
              </div>

              {/* Bottom Label Bar */}
              <div className="pt-3 border-t border-sky-100/80 flex items-center justify-between text-[11px] font-bold text-slate-600 px-1">
                <span className="flex items-center gap-1.5 text-brand-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Pharmacy & Diagnostics
                </span>
                <span className="text-slate-400">Interactive 3D Preview</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
