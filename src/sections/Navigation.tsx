import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Navigation as NavIcon,
  FileText,
  Calendar,
  Clock,
  MapPin,
  ShieldAlert
} from 'lucide-react';
import { openAppointmentModal } from '@/components/BookAppointmentModal';
import { openLabReportsModal } from '@/components/LabReportsModal';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Doctors & OPD', href: '#doctors' },
  { label: 'Diagnostics & Lab', href: '#diagnostics' },
  { label: 'Genuine Pharmacy', href: '#about' },
  { label: 'Trust & Location', href: '#location' },
];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* ----------------- MOBILE TOP UTILITY STRIP ----------------- */}
      <div className="lg:hidden bg-gradient-to-r from-[#00829B] via-[#0284C7] to-[#005A9C] text-white px-3 py-1.5 border-b border-sky-400/30 shadow-xs">
        <div className="flex items-center justify-between gap-1.5">
          
          {/* Quick Action White Card Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => openAppointmentModal('doctor')}
              className="bg-white hover:bg-sky-50 text-[#005A9C] px-2.5 py-1.5 rounded-lg text-[10px] font-black shadow-xs leading-tight border border-sky-200 flex flex-col justify-center text-left active:scale-95 transition-all"
            >
              <span className="block font-black text-[#005A9C] text-[10px] leading-tight">
                Book Appointment &amp;
              </span>
              <span className="block text-[8.5px] font-extrabold text-cyan-700 leading-tight">
                Health Checkups
              </span>
            </button>

            <button
              onClick={() => openLabReportsModal()}
              className="bg-white hover:bg-sky-50 text-[#005A9C] px-2 py-1.5 rounded-lg text-[10px] font-black shadow-xs leading-tight border border-sky-200 flex flex-col justify-center text-left active:scale-95 transition-all"
            >
              <span className="block font-black text-[#005A9C] text-[10px] leading-tight">
                Access Lab
              </span>
              <span className="block text-[8.5px] font-extrabold text-cyan-700 leading-tight">
                Reports
              </span>
            </button>
          </div>

          {/* Quick Action Circle Buttons (Call, Directions, Emergency Helpline) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href="tel:09853608262"
              className="w-8 h-8 rounded-full bg-white text-[#005A9C] hover:bg-sky-50 flex items-center justify-center shadow-xs active:scale-95 transition-transform"
              title="Call Clinic: 098536 08262"
              aria-label="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 fill-[#005A9C]" />
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#005A9C] hover:bg-sky-50 flex items-center justify-center shadow-xs active:scale-95 transition-transform"
              title="Get Directions"
              aria-label="Get Directions"
            >
              <NavIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:09853608262"
              className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xs active:scale-95 transition-transform animate-pulse border border-red-500"
              title="Emergency Helpline: 098536 08262"
              aria-label="Emergency Helpline"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* ----------------- TIER 1: SLIMMER TOP ROW (White / Light Glass) ----------------- */}
      <div className={`bg-white/95 backdrop-blur-xl border-b border-sky-100 transition-all ${scrolled ? 'shadow-md py-1.5' : 'py-1.5 md:py-2'}`}>
        <div className="container-main flex items-center justify-between gap-3">
          
          {/* Brand Logo & Clinic Info */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/assets/gv_logo.png"
              alt="Gayatri Vaishnobi Health Care Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col justify-center">
              <span className="font-display font-black text-base sm:text-lg text-[#06152B] leading-tight tracking-tight">
                GAYATRI VAISHNOBI
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9.5px] sm:text-[10px] font-extrabold tracking-wider text-brand-blue uppercase leading-none">
                  Health Care &amp; Pharmacy
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300" />
                <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  ★ 5.0 Google Rated
                </span>
              </div>
            </div>
          </a>

          {/* Location Dropdown / Pill for Mobile */}
          <div className="lg:hidden flex items-center gap-1.5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-sky-50 text-brand-navy border border-sky-300 rounded-full px-2.5 py-1 text-[11px] font-extrabold shadow-2xs hover:bg-sky-100 transition-colors"
            >
              <MapPin className="w-3 h-3 text-brand-blue" />
              <span>Manikhamb ▾</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-sky-50 text-brand-navy hover:bg-sky-100 transition-colors border border-sky-200/80 shadow-2xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Right Action Buttons (Slim & Merged) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            
            {/* 1. Access Lab Reports Button */}
            <button
              onClick={() => openLabReportsModal()}
              className="bg-white hover:bg-sky-50 text-slate-800 hover:text-brand-navy border border-sky-300 rounded-xl px-3 py-1.5 text-xs font-bold shadow-2xs inline-flex items-center gap-1.5 transition-all hover:border-brand-blue cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-brand-blue" />
              <span>Access Lab Reports</span>
            </button>

            {/* 2. Clearly Red Emergency Helpline Button */}
            <a
              href="tel:09853608262"
              className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-3.5 py-1.5 text-xs font-black shadow-sm border border-red-500 inline-flex items-center gap-1.5 transition-all active:scale-98 animate-pulse"
              title="Urgent Clinical Helpline: 098536 08262"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Emergency Helpline</span>
            </a>

            {/* 3. Merged Single Appointment & Health Checkup Button */}
            <button
              onClick={() => openAppointmentModal('doctor')}
              className="bg-[#005A9C] hover:bg-[#00487C] text-white rounded-xl px-4 py-1.5 text-xs font-black shadow-xs inline-flex items-center gap-1.5 transition-all active:scale-98 cursor-pointer border border-sky-300/30"
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-300" />
              <span>Book Appointment &amp; Checkups</span>
            </button>

          </div>

        </div>
      </div>

      {/* ----------------- TIER 2: SLIM SUB-NAVIGATION STRIP (Deep Medical Navy) ----------------- */}
      <div className="hidden lg:block bg-[#061B33] text-white border-b border-sky-900/50 shadow-inner">
        <div className="container-main h-8.5 flex items-center justify-between">
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display font-medium text-xs text-slate-200 hover:text-cyan-400 transition-colors relative py-0.5 group flex items-center gap-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Sub-Bar Info: Hours, Address & Phone */}
          <div className="flex items-center gap-3.5 text-xs font-medium text-slate-300">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open Daily till 10:00 PM</span>
            </div>

            <span className="text-slate-600">|</span>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 text-slate-300 transition-colors inline-flex items-center gap-1 text-[11px]"
            >
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Near Old Stadium, Manikhamb, Balasore</span>
            </a>

            <a
              href="tel:09853608262"
              className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 rounded-md px-2 py-0.5 text-[11px] font-bold inline-flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>098536 08262</span>
            </a>
          </div>

        </div>
      </div>

      {/* ----------------- MOBILE DRAWER MENU ----------------- */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-sky-100 px-5 py-4 space-y-3.5 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          
          {/* Quick Action Buttons in Drawer */}
          <div className="grid grid-cols-2 gap-2 pb-2.5 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileOpen(false);
                openAppointmentModal('doctor');
              }}
              className="bg-[#005A9C] text-white p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                openLabReportsModal();
              }}
              className="bg-sky-50 text-[#005A9C] border border-sky-200 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
            >
              <FileText className="w-4 h-4 text-brand-blue" />
              <span>Access Lab Reports</span>
            </button>
          </div>

          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display font-medium text-sm text-slate-800 hover:text-brand-blue px-3 py-1.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-xs text-slate-600 bg-sky-50/70 p-2.5 rounded-xl">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-bold text-slate-800 text-[11px]">Open Daily till 10 PM</span>
            </div>
            <a href="tel:09853608262" className="text-brand-blue font-extrabold hover:underline text-[11px]">
              098536 08262
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-outline text-xs px-3 py-2 w-full justify-center"
            >
              Get Directions
            </a>
            <a
              href="tel:09853608262"
              onClick={() => setMobileOpen(false)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3 py-2 rounded-xl w-full text-center flex items-center justify-center gap-1.5 shadow-xs"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Emergency</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
