import { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Stethoscope, Activity, Pill, ShieldCheck } from 'lucide-react';

export type BookingTab = 'doctor' | 'package' | 'medicine';

export const openAppointmentModal = (tab: BookingTab = 'doctor', doctorName?: string) => {
  window.dispatchEvent(new CustomEvent('open-appointment-modal', { detail: { tab, doctorName } }));
};

const doctorsList = [
  { name: 'Dr. Sanjeev Gera', dept: 'Cardiology (Heart Specialist)', days: 'Mon, Wed, Fri' },
  { name: 'Dr. Hamida Jannat', dept: 'Medicine & Cardiology', days: 'Mon to Sat' },
  { name: 'Dr. Prabhat Ranjan', dept: 'Internal Medicine & Diabetes', days: 'Daily' },
  { name: 'Dr. Sunita Tripathy', dept: 'Gynecology & Obstetrics', days: 'Tue, Thu, Sat' },
  { name: 'Dr. Debabrata Das', dept: 'Pediatrics & Child Care', days: 'Mon to Sat' },
  { name: 'Dr. Rajesh Mohapatra', dept: 'Orthopedics & Joint Care', days: 'Mon, Wed, Sat' },
];

const checkupPackages = [
  { name: 'Full Body Health Checkup', tests: '64 Tests (CBC, LFT, KFT, Lipid, Sugar, Urine)', price: '₹999' },
  { name: 'Senior Citizen Cardiac & Diabetes Panel', tests: 'ECG, HbA1c, Lipid Profile, Kidney Function', price: '₹1,299' },
  { name: 'Basic Wellness Profile', tests: 'CBC, Blood Sugar, Cholesterol, Thyroid TSH', price: '₹499' },
  { name: 'Women Care & Thyroid Profile', tests: 'Complete Hemogram, T3-T4-TSH, Calcium, Vitamin D', price: '₹899' },
  { name: 'All Pathology & Lab Tests', tests: 'Blood, Urine, Sputum, Thyroid, Liver, Kidney, USG, X-Ray', price: 'Custom' },
];

export default function BookAppointmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<BookingTab>('doctor');
  const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0].name);
  const [selectedPackage, setSelectedPackage] = useState(checkupPackages[0].name);
  const [medicineList, setMedicineList] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 01:00 PM)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e.detail?.tab) {
        setActiveTab(e.detail.tab);
      }
      if (e.detail?.doctorName) {
        setSelectedDoctor(e.detail.doctorName);
        setActiveTab('doctor');
      }
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener('open-appointment-modal', handleOpen);
    return () => window.removeEventListener('open-appointment-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppAction = () => {
    let target = '';
    if (activeTab === 'doctor') target = `Doctor Consultation: ${selectedDoctor}`;
    else if (activeTab === 'package') target = `Health Check / Lab Test: ${selectedPackage}`;
    else target = `Medicine Order: ${medicineList || 'Prescription Order'}`;

    const message = encodeURIComponent(
      `Hello Gayatri Vaishnobi Health Care,\nI would like to request:\n` +
      `📌 ${target}\n` +
      `👤 Name: ${name || 'Patient'}\n` +
      `📞 Phone: ${phone || 'Not provided'}\n` +
      `${activeTab !== 'medicine' ? `📅 Date: ${date || 'Earliest available'}\n⏰ Slot: ${timeSlot}\n` : ''}` +
      `\nPlease assist me.`
    );
    window.open(`https://wa.me/919853608262?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#005A9C] via-[#0284C7] to-[#0D9488] p-4 sm:p-5 text-white relative shrink-0">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              Quick Patient Desk
            </span>
            <span className="text-[10px] font-bold bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full">
              Open Daily till 10 PM
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
            {activeTab === 'doctor' && 'Book Doctor Appointment'}
            {activeTab === 'package' && 'Health Checkup & All Tests'}
            {activeTab === 'medicine' && 'Order Genuine Medicines'}
          </h2>
          <p className="text-sky-100 text-xs mt-0.5">
            Gayatri Vaishnobi Health Care &amp; Pharmacy, Balasore
          </p>
        </div>

        {/* 3-Tab Selector */}
        <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 shrink-0 text-center">
          <button
            type="button"
            onClick={() => setActiveTab('doctor')}
            className={`py-2.5 px-2 text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 border-b-2 transition-all ${
              activeTab === 'doctor'
                ? 'border-brand-blue text-brand-navy bg-white shadow-xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            <span className="leading-tight">Doctor OPD</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('package')}
            className={`py-2.5 px-2 text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 border-b-2 transition-all ${
              activeTab === 'package'
                ? 'border-teal-600 text-teal-800 bg-white shadow-xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="leading-tight">All Tests &amp; Labs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('medicine')}
            className={`py-2.5 px-2 text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 border-b-2 transition-all ${
              activeTab === 'medicine'
                ? 'border-amber-600 text-amber-800 bg-white shadow-xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Pill className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="leading-tight">Medicines</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  Our team is ready to process your request. You can also send this directly to our desk on WhatsApp for instant confirmation.
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <p className="font-extrabold text-brand-navy">
                  {activeTab === 'doctor' && `Doctor: ${selectedDoctor}`}
                  {activeTab === 'package' && `Checkup/Test: ${selectedPackage}`}
                  {activeTab === 'medicine' && `Medicines: ${medicineList || 'Prescription Order'}`}
                </p>
                <p className="text-slate-700">Patient: <span className="font-bold">{name || 'Self'}</span></p>
                <p className="text-slate-700">Contact: <span className="font-bold">{phone || '098536 08262'}</span></p>
                {activeTab !== 'medicine' && (
                  <p className="text-slate-700">Slot: <span className="font-bold">{timeSlot}</span></p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppAction}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Clinic WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Tab 1: Doctor OPD */}
              {activeTab === 'doctor' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Doctor / Specialty *
                  </label>
                  <select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    {doctorsList.map((doc) => (
                      <option key={doc.name} value={doc.name}>
                        {doc.name} — {doc.dept} ({doc.days})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Tab 2: Health Checkup & All Tests */}
              {activeTab === 'package' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Health Package or Diagnostic Test *
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    {checkupPackages.map((pkg) => (
                      <option key={pkg.name} value={pkg.name}>
                        {pkg.name} ({pkg.price}) — {pkg.tests}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Tab 3: Medicine Order */}
              {activeTab === 'medicine' && (
                <div className="space-y-2">
                  <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-900 leading-relaxed">
                      <strong>100% Genuine Medicines</strong> with authentic batch numbers. Open daily till 10:00 PM. Type required medicines below or send a photo of your prescription on WhatsApp.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Medicine Names / Requirements *
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="e.g. Paracetamol 650mg, Telmisartan 40mg, Pantoprazole 40mg..."
                      value={medicineList}
                      onChange={(e) => setMedicineList(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Mohanty"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>
              </div>

              {activeTab !== 'medicine' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      >
                        <option>Morning (10:00 AM - 01:00 PM)</option>
                        <option>Afternoon (01:00 PM - 04:00 PM)</option>
                        <option>Evening (05:00 PM - 08:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#005A9C] via-[#0284C7] to-[#0D9488] hover:from-[#004B82] hover:to-[#0F766E] text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-sky-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {activeTab === 'doctor' && 'Confirm OPD Token Request'}
                    {activeTab === 'package' && 'Book Health Checkup & Tests'}
                    {activeTab === 'medicine' && 'Submit Medicine Order'}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <span>Direct Help:</span>
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
