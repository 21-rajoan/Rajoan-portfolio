import { Smartphone, Briefcase, Award, Zap } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: Smartphone,
      value: "5+",
      label: "Published Apps",
      description: "Live on Play Store & Apple App Store",
      color: "text-[#00E5FF]",
      borderGlow: "hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    },
    {
      icon: Briefcase,
      value: "15+",
      label: "Completed Projects",
      description: "High-grade apps delivered successfully",
      color: "text-[#4FC3F7]",
      borderGlow: "hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    },
    {
      icon: Award,
      value: "3+",
      label: "Years of Experience",
      description: "Specialized in Flutter architecture since 2024",
      color: "text-[#00E5FF]",
      borderGlow: "hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    },
    {
      icon: Zap,
      value: "12+",
      label: "Tech Masteries",
      description: "Libraries, backends, and fullstack frameworks",
      color: "text-[#4FC3F7]",
      borderGlow: "hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    }
  ];

  return (
    <section id="stats" className="py-16 relative bg-[#050816] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:6rem] opacity-30 pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`bg-[#0F172A]/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:-translate-y-1 ${stat.borderGlow}`}
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-white/50 leading-relaxed max-w-[200px]">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
