import { useState, useRef } from "react";
import portfolioData, { ShowcaseItem } from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronLeft, ChevronRight, Apple, PlayCircle } from "lucide-react";

// Smooth sliding image carousel — full cover
const ShowcaseCard = ({ item, index }: { item: ShowcaseItem; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [displayIndex, setDisplayIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use screenshots (item.images), fallback to logo (item.image)
  const screenshots =
    item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : [];

  // App icon is always item.image (the logo)
  const appIcon = item.image;

  const slideTo = (nextIdx: number, dir: "left" | "right") => {
    if (isAnimating || nextIdx === activeIndex || screenshots.length <= 1) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(dir);
    setIsAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIdx);
      setDisplayIndex(nextIdx);
      setIsAnimating(false);
    }, 350);
  };

  const handlePrev = () => slideTo((activeIndex - 1 + screenshots.length) % screenshots.length, "right");
  const handleNext = () => slideTo((activeIndex + 1) % screenshots.length, "left");
  const handleDot = (idx: number) => slideTo(idx, idx > activeIndex ? "left" : "right");

  // ── Touch / Mouse drag state ──
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const SWIPE_THRESHOLD = 40; // px

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const onDragEnd = (clientX: number) => {
    if (!isDragging.current || dragStartX.current === null) return;
    isDragging.current = false;
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta > 0) handleNext(); // swipe left → next
      else handlePrev();           // swipe right → prev
    }
    dragStartX.current = null;
  };

  return (
    <FadeIn delay={100 * index} direction="up">
      <div className="w-full group">

        {/* ── IMAGE BOX ── */}
        <div
          className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] rounded-2xl overflow-hidden bg-[#0C1117] border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.5)] select-none"
          style={{ cursor: screenshots.length > 1 ? "grab" : "default" }}
          /* Touch events */
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          onTouchCancel={() => { isDragging.current = false; dragStartX.current = null; }}
          /* Mouse drag events */
          onMouseDown={(e) => { e.preventDefault(); onDragStart(e.clientX); }}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onMouseLeave={() => { isDragging.current = false; dragStartX.current = null; }}
        >

          {/* Screenshot — smooth cross-fade + slide */}
          {screenshots.length > 0 && (
            <img
              key={activeIndex}
              src={screenshots[activeIndex]}
              alt={`${item.title} — screen ${activeIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
              style={{
                animation: `slide-${direction} 350ms cubic-bezier(0.4,0,0.2,1) both`,
              }}
            />
          )}

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-black/80 pointer-events-none z-10" />



          {/* ── NAVIGATION ARROWS ── */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous screen"
                disabled={isAnimating}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-white/80 hover:text-white hover:bg-primary hover:text-black hover:border-primary hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer disabled:opacity-40"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next screen"
                disabled={isAnimating}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-white/80 hover:text-white hover:bg-primary hover:text-black hover:border-primary hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer disabled:opacity-40"
              >
                <ChevronRight size={19} />
              </button>
            </>
          )}

          {/* ── DOT INDICATORS — centered bottom ── */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 flex items-center gap-[7px] z-30">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDot(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-5 h-[5px] bg-primary shadow-[0_0_8px_rgba(0,230,153,0.8)]"
                      : "w-[5px] h-[5px] bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Screen ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── PROJECT INFO ── */}
        <div className="mt-8">

          {/* Title + category with circular logo */}
          <div className="flex items-center gap-4 mb-4">
            {appIcon && (
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex-shrink-0 bg-black">
                <img src={appIcon} alt={`${item.title} icon`} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <p className="font-mono text-[10px] text-primary/80 tracking-[0.22em] uppercase mb-1">
                {item.category}
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-primary font-mono text-[13px] tracking-wide mb-3">
            {item.subtitle}
          </p>

          {/* Description + buttons row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-lg">
              {item.description}
            </p>

            {/* Store buttons + green circle */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              {item.appStoreUrl && (
                <a
                  href={item.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F161E] border border-white/10 text-white/85 text-xs sm:text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                >
                  <Apple size={15} />
                  App Store
                </a>
              )}
              {item.playStoreUrl && (
                <a
                  href={item.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F161E] border border-white/10 text-white/85 text-xs sm:text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                >
                  <PlayCircle size={15} className="text-primary" />
                  Google Play
                </a>
              )}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                title="Back to top"
                className="w-11 h-11 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,230,153,0.4)] hover:scale-110 hover:shadow-[0_0_28px_rgba(0,230,153,0.6)] transition-all duration-200 cursor-pointer ml-1"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 md:mt-24 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>
    </FadeIn>
  );
};

export const FeaturedShowcaseSection = () => {
  const showcaseItems: ShowcaseItem[] = (portfolioData.featuredShowcase || []).slice(0, 4);

  if (showcaseItems.length === 0) return null;

  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 relative bg-transparent">
      <div className="section-container relative z-10 w-full max-w-4xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-primary text-[11px] tracking-[0.25em] uppercase mb-4">
              featured
            </p>
            <div className="w-full h-px bg-border/50 mb-8" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Selected work
            </h2>
          </div>
        </FadeIn>

        {/* ── CARDS STACKED VERTICALLY ── */}
        <div className="flex flex-col">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={item.id || index} item={item} index={index} />
          ))}
        </div>

      </div>

      {/* Slide keyframes */}
      <style>{`
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(6%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-6%); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
