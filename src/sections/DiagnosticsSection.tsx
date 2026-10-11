import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Activity,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  FileText,
  Send,
  SlidersHorizontal,
  ChevronRight,
  Check
} from 'lucide-react';

export interface DiagnosticItem {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  category: string;
  image: string;
  tag: string;
  desc: string;
  fullDetails: string;
  prep: string;
  turnaround: string;
  sampleType: string;
  includedTests: string[];
  badgeGradient: string;
  accentBg: string;
  numberBg: string;
  iconName: string;
}

const diagnosticsList: DiagnosticItem[] = [
  {
    id: 'usg',
    num: '01',
    title: 'High-Resolution Ultrasound (USG)',
    shortTitle: 'Ultrasound (USG)',
    category: 'Radiology & Imaging',
    image: '/assets/diag_usg.jpg',
    tag: '3D / 4D High Res USG',
    desc: 'Diagnostic ultrasound imaging for abdominal, pelvic, obstetrics, Doppler & anomaly scans.',
    fullDetails: 'State-of-the-art ultrasound diagnostic system providing high clarity soft tissue resolution. Guided by experienced radiologists for accurate organ evaluation.',
    prep: 'Fasting 4-6 hours for Abdomen USG / Full Bladder for Pelvic USG',
    turnaround: 'Same Day Report (Within 1 Hour)',
    sampleType: 'Non-Invasive Scan',
    includedTests: [
      'Whole Abdomen & Pelvis Scan',
      'Obstetrics & Fetal Doppler Scan',
      'Anomaly & Target Scan',
      'Small Parts (Thyroid, Scrotum, Breast)',
      'Arterial & Venous Color Doppler'
    ],
    badgeGradient: 'from-cyan-500 via-sky-500 to-blue-600',
    accentBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    numberBg: 'bg-cyan-500 text-white',
    iconName: 'usg',
  },
  {
    id: 'xray',
    num: '02',
    title: 'Advanced 500 mA DR Digital X-Ray',
    shortTitle: 'Digital X-Ray',
    category: 'Radiology & Imaging',
    image: '/assets/diag_xray.jpg',
    tag: '500 mA DR Digital X-Ray',
    desc: 'Low-radiation high-speed digital radiography for clear bone, chest & spine imaging.',
    fullDetails: 'Ultra-low radiation 500 mA DR radiography digital system delivering instant crisp digital films for orthopedic, chest, skull and abdominal diagnostics.',
    prep: 'No special preparation. Metallic objects or jewelry must be removed before scan.',
    turnaround: 'Instant Preview & Report in 30 Mins',
    sampleType: 'Non-Invasive Imaging',
    includedTests: [
      'Chest X-Ray PA View',
      'Spine (Cervical, Lumbar, Thoracic)',
      'Bone Fracture & Joint Studies',
      'Abdomen Erect / Supine X-Ray',
      'Sinus & Skull Radiography'
    ],
    badgeGradient: 'from-violet-500 via-purple-500 to-indigo-600',
    accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
    numberBg: 'bg-purple-600 text-white',
    iconName: 'xray',
  },
  {
    id: 'lab',
    num: '03',
    title: 'Advanced Pathology & Biochemistry Lab',
    shortTitle: 'Pathology & Lab',
    category: 'Pathology & Lab',
    image: '/assets/diag_lab.jpg',
    tag: 'Fully Automated Lab',
    desc: 'Comprehensive blood, urine & tissue laboratory tests using automated analyzers.',
    fullDetails: 'NABL quality protocol aligned fully automated blood biochemistry, hematology, and hormone analyzers ensuring supreme analytical precision.',
    prep: 'Overnight 8-12 hours fasting required for Lipid Profile, Fasting Blood Glucose, & Thyroid.',
    turnaround: 'Same Day (2 to 4 Hours)',
    sampleType: 'Blood / Serum / Urine',
    includedTests: [
      'Complete Blood Count (CBC & ESR)',
      'Lipid Profile & Cholesterol Panel',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT & Creatinine)',
      'Thyroid Profile (T3, T4, TSH)',
      'HbA1c & Blood Glucose Testing'
    ],
    badgeGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    numberBg: 'bg-emerald-600 text-white',
    iconName: 'lab',
  },
  {
    id: 'sample',
    num: '04',
    title: 'Hassle-Free Home Sample Collection',
    shortTitle: 'Sample Collection',
    category: 'Pathology & Lab',
    image: '/assets/diag_sample.jpg',
    tag: 'Doorstep Collection',
    desc: 'Trained phlebotomists collect blood & urine samples directly from your home.',
    fullDetails: 'Safe, hygienic home sample collection service with cold-chain sample transport containers to preserve sample integrity.',
    prep: 'Stay hydrated; follow fasting requirements specified for your ordered test package.',
    turnaround: 'Digital Report Sent on WhatsApp & Email',
    sampleType: 'Blood & Urine',
    includedTests: [
      'Full Body Health Checkup Packages',
      'Senior Citizen Wellness Screenings',
      'Diabetes & Cardiac Risk Monitoring',
      'Routine Blood & Urine Collection'
    ],
    badgeGradient: 'from-rose-500 via-pink-500 to-rose-600',
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200',
    numberBg: 'bg-rose-500 text-white',
    iconName: 'sample',
  },
  {
    id: 'ecg',
    num: '05',
    title: 'Digital 12-Lead ECG',
    shortTitle: '12-Lead ECG',
    category: 'Cardiac Diagnostics',
    image: '/assets/diag_ecg.jpg',
    tag: 'Computerized 12-Lead ECG',
    desc: 'Instant 12-lead electrocardiogram assessment for heart rhythm & cardiac health.',
    fullDetails: 'High-sensitivity digital 12-lead ECG recording for rapid screening of arrhythmias, ischemic changes, and heart rate irregularities.',
    prep: 'No fasting required. Wear comfortable clothing with easy chest access.',
    turnaround: 'Immediate Report (15 Minutes)',
    sampleType: 'Non-Invasive Diagnostic',
    includedTests: [
      '12-Lead Rest ECG Graph',
      'Cardiac Arrhythmia Analysis',
      'Pre-Operative Cardiac Evaluation',
      'Ischemic Heart Disease Screening'
    ],
    badgeGradient: 'from-red-500 via-rose-500 to-pink-600',
    accentBg: 'bg-red-50 text-red-700 border-red-200',
    numberBg: 'bg-red-500 text-white',
    iconName: 'ecg',
  },
  {
    id: 'echo',
    num: '06',
    title: '2D Color Doppler ECHO',
    shortTitle: '2D ECHO',
    category: 'Cardiac Diagnostics',
    image: '/assets/diag_echo.jpg',
    tag: '2D Color Doppler ECHO',
    desc: 'Echocardiography for detailed assessment of cardiac chambers, valves & pump function.',
    fullDetails: 'Advanced 2D Echocardiography with Color Doppler to evaluate heart muscle contractility, ejection fraction (EF), and valvular blood flow.',
    prep: 'No special preparation needed.',
    turnaround: 'Same Day Report with Cardiologist Summary',
    sampleType: 'Ultrasound Cardiac Scan',
    includedTests: [
      'Left Ventricular Ejection Fraction (LVEF)',
      'Valvular Stenosis & Regurgitation Evaluation',
      'Congenital Heart Defect Screening',
      'Hypertensive Heart Disease Assessment'
    ],
    badgeGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    accentBg: 'bg-blue-50 text-blue-700 border-blue-200',
    numberBg: 'bg-blue-600 text-white',
    iconName: 'echo',
  },
  {
    id: 'tmt',
    num: '07',
    title: 'Treadmill Stress Test (TMT)',
    shortTitle: 'TMT Stress Test',
    category: 'Cardiac Diagnostics',
    image: '/assets/diag_tmt.jpg',
    tag: 'Cardiac Stress TMT',
    desc: 'Computerized stress test evaluating heart performance during controlled exercise.',
    fullDetails: 'Continuous ECG and blood pressure monitoring while walking on a motor-driven treadmill according to standardized Bruce Protocol.',
    prep: 'Wear athletic shoes. Do not consume heavy meal 2 hours prior.',
    turnaround: 'Immediate Report after Test Completion',
    sampleType: 'Supervised Stress Test',
    includedTests: [
      'Coronary Artery Disease Screening',
      'Exercise Tolerance & Capacity',
      'Post-Angioplasty / CABG Follow-up',
      'Exercise-Induced Ischemia Detection'
    ],
    badgeGradient: 'from-amber-500 via-orange-500 to-amber-600',
    accentBg: 'bg-amber-50 text-amber-800 border-amber-200',
    numberBg: 'bg-amber-500 text-white',
    iconName: 'tmt',
  },
  {
    id: 'pft',
    num: '08',
    title: 'Pulmonary Function Test (PFT)',
    shortTitle: 'PFT Spirometry',
    category: 'Speciality Diagnostics',
    image: '/assets/diag_usg.jpg',
    tag: 'Spirometry Lung Test',
    desc: 'Spirometry diagnostic testing to measure lung capacity & airway resistance.',
    fullDetails: 'Computerized spirometry evaluation used to diagnose asthma, COPD, pulmonary fibrosis, and respiratory health capacity.',
    prep: 'Avoid bronchodilator inhalers 6 hours prior if advised by doctor.',
    turnaround: 'Report Provided in 30 Minutes',
    sampleType: 'Respiratory Test',
    includedTests: [
      'FVC, FEV1 & FEV1/FVC Ratio',
      'Post-Bronchodilator Reversibility',
      'COPD & Asthma Severity Assessment',
      'Occupational Health Lung Screening'
    ],
    badgeGradient: 'from-teal-500 via-emerald-500 to-cyan-600',
    accentBg: 'bg-teal-50 text-teal-800 border-teal-200',
    numberBg: 'bg-teal-600 text-white',
    iconName: 'pft',
  },
  {
    id: 'eeg',
    num: '09',
    title: 'Electroencephalogram (EEG & NCV)',
    shortTitle: 'EEG & NCV Studies',
    category: 'Neurological & Endoscopy',
    image: '/assets/diag_eeg.jpg',
    tag: 'Brain & Nerve Diagnostics',
    desc: 'Digital EEG brain wave recording and Nerve Conduction Velocity (NCV) testing.',
    fullDetails: 'Precision neuro-diagnostic testing for epilepsy screening, seizure disorders, neuropathy, and nerve compression disorders.',
    prep: 'Wash hair clean without oil or gel before coming for EEG testing.',
    turnaround: 'Same Day / Next Day Specialist Report',
    sampleType: 'Neuro-Electrical Diagnostic',
    includedTests: [
      'Digital Video EEG Brain Recording',
      'Nerve Conduction Velocity (NCV)',
      'Carpal Tunnel & Peripheral Nerve Study',
      'Seizure & Syncope Diagnostic Evaluation'
    ],
    badgeGradient: 'from-indigo-600 via-violet-600 to-purple-600',
    accentBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    numberBg: 'bg-indigo-600 text-white',
    iconName: 'eeg',
  },
  {
    id: 'endoscopy',
    num: '10',
    title: 'Video Endoscopy & Colonoscopy',
    shortTitle: 'Endoscopy & Gastro',
    category: 'Neurological & Endoscopy',
    image: '/assets/diag_endoscopy.jpg',
    tag: 'HD Gastro Diagnostics',
    desc: 'High-definition video endoscopy & colonoscopy in dedicated procedure suite.',
    fullDetails: 'Advanced gastroenterology endoscopic suite for stomach, esophagus, and colon examination under gentle sedation.',
    prep: 'Fasting overnight for Upper GI Endoscopy / Bowel preparation for Colonoscopy.',
    turnaround: 'Immediate HD Images & Detailed Report',
    sampleType: 'Endoscopic Procedure',
    includedTests: [
      'Upper GI Video Endoscopy',
      'Lower GI Colonoscopy',
      'Gastritis & Ulcer Diagnosis',
      'Biopsy Sample Extraction'
    ],
    badgeGradient: 'from-sky-500 via-cyan-500 to-blue-600',
    accentBg: 'bg-sky-50 text-sky-800 border-sky-200',
    numberBg: 'bg-sky-600 text-white',
    iconName: 'endoscopy',
  },
];

export default function DiagnosticsSection() {
  const [selectedId, setSelectedId] = useState<string>('usg');
  const [viewMode, setViewMode] = useState<'split' | 'grid'>('grid');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useScrollReveal('.diag-card', { y: 25, stagger: 0.06 });

  const activeItem = diagnosticsList.find((item) => item.id === selectedId) || diagnosticsList[0];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientPhone) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setPatientName('');
      setPatientPhone('');
      setPreferredDate('');
    }, 5000);
  };

  return (
    <section id="diagnostics" className="pt-8 pb-16 md:pt-20 md:pb-28 bg-gradient-to-b from-sky-50/50 via-white to-cyan-50/30 relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white rounded-full px-5 py-2 text-xs font-black uppercase tracking-wider mb-3 shadow-lg shadow-brand-blue/20">
            <Activity className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>OUR SERVICES & DIAGNOSTIC LAB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-navy mb-3 tracking-tight">
            Reliable & High-Quality Diagnostic Services
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Select any diagnostic service below to check test details, preparation requirements, and book instant inquiries.
          </p>
        </div>

        {/* View Switcher Toggle & Helper Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3.5 mb-8 max-w-5xl mx-auto px-4 py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-sky-100 shadow-sm">
          <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-brand-blue shrink-0" />
            <span className="whitespace-normal sm:whitespace-nowrap">Click any diagnostic service below to inspect full split details</span>
          </div>

          <div className="inline-flex bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shrink-0">
            <button
              onClick={() => setViewMode('split')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                viewMode === 'split'
                  ? 'bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Split Detail View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              <span>All Grid View</span>
            </button>
          </div>
        </div>

        {/* HORIZONTAL SERVICE TILE SELECTOR (Image 1 Style) */}
        <div className="mb-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
            {diagnosticsList.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    if (viewMode === 'grid') setViewMode('split');
                  }}
                  className={`shrink-0 flex flex-col justify-between p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer min-w-[170px] sm:min-w-[200px] h-[130px] sm:h-[140px] group ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-white border-transparent shadow-xl shadow-cyan-500/25 scale-[1.03] ring-4 ring-cyan-300/40'
                      : 'bg-white text-slate-800 border-sky-100/90 hover:border-sky-300 hover:bg-sky-50/60 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                        isSelected
                          ? 'bg-white/20 text-white backdrop-blur-md border border-white/30'
                          : 'bg-sky-50 text-brand-blue border border-sky-100'
                      }`}
                    >
                      {item.num}
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'bg-white/20 text-white' : 'text-slate-400 group-hover:text-brand-blue'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                        isSelected ? 'text-cyan-100' : 'text-slate-400'
                      }`}
                    >
                      {item.category.split('&')[0]}
                    </span>
                    <h3
                      className={`font-extrabold text-sm sm:text-base leading-snug line-clamp-1 ${
                        isSelected ? 'text-white' : 'text-slate-900 group-hover:text-brand-navy'
                      }`}
                    >
                      {item.shortTitle}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPLIT DETAIL CONTAINER (When viewMode === 'split') */}
        {viewMode === 'split' && (
          <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-sky-950/5 relative transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* LEFT COLUMN: Service Details, Image, Specs & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header & Badges */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-brand-navy text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                      {activeItem.category}
                    </span>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider ${activeItem.accentBg} px-3.5 py-1 rounded-full border`}>
                      {activeItem.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-brand-navy tracking-tight mb-2">
                    {activeItem.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {activeItem.fullDetails}
                  </p>
                </div>

                {/* Hero Feature Image Showcase */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between text-white text-xs font-bold gap-2">
                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{activeItem.turnaround}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
                      <FileText className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Sample: {activeItem.sampleType}</span>
                    </div>
                  </div>
                </div>

                {/* Patient Preparation & Turnaround Box */}
                <div className="grid sm:grid-cols-2 gap-4 bg-sky-50/70 p-4 sm:p-5 rounded-2xl border border-sky-100">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 font-bold mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-0.5">Report Turnaround</h4>
                      <p className="text-xs text-slate-700 font-semibold">{activeItem.turnaround}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 font-bold mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-0.5">Preparation Instructions</h4>
                      <p className="text-xs text-slate-700 font-semibold">{activeItem.prep}</p>
                    </div>
                  </div>
                </div>

                {/* Included Tests & Investigation List */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-navy mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Key Tests & Investigations Included
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeItem.includedTests.map((test, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-xs font-bold text-slate-800 hover:border-sky-300 hover:bg-sky-50/50 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{test}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Interactive Test Booking / Inquiry Split Form */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
                
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div>
                    <span className="text-[11px] font-black text-cyan-400 uppercase tracking-widest block mb-1">
                      QUICK TEST INQUIRY & BOOKING
                    </span>
                    <h4 className="text-2xl font-black text-white tracking-tight">
                      Book {activeItem.shortTitle}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Fast-track your lab test or diagnostic scan appointment at Gayatri Vaishnobi Health Care, Balasore.
                    </p>
                  </div>

                  {bookingSuccess ? (
                    <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3 animate-in zoom-in-95">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl shadow-lg">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <h5 className="font-extrabold text-lg text-white">Inquiry Received!</h5>
                      <p className="text-xs text-emerald-200">
                        Our diagnostic coordinator will call you back on <strong className="text-white">{patientPhone}</strong> within 15 minutes to confirm timing & fasting details.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleBookSubmit} className="space-y-4">
                      
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-300 mb-1">
                          Patient Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Chandra Sahoo"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-300 mb-1">
                          Phone Number (Required) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98536 08262"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-300 mb-1">
                          Preferred Test Date
                        </label>
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      </div>

                      <div className="pt-2 space-y-3">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Test Inquiry</span>
                        </button>

                        <div className="flex items-center gap-2 justify-center text-[11px] font-bold text-slate-400">
                          <span>Or call clinic directly:</span>
                          <a href="tel:09853608262" className="text-cyan-300 hover:underline flex items-center gap-1 font-extrabold">
                            <Phone className="w-3 h-3" />
                            098536 08262
                          </a>
                        </div>
                      </div>

                    </form>
                  )}

                  {/* Guarantee Pill */}
                  <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>NABL Aligned Automated Lab & Certified Radiologist Verified Reports.</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* FULL GRID VIEW (When viewMode === 'grid') */}
        {viewMode === 'grid' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticsList.map((item) => (
              <div
                key={item.num}
                onClick={() => {
                  setSelectedId(item.id);
                  setViewMode('split');
                }}
                className="diag-card relative bg-white border border-sky-100/90 rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-500 ease-out hover:scale-[1.025] hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)] hover:border-sky-300/80 hover:bg-gradient-to-b hover:from-white hover:via-sky-50/70 hover:to-cyan-50/50 cursor-pointer"
              >
                <div>
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                    
                    <div className={`absolute top-4 left-4 ${item.numberBg} font-display font-black text-xs px-3 py-1 rounded-xl shadow-lg border border-white/30`}>
                      {item.num}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className={`text-[11px] font-extrabold uppercase tracking-wider ${item.accentBg} px-3.5 py-1 rounded-xl shadow-sm border backdrop-blur-md`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-extrabold text-brand-navy mb-2.5 group-hover:text-brand-blue transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-sky-100/60 flex items-center justify-between text-xs font-bold">
                  <button
                    onClick={() => {
                      setSelectedId(item.id);
                      setViewMode('split');
                    }}
                    className="inline-flex items-center gap-2 bg-sky-50/90 text-brand-blue group-hover:bg-gradient-to-r group-hover:from-brand-navy group-hover:via-brand-blue group-hover:to-brand-cyan group-hover:text-white px-4 py-2 rounded-full font-extrabold transition-all duration-300 shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    <span>Check Details</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>

                  <a
                    href="tel:09853608262"
                    className={`inline-flex items-center gap-1.5 ${item.accentBg} px-3 py-1.5 rounded-xl font-bold transition-all duration-300 hover:scale-105`}
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Diagnostic CTA Banner */}
        <div className="mt-14 glass-card p-8 md:p-10 bg-gradient-to-r from-brand-navy via-[#07335F] to-brand-blue text-white rounded-3xl shadow-2xl border border-sky-300/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-brand-cyan text-slate-900 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-cyan-500/20">
              <ShieldCheck className="w-7 h-7 text-slate-950" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Accurate Diagnostic Reports in Balasore</h3>
              <p className="text-slate-200 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Automated pathology analyzers, 500mA X-Ray, USG, ECHO, TMT & home sample collection.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <a
              href="tel:09853608262"
              className="btn-accent text-sm px-6 py-3.5 text-white inline-flex items-center gap-2 font-extrabold shadow-lg shadow-brand-cyan/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call 098536 08262</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
