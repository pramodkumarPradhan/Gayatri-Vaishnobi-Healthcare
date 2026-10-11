import { MapPin, Phone, Clock, Navigation as NavIcon, Star, ChevronRight, ShieldCheck, HeartPulse } from 'lucide-react';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Doctors & OPD', href: '#doctors' },
  { label: 'Diagnostics Lab', href: '#diagnostics' },
  { label: 'Trust & Reviews', href: '#trust' },
  { label: 'Location Map', href: '#location' },
];

const servicesList = [
  'Visiting Doctor OPD',
  'Automated Pathology Lab',
  '500 mA DR Digital X-Ray',
  '3D/4D Ultrasound (USG)',
  '2D Color Doppler ECHO',
  '12-Lead ECG & TMT Test',
  'Pharmacy & Medicines',
  'Home Sample Collection',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 md:pt-20 pb-28 md:pb-12 border-t border-slate-800 relative overflow-hidden">
      
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column (LG: 4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/assets/gv_logo.png"
                  alt="Gayatri Vaishnobi Health Care Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-xl text-white leading-tight tracking-tight">
                  GAYATRI VAISHNOBI
                </span>
                <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase leading-none mt-0.5">
                  Health Care & Pharmacy
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Gayatri Vaishnobi Health Care is Balasore's premier super multi-speciality clinic, diagnostic lab & pharmacy open everyday till 10:00 PM committed to accurate reports and compassionate care.
            </p>

            <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-amber-500/30 rounded-2xl px-4 py-2.5 text-xs font-bold text-amber-300 shadow-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
              <span>5.0 / 5.0 Google Rated Healthcare Center</span>
            </div>
          </div>

          {/* Quick Navigation Links (LG: 3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-black text-xs sm:text-sm text-cyan-400 mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Quick Navigation
            </h4>
            
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 font-medium group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities & Services (LG: 2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-black text-xs sm:text-sm text-cyan-400 mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Services & Lab
            </h4>
            
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
              {servicesList.map((serv) => (
                <li key={serv} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 shrink-0" />
                  <span>{serv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Card (LG: 3 Cols) */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              
              <h4 className="font-display font-black text-xs sm:text-sm text-white uppercase tracking-widest flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-cyan-400" />
                Contact & Timings
              </h4>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-xs">
                    Bagbrundaban Road, near Old Stadium, Manikhamb, Balasore, Odisha 756001
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href="tel:09853608262"
                    className="font-extrabold text-white hover:text-cyan-300 transition-colors text-xs"
                  >
                    098536 08262
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-300">Open Daily: 8:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href="tel:09853608262"
                  className="btn-accent text-[11px] py-2.5 px-3 text-white font-extrabold text-center justify-center rounded-xl"
                >
                  Call Clinic
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-[11px] py-2.5 px-3 rounded-xl transition-colors inline-flex items-center justify-center gap-1"
                >
                  <NavIcon className="w-3 h-3 text-cyan-300" />
                  <span>Directions</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium text-center md:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <p>
              © {new Date().getFullYear()} Gayatri Vaishnobi Health Care & Pharmacy. All rights reserved.
            </p>
          </div>
          <p className="text-slate-500">
            Manikhamb, Balasore, Odisha • Super Multi-Speciality Clinic & Diagnostic Center
          </p>
        </div>

      </div>
    </footer>
  );
}
