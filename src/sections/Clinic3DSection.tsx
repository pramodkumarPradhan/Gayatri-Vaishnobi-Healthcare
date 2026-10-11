import { useEffect, useRef, useState, useCallback } from 'react';
import { Compass, ShieldCheck, Heart, Sparkles, Phone, Navigation, ChevronDown } from 'lucide-react';

const CLINIC_FRAMES = [
  '/Healthcare_clinic_frames/frame_001.jpg',
  '/Healthcare_clinic_frames/frame_002.jpg',
  '/Healthcare_clinic_frames/frame_003.jpg',
  '/Healthcare_clinic_frames/frame_004.jpg',
  '/Healthcare_clinic_frames/frame_005.jpg',
  '/Healthcare_clinic_frames/frame_006.jpg',
  '/Healthcare_clinic_frames/frame_007.jpg',
  '/Healthcare_clinic_frames/frame_009.jpg',
  '/Healthcare_clinic_frames/frame_010.jpg',
  '/Healthcare_clinic_frames/frame_011.jpg',
  '/Healthcare_clinic_frames/frame_012.jpg',
  '/Healthcare_clinic_frames/frame_014.jpg',
];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Gayatri+Vaishnobi+Health+Care+Bagbrundaban+Road+near+Old+Stadium+Manikhamb+Balasore+Odisha+756001";

export default function Clinic3DScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animIdRef = useRef<number | null>(null);

  // Preload Images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    CLINIC_FRAMES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === CLINIC_FRAMES.length) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === CLINIC_FRAMES.length) {
          setIsLoaded(true);
        }
      };
      loadedImages[idx] = img;
    });

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // Canvas Drawing Logic
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Object-fit: cover math
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = rect.width / rect.height;

    let renderW = rect.width;
    let renderH = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (containerRatio > imgRatio) {
      renderH = rect.width / imgRatio;
      offsetY = (rect.height - renderH) / 2;
    } else {
      renderW = rect.height * imgRatio;
      offsetX = (rect.width - renderW) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();
  }, []);

  // Smooth lerp frame loop
  useEffect(() => {
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.18; // Smooth 60fps interpolation
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const activeIdx = Math.max(
        0,
        Math.min(
          CLINIC_FRAMES.length - 1,
          Math.round(currentFrameRef.current)
        )
      );

      drawFrame(activeIdx);
      animIdRef.current = requestAnimationFrame(renderLoop);
    };

    if (isLoaded) {
      animIdRef.current = requestAnimationFrame(renderLoop);
    }

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [isLoaded, drawFrame]);

  // Window Resize
  useEffect(() => {
    const handleResize = () => {
      const idx = Math.max(0, Math.min(CLINIC_FRAMES.length - 1, Math.round(currentFrameRef.current)));
      drawFrame(idx);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Scroll Progress Calculation (Sticky Scroll Animation)
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScrollableDistance = rect.height - windowH;

      if (totalScrollableDistance <= 0) return;

      // Calculate progress between 0.0 and 1.0 based on how far we scrolled inside this section
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));

      setScrollProgress(progress);

      // Map progress to frame sequence
      const targetFrame = progress * (CLINIC_FRAMES.length - 1);
      targetFrameRef.current = targetFrame;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="clinic-3d-tour"
      ref={sectionRef}
      className="relative w-full h-[280vh] bg-slate-950 text-white"
    >
      {/* Sticky Fullscreen Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* HTML5 Canvas for Frame Sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none"
        />

        {/* Ambient Dark Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none" />

        {/* Preloader overlay if frames loading */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center mb-4 shadow-xl animate-pulse">
              <Compass className="w-8 h-8 text-white animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Preparing 3D Animated Clinic Sequence...</h3>
            <p className="text-xs text-sky-300 mb-4">Loading high-resolution frames ({loadedCount}/{CLINIC_FRAMES.length})</p>
            <div className="w-56 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                style={{ width: `${(loadedCount / CLINIC_FRAMES.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Floating Story Cards Overlaid on Scroll Sequence */}
        <div className="relative z-20 container-main h-full flex flex-col justify-between py-12 pointer-events-none">
          
          {/* Top Header & Progress Bar */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-sky-400/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Scroll-Animated 3D Clinic Experience</span>
            </div>

            {/* Scroll Progress Bar */}
            <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-3.5 py-1.5 rounded-full">
              <span className="text-xs font-mono font-bold text-cyan-300">
                {Math.round(scrollProgress * 100)}%
              </span>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-brand-blue transition-all duration-150"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Dynamic Scroll Story Highlights (Fade in/out based on scrollProgress) */}
          <div className="max-w-2xl mx-auto text-center my-auto transition-all duration-500 transform">
            
            {/* Phase 1: Intro (0% - 25%) */}
            {scrollProgress <= 0.25 && (
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Welcome to Gayatri Vaishnobi <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-white bg-clip-text text-transparent">
                    Health Care Clinic
                  </span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto">
                  Keep scrolling down to animate through our state-of-the-art medical premises, pharmacy, and patient consultation suites in Balasore.
                </p>
                <div className="pt-2 flex items-center justify-center gap-2 text-cyan-400 text-xs font-semibold animate-bounce">
                  <ChevronDown className="w-5 h-5" />
                  <span>Scroll to animate facility</span>
                </div>
              </div>
            )}

            {/* Phase 2: Pharmacy & Prescription Care (26% - 50%) */}
            {scrollProgress > 0.25 && scrollProgress <= 0.55 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Genuine Medicine Station</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Certified Pharmacy & Cold Storage
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto">
                  Temperature-monitored pharmaceutical storage ensuring absolute potency, safety, and authentic batch verification for all medications.
                </p>
              </div>
            )}

            {/* Phase 3: Diagnostics & Consultation (56% - 80%) */}
            {scrollProgress > 0.55 && scrollProgress <= 0.82 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Consultation & Triage Wing</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Patient-Centered Medical Care
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto">
                  Dedicated consultation rooms, rapid diagnostic sample collection, and compassionate doctor care under one roof.
                </p>
              </div>
            )}

            {/* Phase 4: Emergency & Location CTA (83% - 100%) */}
            {scrollProgress > 0.82 && (
              <div className="space-y-5 animate-fadeIn pointer-events-auto">
                <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/40 text-rose-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-4 h-4" />
                  <span>Open Everyday Until 10:00 PM</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Visit Us at Manikhamb, Balasore
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto">
                  Convenient location near Old Stadium, Bagbrundaban Road. Call or get instant directions now.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href="tel:09853608262"
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-extrabold text-sm shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Store: 09853608262</span>
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm shadow-xl backdrop-blur-md flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-cyan-400" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Footer Info Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span>📍 Bagbrundaban Road, Manikhamb, Balasore</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-cyan-400 font-semibold">5.0 ★ Google Rated Pharmacy</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <span>Frame Sequence Animated View</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
