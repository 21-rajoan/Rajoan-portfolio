import { ArrowUp, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#050816] py-12 border-t border-white/5 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand logo */}
          <div className="flex items-center space-x-2 select-none">
            <div className="w-9 h-9 bg-gradient-to-tr from-[#4FC3F7] to-[#00E5FF] rounded-xl flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-[#050816]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-white tracking-wide leading-none">RAJOAN</span>
              <span className="text-[9px] text-[#00E5FF] tracking-widest uppercase font-semibold mt-1">Flutter Specialist</span>
            </div>
          </div>

          {/* Copyright text */}
          <p className="text-xs text-white/40 font-semibold tracking-wide">
            © {new Date().getFullYear()} Rajoan Tamjid. Engineered with Pixel-Precision. All rights reserved.
          </p>

          {/* Scroll to Top button */}
          <Button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-[#00E5FF] hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg shrink-0"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>

        </div>
      </div>
    </footer>
  );
};
