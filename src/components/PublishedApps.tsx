import { Play, Star, AppWindow, ShieldAlert, Award, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PublishedApps = () => {
  const publishedApps = [
    {
      id: 1,
      name: "ZenHabit",
      tagline: "Mindful Habit & Wellness Companion",
      icon: "🧘‍♀️",
      description: "A premium Flutter companion application designed to foster healthy habits through high-fidelity visual reports, scheduled reminders, and offline syncing. Achieved over 10k+ active installations across platforms.",
      category: "Health & Fitness",
      rating: "4.8",
      reviews: "1.2k reviews",
      storeBadges: {
        play: "https://play.google.com",
        apple: "https://apps.apple.com"
      },
      screens: ["☀️ Mornings", "📊 Stats", "💤 Sleep"],
      color: "border-[#4FC3F7]/30 hover:border-[#4FC3F7]/60"
    },
    {
      id: 2,
      name: "SwiftBazaar",
      tagline: "High-Frequency Crypto Trading Terminal",
      icon: "⚡️",
      description: "Secure, low-latency financial exchange terminal connecting directly to major cryptocurrency broker APIs. Utilizes Riverpod state providers, secure keychain storage, and micro-second charts.",
      category: "Finance & Investing",
      rating: "4.9",
      reviews: "4.8k reviews",
      storeBadges: {
        play: "https://play.google.com",
        apple: "https://apps.apple.com"
      },
      screens: ["📈 Live Chart", "🔐 Keys", "💼 Wallet"],
      color: "border-[#00E5FF]/30 hover:border-[#00E5FF]/60"
    }
  ];

  return (
    <section id="published" className="section-padding relative overflow-hidden bg-[#050816]/95 border-b border-white/5">
      <div className="absolute top-[10%] right-[5%] w-[250px] h-[250px] bg-[#4FC3F7]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#00E5FF] uppercase tracking-widest">
            Published Live Architectures
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Stores Deployment
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            These commercial models are fully production-certified and available for direct installation from respective official marketplaces.
          </p>
        </div>

        {/* Store Detail Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {publishedApps.map(app => (
            <div 
              key={app.id}
              className={`bg-gradient-to-br from-[#0F172A] to-slate-950 border rounded-[32px] p-8 shadow-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 ${app.color}`}
            >
              <div className="space-y-6">
                
                {/* App Header (Store Format) */}
                <div className="flex items-center space-x-5">
                  <div className="w-20 h-20 bg-gradient-to-tr from-slate-900 to-slate-950 rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-white/10 shrink-0">
                    {app.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-none">{app.name}</h3>
                    <p className="text-xs text-[#00E5FF] font-semibold">{app.tagline}</p>
                    <div className="flex items-center space-x-2 pt-1 text-[11px] text-white/50">
                      <span className="font-bold text-white/80">{app.category}</span>
                      <span>•</span>
                      <div className="flex items-center text-amber-400 font-bold">
                        <Star className="w-3 h-3 fill-amber-400 mr-0.5" />
                        {app.rating}
                      </div>
                      <span>({app.reviews})</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {app.description}
                </p>

                {/* Simulated Screen Slide Preview inside Card */}
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold text-white/40 uppercase tracking-wider">APP WIREFRAME PATHS</span>
                  <div className="flex gap-2">
                    {app.screens.map((sc, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-slate-900/60 border border-white/5 py-3 px-2 rounded-xl text-center text-[10px] font-bold text-white/70"
                      >
                        {sc}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Direct Store Badges Button trigger */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                <Button 
                  className="bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-[#4FC3F7]/50 text-white font-bold py-5 rounded-xl text-xs uppercase tracking-wider transition-all"
                  asChild
                >
                  <a href={app.storeBadges.play} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-1.5">
                    <Play className="w-4 h-4 text-[#4FC3F7]" />
                    <span>Google Play</span>
                  </a>
                </Button>
                
                <Button 
                  className="bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-[#00E5FF]/50 text-white font-bold py-5 rounded-xl text-xs uppercase tracking-wider transition-all"
                  asChild
                >
                  <a href={app.storeBadges.apple} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-1.5">
                    <AppWindow className="w-4 h-4 text-[#00E5FF]" />
                    <span>App Store</span>
                  </a>
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
