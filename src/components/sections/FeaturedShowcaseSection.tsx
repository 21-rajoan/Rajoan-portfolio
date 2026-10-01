import { useState, useRef } from "react";
import portfolioData, { ShowcaseItem } from "@/data/portfolioData";
import { ChevronLeft, ChevronRight, Apple, PlayCircle, ExternalLink } from "lucide-react";

const ShowcaseCard = ({ item }: { item: ShowcaseItem; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const screenshots =
    item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : [];

  const appIcon = item.image;

  const slideTo = (nextIdx: number, dir: "left" | "right") => {
    if (isAnimating || nextIdx === activeIndex || screenshots.length <= 1) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(dir);
    setIsAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIdx);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => slideTo((activeIndex - 1 + screenshots.length) % screenshots.length, "right");
  const handleNext = () => slideTo((activeIndex + 1) % screenshots.length, "left");
  const handleDot = (idx: number) => slideTo(idx, idx > activeIndex ? "left" : "right");

  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const SWIPE_THRESHOLD = 40;

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const onDragEnd = (clientX: number) => {
    if (!isDragging.current || dragStartX.current === null) return;
    isDragging.current = false;
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta > 0) handleNext();
      else handlePrev();
    }
    dragStartX.current = null;
  };

  return (
    <div className="w-full mb-16 sm:mb-24 last:mb-0">
      <div className="card-surface p-6 sm:p-8 lg:p-10 border border-[#233554] hover:border-[#64FFDA]/30 transition-all duration-300">
        
        {/* Screenshot Viewport */}
        <div
          className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-xl overflow-hidden bg-[#020C1B] border border-[#233554]/80 select-none shadow-2xl mb-8"
          style={{ cursor: screenshots.length > 1 ? "grab" : "default" }}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          onTouchCancel={() => { isDragging.current = false; dragStartX.current = null; }}
          onMouseDown={(e) => { e.preventDefault(); onDragStart(e.clientX); }}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onMouseLeave={() => { isDragging.current = false; dragStartX.current = null; }}
        >
          {screenshots.length > 0 && (
            <img
              key={activeIndex}
              src={screenshots[activeIndex]}
              alt={`${item.title} screen ${activeIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
              style={{
                animation: `slide-${direction} 300ms cubic-bezier(0.4,0,0.2,1) both`,
              }}
            />
          )}

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/90 via-transparent to-transparent pointer-events-none" />

          {/* Current Screen Label */}
          {item.imageLabels && item.imageLabels[activeIndex] && (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded bg-[#0A192F]/80 backdrop-blur-md border border-[#233554] text-[11px] font-mono text-[#CCD6F6]">
              {item.imageLabels[activeIndex]}
            </div>
          )}

          {/* Navigation Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous screen"
                disabled={isAnimating}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A192F]/80 border border-[#233554] text-[#CCD6F6] hover:text-[#64FFDA] hover:border-[#64FFDA] flex items-center justify-center transition-colors disabled:opacity-40 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next screen"
                disabled={isAnimating}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A192F]/80 border border-[#233554] text-[#CCD6F6] hover:text-[#64FFDA] hover:border-[#64FFDA] flex items-center justify-center transition-colors disabled:opacity-40 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDot(idx)}
                  className={`rounded-full transition-all duration-200 ${
                    idx === activeIndex
                      ? "w-6 h-1.5 bg-[#64FFDA]"
                      : "w-1.5 h-1.5 bg-[#8892B0]/40 hover:bg-[#8892B0]"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Meta and Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            {appIcon && (
              <div className="w-12 h-12 rounded-xl bg-[#0A192F] border border-[#233554] overflow-hidden flex-shrink-0">
                <img src={appIcon} alt={item.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <p className="font-mono text-xs text-[#64FFDA] tracking-wider uppercase mb-1">
                {item.category}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#CCD6F6] tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-[#8892B0] mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center gap-3">
            {item.appStoreUrl && (
              <a
                href={item.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono bg-[#0A192F] border border-[#233554] text-[#CCD6F6] hover:text-[#64FFDA] hover:border-[#64FFDA]/50 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono bg-[#0A192F] border border-[#233554] text-[#CCD6F6] hover:text-[#64FFDA] hover:border-[#64FFDA]/50 transition-colors"
              >
                <PlayCircle size={15} />
                Google Play
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[#8892B0] mt-4 leading-relaxed max-w-3xl">
          {item.description}
        </p>

      </div>
    </div>
  );
};

export const FeaturedShowcaseSection = () => {
  const showcaseItems: ShowcaseItem[] = (portfolioData.featuredShowcase || []).slice(0, 4);

  if (showcaseItems.length === 0) return null;

  return (
    <div className="mb-20">
      <div className="flex flex-col">
        {showcaseItems.map((item, index) => (
          <ShowcaseCard key={item.id || index} item={item} index={index} />
        ))}
      </div>

      <style>{`
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(4%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-4%); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
