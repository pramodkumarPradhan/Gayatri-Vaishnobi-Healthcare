import React, { useState, useEffect } from 'react';
import { X, FileText, Phone, MessageSquare, Download, CheckCircle2, ShieldCheck } from 'lucide-react';

export const openLabReportsModal = () => {
  window.dispatchEvent(new CustomEvent('open-lab-reports-modal'));
};

export default function LabReportsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [billNumber, setBillNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener('open-lab-reports-modal', handleOpen);
    return () => window.removeEventListener('open-lab-reports-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppQuery = () => {
    const message = encodeURIComponent(
      `Hello Gayatri Vaishnobi Diagnostic Laboratory,\nI would like to receive my Lab Test Report.\n` +
      `🧾 Bill / Token No: ${billNumber || 'Not specified'}\n` +
      `📞 Registered Mobile: ${phoneNumber || 'Not specified'}\n\nPlease share my report PDF on WhatsApp.`
    );
    window.open(`https://wa.me/919853608262?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#005A9C] via-[#0284C7] to-[#0D9488] p-5 text-white relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              Digital Diagnostic Lab
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
            Access Diagnostic Lab Reports
          </h2>
          <p className="text-sky-100 text-xs mt-0.5">
            100% Automated & Accurate Results | Balasore
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {submitted ? (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Report Request Initiated
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Our laboratory team is preparing your authenticated PDF report for Bill #{billNumber || 'Latest'}.
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-slate-700 mb-2.5">
                  Receive your signed PDF instantly on WhatsApp:
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppQuery}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get PDF Report on WhatsApp</span>
                </button>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-bold underline"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-3 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  Enter your Bill/Registration number or Mobile number to download your digital lab test report.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Bill / Token Number (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. GV-2026-8492"
                    value={billNumber}
                    onChange={(e) => setBillNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registered Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="pt-1 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-[#005A9C] hover:bg-[#00487C] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Fetch Digital Report</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuery}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Or Request via WhatsApp Directly</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span>Lab Inquiries:</span>
                <a href="tel:09853608262" className="text-brand-blue font-bold hover:underline">
                  098536 08262 (Daily till 10 PM)
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
