import { Phone, MapPin, Star, Clock } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-navy text-white h-11 flex items-center border-b border-white/10 text-xs sm:text-sm font-medium">
      <div className="container-main flex items-center justify-between">
        {/* Left Info: Rating & Hours */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 bg-sky-950/60 text-cyan-300 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-cyan-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>5.0 Google Rating</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open Everyday until 10:00 PM</span>
          </div>
        </div>

        {/* Right Info: Phone & Address */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Manikhamb, Balasore, Odisha 756001</span>
          </div>
          <a
            href="tel:09853608262"
            className="flex items-center gap-2 text-cyan-300 hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>098536 08262</span>
          </a>
        </div>
      </div>
    </div>
  );
}

