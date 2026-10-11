import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ShieldCheck, Clock, MapPin, HeartHandshake, Award, Star } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '100% Genuine Medicines',
    desc: 'Authentic pharmaceuticals sourced directly from verified manufacturers.',
  },
  {
    icon: Clock,
    title: 'Open Daily Until 10:00 PM',
    desc: 'Convenient extended opening hours so vital medicines are always accessible.',
  },
  {
    icon: MapPin,
    title: 'Prime Balasore Location',
    desc: 'Situated on Bagbrundaban Road near Old Stadium in Manikhamb.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Patient Support',
    desc: 'Caring, knowledgeable assistance for prescriptions and dosage advice.',
  },
  {
    icon: Award,
    title: 'Authentic Quality Control',
    desc: 'Strict storage, temperature control, and expiry monitoring on all products.',
  },
  {
    icon: Star,
    title: '5.0 ★ Google Rating',
    desc: 'Trusted and recommended by local residents across Balasore.',
  },
];

export default function WhyChooseUs() {
  useScrollReveal('.why-card', { y: 20, scale: 0.96, stagger: 0.08 });

  return (
    <section id="why-us" className="bg-brand-navy py-16 md:py-24 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-caption text-cyan-400 block mb-2">
            Why Us
          </span>
          <h2 className="text-h1 text-white mb-3">
            Built on Trust & Care
          </h2>
          <p className="text-slate-300 text-base">
            Genuine pharmaceuticals combined with warm, patient-first service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="why-card bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/30 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center mb-4 shadow-md shadow-brand-cyan/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


