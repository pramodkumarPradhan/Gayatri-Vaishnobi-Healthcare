import { Star, ShieldCheck, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Star, value: '5.0 ★', label: 'Google Rating', sublabel: 'Community Rated' },
  { icon: Clock, value: '10 PM', label: 'Open Daily Until', sublabel: 'Extended Hours' },
  { icon: ShieldCheck, value: '100%', label: 'Genuine Medicine', sublabel: 'Quality Assured' },
  { icon: MapPin, value: 'Balasore', label: 'Manikhamb, Odisha', sublabel: 'Prime Location' },
];

export default function StatsBar() {
  return (
    <section className="hidden md:block relative z-20 -mt-6 mb-12 container-main">
      <div className="glass-card bg-white/95 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-xl border border-sky-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center p-4 rounded-2xl bg-sky-50/50 border border-sky-100/60 transition-all hover:bg-sky-50 hover:shadow-sm ${
                  i < stats.length - 1 ? 'md:border-r md:border-sky-100' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-navy via-brand-blue to-brand-cyan flex items-center justify-center mb-3 shadow-md shadow-brand-blue/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy leading-none mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-slate-800 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


