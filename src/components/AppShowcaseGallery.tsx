import { useState } from "react";
import { Search, Eye, X, Smartphone, Layers, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const AppShowcaseGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activePreview, setActivePreview] = useState<number | null>(null);

  const categories = ["All", "Ride Sharing", "E-Commerce", "SaaS Dashboards"];

  const items = [
    {
      id: 1,
      title: "Gourmet Delivery Main Feed",
      category: "E-Commerce",
      icon: "🍔",
      color: "from-[#4FC3F7]/20 to-[#00E5FF]/20",
      accent: "#00E5FF",
      screenRenderer: () => (
        <div className="p-4 text-white bg-slate-950 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center text-[8px] text-[#00E5FF] mt-2 font-bold uppercase">Gourmet Delivery</div>
          <div className="space-y-2 my-auto">
            <div className="h-20 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center text-3xl">🍕</div>
            <div className="text-[11px] font-bold text-center">Double Pepperoni Premium</div>
            <p className="text-[7px] text-white/50 text-center">Truffle-infused marinara, organic mozzarella, double-cured pepperoni slices.</p>
          </div>
          <div className="bg-white/5 p-2 rounded-lg text-center text-[8px] font-bold text-[#00E5FF] uppercase">
            Order for $14.99
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Map Pinpoint Selector",
      category: "Ride Sharing",
      icon: "📍",
      color: "from-[#00E5FF]/20 to-[#4FC3F7]/20",
      accent: "#4FC3F7",
      screenRenderer: () => (
        <div className="p-4 text-white bg-slate-950 h-full flex flex-col justify-between">
          <span className="text-[8px] text-[#4FC3F7] mt-2 font-extrabold">MAP DISPATCH</span>
          <div className="relative flex-1 bg-slate-900/60 rounded-xl my-3 border border-white/5 flex items-center justify-center text-2xl overflow-hidden">
            🗺
            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping"></div>
          </div>
          <div className="bg-slate-900 p-2 rounded-xl text-[7px] border border-white/5">
            <div className="text-white/40">PICKUP CONFIRMED</div>
            <div className="font-bold truncate mt-0.5">Gulshan Lake Avenue 12</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Driver Earnings Dashboard",
      category: "SaaS Dashboards",
      icon: "📈",
      color: "from-[#4FC3F7]/10 to-[#0F172A]/80",
      accent: "#00E5FF",
      screenRenderer: () => (
        <div className="p-4 text-white bg-slate-950 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center text-[8px] text-white/50 mt-2">
            <span>WEEKLY PROFIT</span>
            <span className="text-[#00E5FF] font-bold">+18.4%</span>
          </div>
          <div className="my-auto space-y-2">
            <div className="text-xl font-black text-center text-white">$1,482.95</div>
            <div className="h-10 flex items-end justify-between px-4 bg-white/5 rounded-lg py-1 border border-white/5">
              <div className="w-2 h-4 bg-[#00E5FF]/40 rounded-sm"></div>
              <div className="w-2 h-6 bg-[#00E5FF]/60 rounded-sm"></div>
              <div className="w-2 h-8 bg-[#00E5FF] rounded-sm"></div>
              <div className="w-2 h-5 bg-[#00E5FF]/40 rounded-sm"></div>
            </div>
          </div>
          <span className="text-[6px] text-white/30 text-center uppercase font-bold">Updated 2m ago</span>
        </div>
      )
    },
    {
      id: 4,
      title: "Crypto Ledger Summary",
      category: "SaaS Dashboards",
      icon: "🪙",
      color: "from-[#00E5FF]/10 to-[#0F172A]/80",
      accent: "#4FC3F7",
      screenRenderer: () => (
        <div className="p-4 text-white bg-slate-950 h-full flex flex-col justify-between">
          <span className="text-[8px] text-[#4FC3F7] mt-2 font-bold uppercase">Crypto Balance</span>
          <div className="my-auto space-y-2 text-center">
            <span className="text-[20px] font-black tracking-tight text-white block">2.418 BTC</span>
            <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">+$4,295.10 today</span>
          </div>
          <div className="flex justify-between text-[7px] bg-white/5 p-1.5 rounded-lg border border-white/5">
            <span>Bitcoin (BTC)</span>
            <span className="font-extrabold text-[#4FC3F7]">$67,495.20</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Seller Inventory Manager",
      category: "E-Commerce",
      icon: "📦",
      color: "from-[#4FC3F7]/20 to-[#00E5FF]/20",
      accent: "#00E5FF",
      screenRenderer: () => (
        <div className="p-4 text-white bg-slate-950 h-full flex flex-col justify-between">
          <span className="text-[8px] text-[#00E5FF] mt-2 font-bold uppercase">Store Inventory</span>
          <div className="space-y-1.5 my-auto">
            <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-lg border border-white/5 text-[7px]">
              <span>Premium Headphones</span>
              <span className="text-emerald-400 font-extrabold">24 IN STOCK</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-lg border border-white/5 text-[7px]">
              <span>Sport Smartwatch</span>
              <span className="text-amber-400 font-extrabold">3 LEFT</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-lg border border-white/5 text-[7px]">
              <span>Mechanical Keyboard</span>
              <span className="text-rose-400 font-extrabold">OUT OF STOCK</span>
            </div>
          </div>
          <div className="w-full bg-[#00E5FF] text-[#050816] font-bold text-center text-[8px] py-1.5 rounded-lg uppercase">
            Manage Catalog
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Live Dispatch Controller",
      category: "Ride Sharing",
      icon: "🛰",
      color: "from-[#00E5FF]/20 to-[#4FC3F7]/20",
      accent: "#4FC3F7",
      screenRenderer: () => (
        <div className="p-4 text-white bg-slate-950 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center text-[8px] text-[#4FC3F7] mt-2 font-bold">
            <span>RIDE ROUTE</span>
            <span>4.8 KM</span>
          </div>
          <div className="relative flex-1 rounded-xl bg-slate-900 border border-white/5 my-3 flex items-center justify-center text-xs overflow-hidden">
            🛰
            <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100">
              <path d="M 10,10 Q 50,90 90,40" fill="none" stroke="#4FC3F7" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="flex justify-between items-center text-[8px] bg-[#4FC3F7]/10 p-2 rounded-lg border border-[#4FC3F7]/20">
            <span>Active Dispatch</span>
            <span className="font-extrabold text-white">8.4 min remaining</span>
          </div>
        </div>
      )
    }
  ];

  const filteredItems = selectedFilter === "All" 
    ? items 
    : items.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-[#050816] border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#4FC3F7] uppercase tracking-widest">
            Interactive Screen Architectures
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in">
            App Showcase Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#4FC3F7] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Click on any dynamic application screen to open its structural micro-module representation and examine design fidelity.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                selectedFilter === category
                  ? "bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#050816] border-[#00E5FF] font-bold shadow-[0_0_15px_rgba(0,229,255,0.35)]"
                  : "bg-slate-900/40 text-white/60 border-white/5 hover:border-[#4FC3F7]/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              onClick={() => setActivePreview(item.id)}
              className="group cursor-pointer relative bg-gradient-to-b from-[#0F172A] to-slate-950 border border-white/5 rounded-3xl p-5 overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Outer Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-[#4FC3F7] to-[#00E5FF]"></div>

              {/* Showcase Screen Frame */}
              <div className="relative mx-auto w-[180px] h-[360px] bg-slate-900 rounded-[32px] p-2 border-2 border-slate-800 shadow-inner overflow-hidden flex flex-col">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20"></div>
                <div className="flex-1 w-full bg-[#050816] rounded-[24px] overflow-hidden relative select-none">
                  {item.screenRenderer()}
                  {/* Subtle glass hover overlay */}
                  <div className="absolute inset-0 bg-[#050816]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#00E5FF] flex items-center justify-center text-[#050816] shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5 font-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-5 text-center space-y-1.5">
                <span className="text-[10px] font-bold text-[#4FC3F7] uppercase tracking-widest">{item.category}</span>
                <h3 className="text-sm font-extrabold text-white group-hover:text-[#00E5FF] transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Lightbox Dialog/Modal for Mobile Screen */}
        {activePreview !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-sm w-full bg-[#0F172A] border border-white/10 rounded-[44px] p-6 text-center space-y-6 shadow-2xl">
              
              <button 
                onClick={() => setActivePreview(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/5 text-white/80 hover:text-white flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1.5">
                <span className="text-[10px] font-black text-[#00E5FF] uppercase tracking-widest">
                  {items.find(i => i.id === activePreview)?.category} Screen Blueprint
                </span>
                <h3 className="text-lg font-black text-white leading-tight">
                  {items.find(i => i.id === activePreview)?.title}
                </h3>
              </div>

              {/* Centered Large Device Mockup representation */}
              <div className="mx-auto w-[200px] h-[400px] bg-slate-900 rounded-[36px] p-2.5 border-2 border-slate-700 shadow-2xl relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-18 h-4 bg-black rounded-full z-20"></div>
                <div className="w-full h-full bg-[#050816] rounded-[28px] overflow-hidden relative">
                  {items.find(i => i.id === activePreview)?.screenRenderer()}
                </div>
              </div>

              <div className="text-xs text-white/60 leading-relaxed px-4">
                Designed fully in Flutter with clean declarative layouts. Ensures swift rendering performance with ~60 FPS frame rate synchronization.
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
