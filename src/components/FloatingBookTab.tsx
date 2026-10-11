import { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  ChevronLeft,
  X,
  Activity,
  Pill,
  FileText,
  MapPin,
  Star,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { openAppointmentModal } from './BookAppointmentModal';
import { openLabReportsModal } from './LabReportsModal';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";
const REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

export default function FloatingBookTab() {
  const [isOpen, setIsOpen] = useState(false);
  const flyoutRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (flyoutRef.current && !flyoutRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelectOption = (action: () => void) => {
    setIsOpen(false);
    action();
  };

  return (
    <>
      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/30 backdrop-blur-2xs z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Permanently Anchored Floating Container pinned to screen right edge */}
      <aside
        ref={flyoutRef}
        aria-label="Quick booking navigation"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
      >
        {/* The Blue Vertical "Book" Tab - ALWAYS stays anchored at right-0, NEVER shifts */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative z-10 bg-[#005A9C] hover:bg-[#00487C] text-white shadow-[-4px_4px_16px_rgba(0,0,0,0.25)] rounded-l-2xl py-3 px-2 sm:px-2.5 flex flex-col items-center gap-1.5 transition-all duration-200 border-l-2 border-y-2 border-sky-300/50 cursor-pointer ${
            isOpen ? 'bg-[#004274] ring-2 ring-sky-300' : 'hover:-translate-x-0.5'
          }`}
          title="Quick Booking & Services Menu"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Calendar className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center gap-1 writing-vertical text-[11px] sm:text-xs font-black uppercase tracking-wider select-none text-sky-100 group-hover:text-white">
            <ChevronLeft
              className={`w-3.5 h-3.5 text-amber-300 transition-transform duration-300 ${
                isOpen ? 'rotate-[-90deg]' : 'rotate-90 animate-pulse'
              }`}
            />
            <span>Book</span>
          </div>
        </button>

        {/* Slide-out Options Panel - Positioned to the LEFT of the anchored button */}
        <div
          className={`absolute right-full top-1/2 -translate-y-1/2 mr-1 sm:mr-2 w-72 sm:w-80 max-w-[calc(100vw-52px)] bg-white rounded-2xl sm:rounded-3xl shadow-[-8px_8px_30px_rgba(0,0,0,0.25)] border-2 border-sky-200 overflow-hidden transition-all duration-300 ease-out origin-right ${
            isOpen
              ? 'opacity-100 translate-x-0 pointer-events-auto scale-100'
              : 'opacity-0 translate-x-4 pointer-events-none scale-95'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#005A9C] to-[#0284C7] p-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-extrabold text-xs tracking-tight">Quick Booking &amp; Services</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-xs"
              aria-label="Close menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Subheader */}
          <div className="bg-sky-50 px-3.5 py-1.5 border-b border-sky-100 flex items-center justify-between text-[10px] text-slate-600 font-bold">
            <span>Gayatri Vaishnobi Health Care</span>
            <span className="text-emerald-700">Open till 10 PM</span>
          </div>

          {/* Manipal-Style Service Items List */}
          <div className="p-2 space-y-1">
            
            {/* 1. Appointment */}
            <button
              onClick={() => handleSelectOption(() => openAppointmentModal('doctor'))}
              className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50/80 group transition-all flex items-center gap-3 border border-transparent hover:border-sky-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-black text-xs text-[#06152B] group-hover:text-brand-blue block leading-tight">
                  Appointment
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                  Doctor Consultation &amp; OPD Token
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>

            {/* 2. Health Check & All Tests */}
            <button
              onClick={() => handleSelectOption(() => openAppointmentModal('package'))}
              className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50/80 group transition-all flex items-center gap-3 border border-transparent hover:border-teal-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-black text-xs text-[#06152B] group-hover:text-teal-700 block leading-tight">
                  Health Check &amp; All Tests
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                  Full Body Checkups, X-Ray, USG, Labs
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>

            {/* 3. Medicines & Pharmacy */}
            <button
              onClick={() => handleSelectOption(() => openAppointmentModal('medicine'))}
              className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/80 group transition-all flex items-center gap-3 border border-transparent hover:border-amber-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Pill className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-black text-xs text-[#06152B] group-hover:text-amber-700 block leading-tight">
                  Genuine Medicines
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                  Order Medicines (Open till 10 PM)
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>

            {/* 4. Access Lab Reports */}
            <button
              onClick={() => handleSelectOption(() => openLabReportsModal())}
              className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50/80 group transition-all flex items-center gap-3 border border-transparent hover:border-sky-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#005A9C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-black text-xs text-[#06152B] group-hover:text-[#005A9C] block leading-tight">
                  Access Lab Reports
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                  Download Digital Test Results
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#005A9C] group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>

            {/* 5. Contact & Directions */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 group transition-all flex items-center gap-3 border border-transparent hover:border-slate-300 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-black text-xs text-[#06152B] group-hover:text-slate-900 block leading-tight">
                  Contact &amp; Directions
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                  Near Old Stadium, Manikhamb, Balasore
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

            {/* 6. Review Us */}
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/60 group transition-all flex items-center gap-3 border border-transparent hover:border-amber-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-black text-xs text-[#06152B] group-hover:text-amber-800 block leading-tight">
                  Review Us
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                  5.0 ★ Google Rated Healthcare
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

          </div>

          {/* Footer Call Strip */}
          <div className="p-3 bg-sky-50/80 border-t border-sky-100 flex items-center justify-between text-xs">
            <span className="text-slate-600 font-bold text-[11px]">Instant Help:</span>
            <a
              href="tel:09853608262"
              className="bg-[#005A9C] hover:bg-[#00487C] text-white font-extrabold text-[11px] px-3 py-1.5 rounded-lg shadow-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <span>098536 08262</span>
            </a>
          </div>

        </div>

        {/* Styles for vertical text orientation on tab */}
        <style>{`
          .writing-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
          }
        `}</style>
      </aside>
    </>
  );
}
