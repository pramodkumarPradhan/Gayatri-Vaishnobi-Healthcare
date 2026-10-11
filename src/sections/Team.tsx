import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sanjeev Gera',
    dept: 'Cardiology (Non-Invasive)',
    image: '/assets/dr-sanjeev-gera.jpg',
  },
  {
    name: 'Dr. Ramesh Kumar',
    dept: 'Critical Care & Anaesthesia',
    image: '/assets/dr-ramesh-kumar.jpg',
  },
  {
    name: 'Dr. Neha Saini',
    dept: 'Dental (HOD)',
    image: '/assets/dr-neha-saini.jpg',
  },
  {
    name: 'Dr. (Lt. Col) Satish Kumar',
    dept: 'General Surgery (HOD)',
    image: '/assets/dr-satish-kumar.jpg',
  },
];

export default function Team() {
  useScrollReveal('.team-card', { y: 40, stagger: 0.12, duration: 0.8 });

  return (
    <section id="doctors" className="bg-warm-white section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-caption text-soft-sage block mb-3">
            Our Doctors
          </span>
          <h2 className="text-h1 text-deep-teal">
            Experienced Specialists, Dedicated to You
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="team-card bg-warm-cream rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(11,90,90,0.1)] group"
            >
              <div className="overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-[280px] md:h-[320px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-body font-semibold text-[18px] text-deep-teal">
                  {doc.name}
                </h3>
                <p className="text-[14px] text-soft-sage mt-1">{doc.dept}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center mt-3 text-[13px] font-medium text-deep-teal hover:underline underline-offset-2"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-right mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-muted-teal text-warm-white font-body font-semibold text-[15px] tracking-[0.03em] rounded-full px-7 py-3.5 transition-all duration-250 hover:bg-deep-teal hover:-translate-y-0.5 group"
          >
            View All Doctors
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
