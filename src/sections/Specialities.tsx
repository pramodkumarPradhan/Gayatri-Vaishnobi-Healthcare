import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Pill, FileText, ShoppingBag, HeartHandshake, Sparkles, Phone, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'pharmacy',
    title: 'Pharmacy Services',
    desc: '100% genuine prescription medicines and over-the-counter remedies.',
    icon: Pill,
    tag: 'Quality Assured',
  },
  {
    id: 'prescription',
    title: 'Prescription Support',
    desc: 'Prompt, accurate assistance with reading & fulfilling doctor prescriptions.',
    icon: FileText,
    tag: 'Expert Care',
  },
  {
    id: 'products',
    title: 'Healthcare Products',
    desc: 'Essential medical equipment, personal care, and daily wellness supplies.',
    icon: ShoppingBag,
    tag: 'Everyday Needs',
  },
  {
    id: 'patient-support',
    title: 'Patient Support',
    desc: 'Respectful and compassionate advice for dosage and healthcare queries.',
    icon: HeartHandshake,
    tag: 'Dedicated Care',
  },
  {
    id: 'wellness',
    title: 'Health & Wellness',
    desc: 'Nutritional supplements and preventive wellness solutions.',
    icon: Sparkles,
    tag: 'Vitality',
  },
];

export default function Services() {
  useScrollReveal('.service-card', { y: 25, stagger: 0.08 });

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white relative">
      <div className="container-main">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-caption block mb-2">
            Services
          </span>
          <h2 className="text-h1 text-brand-navy mb-3">
            Pharmacy & Healthcare Solutions
          </h2>
          <p className="text-slate-600 text-base">
            Authentic medicines, prescription support, and everyday wellness essentials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((serv) => {
            const Icon = serv.icon;
            return (
              <div
                key={serv.id}
                className="service-card glass-card glass-card-hover p-6 border border-sky-100 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-100 to-cyan-50 border border-sky-200/60 flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase bg-slate-100/80 px-2.5 py-0.5 rounded-full">
                      {serv.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {serv.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {serv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-100/60 flex items-center justify-between text-xs font-semibold text-brand-blue">
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inquire at Store
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <a href="tel:09853608262" className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-brand-navy transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick Call Assistance Card */}
          <div className="service-card glass-card p-6 bg-gradient-to-br from-brand-navy via-[#0A2E52] to-brand-blue text-white border border-sky-400/20 flex flex-col justify-between rounded-3xl shadow-lg">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-cyan-300 mb-5 border border-white/10">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Need Quick Assistance?</h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-5">
                Have a question about medicine availability or opening hours? Call us directly.
              </p>
            </div>
            <div>
              <a
                href="tel:09853608262"
                className="w-full btn-accent justify-center text-xs py-2.5 text-white"
              >
                Call 098536 08262
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


