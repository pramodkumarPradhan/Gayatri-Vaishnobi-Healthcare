import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Maximize2, Sparkles, ShieldCheck, Compass, MoveHorizontal } from 'lucide-react';

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

interface FrameHotspot {
  title: string;
  subtitle: string;
  badge: string;
  iconBg: string;
  stats: string;
}

const FRAME_HOTSPOTS: Record<number, FrameHotspot> = {
  0: {
    title: 'Modern Clinic Entrance',
    subtitle: 'Gayatri Vaishnobi Health Care - Main View',
    badge: 'Balasore Center',
    iconBg: 'bg-brand-blue',
    stats: '5.0 ★ Google Rating',
  },
  1: {
    title: 'Modern Clinic Entrance',
    subtitle: 'Welcoming ambiance for patient care',
    badge: 'Main Facade',
    iconBg: 'bg-brand-blue',
    stats: 'Easy Parking & Access',
  },
  2: {
    title: 'Reception & Helpdesk',
    subtitle: 'Instant patient registration & assistance',
    badge: 'Till 10 PM Desk',
    iconBg: 'bg-sky-500',
    stats: 'Zero Wait Registration',
  },
  3: {
    title: 'Pharmacy Counter',
    subtitle: '100% Genuine Prescription Medicines',
    badge: 'Verified Pharmacy',
    iconBg: 'bg-emerald-500',
    stats: 'Authentic Batch Drugs',
  },
  4: {
    title: 'Medical Supply Station',
    subtitle: 'Over-the-counter & Specialized Drugs',
    badge: 'Cold Storage Unit',
    iconBg: 'bg-cyan-500',
    stats: 'Temperature Controlled',
  },
  5: {
    title: 'Consultation Wing',
    subtitle: 'Doctor Consultation & Checkup Bays',
    badge: 'Specialist Doctors',
    iconBg: 'bg-indigo-500',
    stats: 'Multi-Speciality',
  },
  6: {
    title: 'Patient Lounge & Diagnostics',
    subtitle: 'Comfortable waiting area for families',
    badge: 'Clean & Hygienic',
    iconBg: 'bg-blue-600',
    stats: 'Sanitised Zones',
  },
  7: {
    title: 'Diagnostic Support Desk',
    subtitle: 'Lab test sample collection & reports',
    badge: 'Fast Diagnostics',
    iconBg: 'bg-cyan-600',
    stats: 'Quick Turnaround',
  },
  8: {
    title: 'Emergency Medical Bay',
    subtitle: 'Rapid triage & first-responder care',
    badge: 'Emergency Ready',
    iconBg: 'bg-rose-500',
    stats: 'Open Daily till 10 PM',
  },
  9: {
    title: 'Comprehensive Care Unit',
    subtitle: 'Advanced monitoring & vital checks',
    badge: 'Patient Priority',
    iconBg: 'bg-teal-500',
    stats: 'Experienced Staff',
  },
  10: {
    title: 'Facility Interior View',
    subtitle: 'Spacious, well-lit medical premises',
    badge: 'Modern Setup',
    iconBg: 'bg-brand-navy',
    stats: 'Fully Air Conditioned',
  },
  11: {
    title: '360° Facility Overview',
    subtitle: 'Complete healthcare hub under one roof',
    badge: 'Balasore Healthcare',
    iconBg: 'bg-brand-blue',
    stats: 'Trusted by 5,000+ Families',
  },
};

interface Clinic3DProps {
  className?: string;
  compact?: boolean;
  enableScrollScrub?: boolean;
  autoPlayDefault?: boolean;
}

export default function Clinic3DScrollExperience({
  className = '',
  compact = false,
  enableScrollScrub = true,
  autoPlayDefault = false,
}: Clinic3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlayDefault);
  const [isDragging, setIsDragging] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const startXRef = useRef(0);
  const startFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

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
        // Fallback for broken frame path if any
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

  // Canvas Drawing Function
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
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

    // Object-fit: cover calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = rect.width / rect.height;

    let renderWidth = rect.width;
    let renderHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (containerRatio > imgRatio) {
      renderHeight = rect.width / imgRatio;
      offsetY = (rect.height - renderHeight) / 2;
    } else {
      renderWidth = rect.height * imgRatio;
      offsetX = (rect.width - renderWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.restore();
  }, []);

  // Smooth lerp frame loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (now: number) => {
      // Smooth frame interpolation towards targetFrameRef
      const current = currentFrameIndex;
      const target = targetFrameRef.current;
      const total = CLINIC_FRAMES.length;

      let newIndex = current;

      if (isPlaying) {
        if (now - lastTime > 160) { // ~6fps autoplay for cinematic view
          newIndex = (current + 1) % total;
          targetFrameRef.current = newIndex;
          lastTime = now;
        }
      } else {
        const diff = target - current;
        if (Math.abs(diff) > 0.01) {
          newIndex = current + diff * 0.25;
        } else {
          newIndex = target;
        }
      }

      const clampedIndex = Math.floor((newIndex % total + total) % total);
      setCurrentFrameIndex(newIndex);
      renderFrame(clampedIndex);

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    if (isLoaded) {
      animFrameIdRef.current = requestAnimationFrame(loop);
    }

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isLoaded, isPlaying, currentFrameIndex, renderFrame]);

  // Window Resize re-render
  useEffect(() => {
    const handleResize = () => {
      const idx = Math.floor((currentFrameIndex % CLINIC_FRAMES.length + CLINIC_FRAMES.length) % CLINIC_FRAMES.length);
      renderFrame(idx);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrameIndex, renderFrame]);

  // Scroll scrubbing integration
  useEffect(() => {
    if (!enableScrollScrub || !containerRef.current) return;

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate visibility progress within viewport
      const totalScrollDistance = windowH + rect.height;
      const currentScroll = windowH - rect.top;

      if (rect.top <= windowH && rect.bottom >= 0) {
        const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
        const frameTarget = Math.floor(progress * (CLINIC_FRAMES.length - 1));
        if (!isPlaying && !isDragging) {
          targetFrameRef.current = frameTarget;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollScrub, isPlaying, isDragging]);

  // Mouse & Touch Drag Scrubbing logic
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    startXRef.current = e.clientX;
    startFrameRef.current = targetFrameRef.current;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // 3D Parallax Tilt effect
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 10, y: -y * 10 });
    }

    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    const sensitivity = 0.08; // frame index per pixel
    const total = CLINIC_FRAMES.length;
    
    let newTarget = startFrameRef.current - deltaX * sensitivity;
    newTarget = (newTarget % total + total) % total;
    targetFrameRef.current = newTarget;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const activeIndex = Math.floor((currentFrameIndex % CLINIC_FRAMES.length + CLINIC_FRAMES.length) % CLINIC_FRAMES.length);
  const activeHotspot = FRAME_HOTSPOTS[activeIndex] || FRAME_HOTSPOTS[0];
  const progressPercent = Math.round(((activeIndex + 1) / CLINIC_FRAMES.length) * 100);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-4 flex flex-col justify-center items-center'
          : className
      }`}
    >
      {/* 3D Card Container with Parallax Perspective */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden border border-sky-200/60 bg-gradient-to-b from-slate-900 via-brand-navy to-slate-900 shadow-2xl group transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Loading Spinner / Progress Screen */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center mb-4 shadow-lg animate-pulse">
              <Compass className="w-7 h-7 text-white animate-spin" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Loading 3D Clinic View...</h4>
            <p className="text-xs text-sky-200 mb-3">Preloading high-resolution 360° frames</p>
            <div className="w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue transition-all duration-300"
                style={{ width: `${(loadedCount / CLINIC_FRAMES.length) * 100}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400 mt-2">
              {loadedCount} / {CLINIC_FRAMES.length} frames
            </span>
          </div>
        )}

        {/* HTML5 Canvas for Frame Scrubbing */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        />

        {/* Canvas Ambient Shimmer Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

        {/* Dynamic Interactive Hotspot Overlay Card */}
        {isLoaded && activeHotspot && (
          <div className="absolute top-4 left-4 right-4 sm:right-auto z-20 max-w-sm pointer-events-none transition-all duration-300 animate-fadeIn">
            <div className="glass-card bg-slate-900/80 backdrop-blur-xl border border-sky-400/30 p-3.5 rounded-2xl shadow-xl text-white flex items-start gap-3">
              <div className={`w-9 h-9 rounded-xl ${activeHotspot.iconBg} flex items-center justify-center shrink-0 shadow-md text-white`}>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="bg-sky-400/20 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-sky-300/30 uppercase tracking-wider">
                    {activeHotspot.badge}
                  </span>
                  <span className="text-[10px] text-slate-300 font-semibold">{activeHotspot.stats}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white truncate">
                  {activeHotspot.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 font-normal">
                  {activeHotspot.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Drag Hint Badge Center */}
        {isLoaded && !isDragging && !isPlaying && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 opacity-70 group-hover:opacity-100 transition-opacity">
            <div className="bg-slate-900/65 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
              <MoveHorizontal className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Drag or scroll to rotate 360°</span>
            </div>
          </div>
        )}

        {/* Controls Toolbar (Bottom Overlay) */}
        {isLoaded && (
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-auto">
            
            {/* Frame Counter & Status */}
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-sky-200/20 px-3 py-1.5 rounded-xl text-white text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D Angle: {progressPercent}%</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono">
                Frame {String(activeIndex + 1).padStart(2, '0')}/{CLINIC_FRAMES.length}
              </span>
            </div>

            {/* Timeline Scrubbing Bar */}
            <div className="w-full sm:w-48 bg-slate-900/80 backdrop-blur-md border border-sky-200/20 p-2 rounded-xl flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={CLINIC_FRAMES.length - 1}
                step={0.1}
                value={targetFrameRef.current}
                onChange={(e) => {
                  setIsPlaying(false);
                  targetFrameRef.current = parseFloat(e.target.value);
                }}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-2">
              {/* Play / Pause Auto-spin */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${
                  isPlaying
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900/80 text-white hover:bg-slate-800 border border-sky-200/20'
                }`}
                title={isPlaying ? 'Pause Auto-Spin' : 'Auto 360° Spin'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
                <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Auto Spin'}</span>
              </button>

              {/* Reset Angle */}
              <button
                onClick={() => {
                  setIsPlaying(false);
                  targetFrameRef.current = 0;
                }}
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-sky-200/20 text-white rounded-xl text-xs transition-colors"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4 text-slate-300" />
              </button>

              {/* Fullscreen Toggle */}
              {!compact && (
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-sky-200/20 text-white rounded-xl text-xs transition-colors"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Expand 3D View'}
                >
                  <Maximize2 className="w-4 h-4 text-slate-300" />
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
