import React from "react";
import { Wifi, Battery, Signal } from "lucide-react";

interface DeviceMockupProps {
  children: React.ReactNode;
  className?: string;
  themeColor?: string; // e.g. '#4FC3F7' or '#00E5FF' for the outer chassis glow
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  children,
  className = "",
  themeColor = "rgba(0, 229, 255, 0.25)"
}) => {
  return (
    <div 
      className={`relative mx-auto w-[280px] h-[580px] sm:w-[310px] sm:h-[630px] bg-slate-950 rounded-[48px] p-3 shadow-2xl border-4 border-slate-800/80 transition-all duration-500 ${className}`}
      style={{
        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.7), 0 0 30px ${themeColor}`
      }}
    >
      {/* Outer subtle metallic highlight */}
      <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[44px] pointer-events-none z-20"></div>

      {/* Side Buttons - Left Volume Buttons */}
      <div className="absolute -left-[6px] top-32 w-1 h-12 bg-slate-700 rounded-l-md border-r border-slate-800"></div>
      <div className="absolute -left-[6px] top-48 w-1 h-12 bg-slate-700 rounded-l-md border-r border-slate-800"></div>
      
      {/* Side Button - Right Power Button */}
      <div className="absolute -right-[6px] top-40 w-1 h-16 bg-slate-700 rounded-r-md border-l border-slate-800"></div>

      {/* Internal Screen Container */}
      <div className="relative w-full h-full bg-[#050816] rounded-[36px] overflow-hidden border border-slate-900 flex flex-col">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-between px-3.5">
          {/* Camera Lens */}
          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center">
            <div className="w-1 h-1 bg-indigo-950 rounded-full"></div>
          </div>
          {/* Proximity Sensor */}
          <div className="w-1.5 h-1.5 bg-slate-950 rounded-full"></div>
        </div>

        {/* Status Bar */}
        <div className="h-10 bg-black flex justify-between items-end px-6 pb-1.5 text-[10px] text-white/90 font-medium select-none z-30">
          <div>9:41</div>
          <div className="flex items-center space-x-1.5">
            <Signal className="w-3 h-3 text-white" strokeWidth={2.5} />
            <Wifi className="w-3 h-3 text-white" strokeWidth={2.5} />
            <Battery className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="flex-1 w-full overflow-y-auto relative scrollbar-none flex flex-col bg-[#050816]">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="h-6 bg-black flex items-center justify-center select-none z-30">
          <div className="w-28 h-1 bg-white/40 rounded-full mb-1"></div>
        </div>
      </div>
    </div>
  );
};
