import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  UserCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  dept: string;
  specialty: string;
  exp: string;
  rating: number;
  reviewsCount: number;
  opdDays: string;
  opdHours: string;
  image: string;
  accentColor: string;
}

const doctorsList: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sanjeev Gera',
    qualification: 'MD, DM (Cardiology)',
    dept: 'Cardiology',
    specialty: 'Senior Consultant Cardiologist',
    exp: '18+ Years Exp',
    rating: 4.9,
    reviewsCount: 340,
    opdDays: 'Mon, Wed, Fri',
    opdHours: '10:00 AM - 4:00 PM',
    image: '/assets/dr-sanjeev-gera.jpg',
    accentColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'doc-2',
    name: 'Dr. Hamida Jannat',
    qualification: 'MBBS, MD (Medicine & Cardio)',
    dept: 'Cardiology & Internal Medicine',
    specialty: 'Cardiologist & Medicine Specialist',
    exp: '14+ Years Exp',
    rating: 4.9,
    reviewsCount: 2568,
    opdDays: 'Mon to Sat',
    opdHours: '09:00 AM - 6:00 PM',
    image: '/assets/doctor-2.jpg',
    accentColor: 'from-teal-500 to-emerald-600',
  },
  {
    id: 'doc-3',
    name: 'Dr. (Lt. Col) Satish Kumar',
    qualification: 'MS (General Surgery), FIAGES',
    dept: 'General & Laparoscopic Surgery',
    specialty: 'HOD General & Laparoscopic Surgeon',
    exp: '22+ Years Exp',
    rating: 4.8,
    reviewsCount: 195,
    opdDays: 'Mon to Sat',
    opdHours: '11:00 AM - 5:00 PM',
    image: '/assets/dr-satish-kumar.jpg',
    accentColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'doc-4',
    name: 'Dr. Neha Saini',
    qualification: 'BDS, MDS (Oral & Maxillofacial)',
    dept: 'Dental & Maxillofacial',
    specialty: 'Chief Dental Surgeon',
    exp: '12+ Years Exp',
    rating: 4.9,
    reviewsCount: 412,
    opdDays: 'Mon to Sat',
    opdHours: '09:30 AM - 7:00 PM',
    image: '/assets/dr-neha-saini.jpg',
    accentColor: 'from-rose-500 to-pink-600',
  },
  {
    id: 'doc-5',
    name: 'Dr. Ramesh Kumar',
    qualification: 'MD (Anaesthesia & Critical Care)',
    dept: 'Critical Care & Internal Medicine',
    specialty: 'Critical Care Specialist',
    exp: '15+ Years Exp',
    rating: 4.9,
    reviewsCount: 280,
    opdDays: 'Daily Emergency & OPD',
    opdHours: '10:00 AM - 8:00 PM',
    image: '/assets/dr-ramesh-kumar.jpg',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'doc-6',
    name: 'Dr. Ananya Mishra',
    qualification: 'MS (Obstetrics & Gynecology)',
    dept: 'Gynecology & Women Health',
    specialty: 'Obstetrician & Gynecologist',
    exp: '11+ Years Exp',
    rating: 4.9,
    reviewsCount: 310,
    opdDays: 'Tue, Thu, Sat',
    opdHours: '10:00 AM - 2:00 PM',
    image: '/assets/doctor-3.jpg',
    accentColor: 'from-violet-500 to-purple-600',
  },
];

export default function DoctorSection() {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('doc-2');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Initialize Embla Carousel with native touch & mouse drag
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(1);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientPhone) return;
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setPatientName('');
      setPatientPhone('');
      setAppointmentDate('');
    }, 5000);
  };

  const currentDoctorObj = doctorsList.find((d) => d.id === selectedDoctorId) || doctorsList[selectedIndex];

  return (
    <section id="doctors" className="pt-10 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-teal-50/40 via-emerald-50/20 to-sky-50/50 relative overflow-hidden">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 space-y-16">
        
        {/* ============================================================== */}
        {/* PART 1: "BOOK DOCTOR'S APPOINTMENT" HERO SECTION (IMAGE 2 MATCH) */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-br from-[#E2F7F3] via-[#E8F8F5] to-[#E0F2F1] rounded-3xl sm:rounded-[36px] p-4 sm:p-10 lg:p-12 border border-teal-100/80 shadow-lg sm:shadow-xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Minimal Mobile Stats */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 bg-emerald-600 text-white rounded-full px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>OPD & CLINIC SPECIALISTS</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-[1.1]">
                Book Doctor's <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-700">
                  Appointment
                </span>
              </h2>

              <p className="text-slate-600 text-xs sm:text-base font-medium max-w-xl leading-relaxed">
                Consult experienced doctors and senior visiting specialists at Gayatri Vaishnobi Health Care Clinic, Balasore. Fast-track your OPD token online!
              </p>

              {/* Sleek Minimal 3-Column Badges on Mobile */}
              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 pt-1">
                <div className="bg-white/90 backdrop-blur-md border border-teal-200/80 rounded-xl sm:rounded-2xl p-2 sm:px-4 sm:py-2.5 flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3 shadow-xs">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold shrink-0">
                    <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-black text-slate-900 block leading-tight">15+ Doctors</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase hidden sm:block">Specialists</span>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md border border-teal-200/80 rounded-xl sm:rounded-2xl p-2 sm:px-4 sm:py-2.5 flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3 shadow-xs">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-black text-slate-900 block leading-tight">9 AM - 8 PM</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase hidden sm:block">Mon-Sat OPD</span>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md border border-teal-200/80 rounded-xl sm:rounded-2xl p-2 sm:px-4 sm:py-2.5 flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3 shadow-xs">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold shrink-0">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-black text-slate-900 block leading-tight">4.9 ★</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase hidden sm:block">2500+ Reviews</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Minimal Doctor Booking Form Card */}
            <div className="lg:col-span-5 bg-white/95 backdrop-blur-xl border border-teal-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-lg shadow-teal-900/5 relative">
              
              <div className="space-y-3 sm:space-y-4">
                <div className="border-b border-slate-100 pb-2 sm:pb-3">
                  <h3 className="text-base sm:text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    Quick Appointment Token
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                    Select your doctor and book your consultation spot.
                  </p>
                </div>

                {bookingSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in zoom-in-95">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-lg text-slate-800">Appointment Confirmed!</h4>
                    <p className="text-xs text-slate-600">
                      You booked an appointment with <strong className="text-teal-700">{currentDoctorObj.name}</strong>. Our receptionist will call <strong className="text-slate-800">{patientPhone}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit} className="space-y-3.5">
                    
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                        Select Doctor / Specialty
                      </label>
                      <select
                        value={selectedDoctorId}
                        onChange={(e) => setSelectedDoctorId(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      >
                        {doctorsList.map((doc) => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name} ({doc.dept})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Patient Full Name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                        Phone Number (Required) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg shadow-teal-600/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Consultation Now</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500 font-bold">
                      <span>Instant Helpline:</span>
                      <a href="tel:09853608262" className="text-teal-700 hover:underline flex items-center gap-1 font-black">
                        <Phone className="w-3 h-3" />
                        098536 08262
                      </a>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* ====================================================================================== */}
        {/* PART 2: NATIVE 60FPS SWIPEABLE DOCTOR CAROUSEL WITH ACTIVE CARD SCALING (IMAGE 3 MATCH) */}
        {/* ====================================================================================== */}
        <div>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-teal-700 font-black text-xs uppercase tracking-widest bg-teal-100/80 px-3 py-1 rounded-full mb-2">
                <UserCheck className="w-3.5 h-3.5" />
                <span>MEET OUR SPECIALIZED MEDICAL TEAM</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Our Expert Doctors & Specialists
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-medium mt-1">
                Swipe or drag horizontally to browse doctors. Center card enlarges smoothly.
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white hover:border-transparent transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Previous Doctor"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-teal-600 hover:text-white hover:border-transparent transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Next Doctor"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* EMBLA CAROUSEL SWIPEABLE CONTAINER */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing py-6 px-1" ref={emblaRef}>
            
            <div className="flex -ml-4 md:-ml-6 items-center">
              
              {doctorsList.map((doc, idx) => {
                const isSelected = idx === selectedIndex;
                
                return (
                  <div
                    key={doc.id}
                    className="pl-4 md:pl-6 flex-[0_0_88%] sm:flex-[0_0_52%] lg:flex-[0_0_36%] xl:flex-[0_0_31%] min-w-0"
                  >
                    <div
                      onClick={() => scrollTo(idx)}
                      className={`transition-all duration-500 ease-out rounded-3xl overflow-hidden bg-white border flex flex-col justify-between h-full cursor-pointer ${
                        isSelected
                          ? 'scale-[1.03] sm:scale-105 shadow-[0_20px_50px_rgba(13,148,136,0.22)] border-teal-400 ring-4 ring-teal-300/40 z-20 bg-gradient-to-b from-white to-teal-50/40'
                          : 'scale-95 opacity-75 border-slate-200 shadow-md hover:opacity-95 z-10'
                      }`}
                    >
                      {/* Doctor Photo Container */}
                      <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                            isSelected ? 'scale-105' : 'scale-100'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                        {/* Rating Badge (Image 3 Style) */}
                        <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-slate-800 flex items-center gap-1 shadow-md border border-white/60">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{doc.rating}</span>
                          <span className="text-[10px] text-slate-400 font-bold">({doc.reviewsCount})</span>
                        </div>

                        {/* Department Tag */}
                        <div className="absolute bottom-3 left-3.5 right-3.5">
                          <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-slate-900/80 text-teal-300 px-3 py-1 rounded-lg backdrop-blur-md border border-white/20">
                            {doc.dept}
                          </span>
                        </div>
                      </div>

                      {/* Doctor Info Body */}
                      <div className="p-5 sm:p-6 space-y-3 flex flex-col justify-between flex-grow">
                        <div>
                          <h4 className="text-xl font-black text-slate-900 leading-snug">
                            {doc.name}
                          </h4>
                          <p className="text-xs font-extrabold text-teal-700 uppercase tracking-wider mt-0.5">
                            {doc.specialty}
                          </p>
                          <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                            {doc.qualification} • {doc.exp}
                          </p>
                        </div>

                        {/* Timings */}
                        <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{doc.opdDays}: {doc.opdHours}</span>
                        </div>

                        {/* Social & Contact Actions */}
                        <div className="flex items-center justify-center gap-2 pt-0.5">
                          <a
                            href="tel:09853608262"
                            className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                            title="Call Clinic"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href="https://wa.me/919853608262"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                            title="WhatsApp Inquire"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDoctorId(doc.id);
                              window.scrollTo({ top: document.getElementById('doctors')?.offsetTop || 0, behavior: 'smooth' });
                            }}
                            className="w-8 h-8 rounded-full bg-sky-50 text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors text-xs cursor-pointer"
                            title="Book Doctor"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Book Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDoctorId(doc.id);
                            window.scrollTo({ top: document.getElementById('doctors')?.offsetTop || 0, behavior: 'smooth' });
                          }}
                          className={`w-full py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white shadow-md hover:shadow-lg'
                              : 'bg-slate-100 text-slate-700 hover:bg-teal-600 hover:text-white'
                          }`}
                        >
                          <span>Book Appointment</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Dot Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {doctorsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === selectedIndex ? 'w-8 h-2.5 bg-teal-600' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
