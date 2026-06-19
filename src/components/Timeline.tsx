import { Calendar, Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "2026",
      title: "Independent Flutter Specialist",
      subtitle: "High-End App Consulting",
      type: "experience",
      icon: Briefcase,
      color: "text-[#4FC3F7] bg-[#4FC3F7]/10",
      description: "Consulting with startups and mid-market organizations globally to construct robust mobile products with Clean Architecture and state-of-the-art Flutter implementations.",
      location: "Remote / Dhaka"
    },
    {
      id: 2,
      year: "2025",
      title: "ZenHabit & SwiftBazaar Launch",
      subtitle: "Stores Deployment & Global Reach",
      type: "achievement",
      icon: Award,
      color: "text-[#00E5FF] bg-[#00E5FF]/10",
      description: "Launched two production-grade mobile platforms on Google Play Store and Apple App Store, acquiring over 10k+ aggregate organic installations.",
      location: "Global Markets"
    },
    {
      id: 3,
      year: "2024 - 2025",
      title: "Intern Mobile App Developer",
      subtitle: "Cityscape International Ltd",
      type: "experience",
      icon: Briefcase,
      color: "text-[#4FC3F7] bg-[#4FC3F7]/10",
      description: "Collaborated on production-level enterprise cross-platform codebases, integrating custom API modules, local caching databases, and responsive visual layout hierarchies.",
      location: "Dhaka, Bangladesh"
    },
    {
      id: 4,
      year: "2021 - 2025",
      title: "B.Sc. in Computer Science & Eng.",
      subtitle: "Daffodil International University",
      type: "education",
      icon: GraduationCap,
      color: "text-[#00E5FF] bg-[#00E5FF]/10",
      description: "Focused heavily on modular algorithms, relational databases, software design principles, and mobile system patterns. Graduated with honors.",
      location: "Dhaka, Bangladesh"
    }
  ];

  return (
    <section id="timeline" className="section-padding relative overflow-hidden bg-[#050816] border-b border-white/5">
      <div className="absolute top-1/2 left-[10%] w-[300px] h-[300px] bg-[#4FC3F7]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#00E5FF] uppercase tracking-widest">
            CAREER COMPILATION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Professional Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            A chronological mapping of professional engineering, academic qualifications, and major deployment milestones.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#4FC3F7] via-[#00E5FF] to-transparent opacity-20"></div>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = event.icon;

              return (
                <div 
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Badge Node (Center Point on wide, Left on mobile) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-[15px] md:-translate-x-1/2 top-1.5 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-white/20 hover:border-[#00E5FF] transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]"></div>
                  </div>

                  {/* Empty Spacer column to align with grid on desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Timeline Card content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="relative bg-[#0F172A]/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl transition-all duration-300 hover:border-white/10 hover:shadow-xl group">
                      
                      {/* Year badge */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                        <div className={`p-1.5 rounded-lg border border-white/5 ${event.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Header */}
                      <h3 className="text-lg font-extrabold text-white leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-xs text-white/50 font-semibold mt-0.5">
                        {event.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-4">
                        {event.description}
                      </p>

                      {/* Location Badge */}
                      <div className="flex items-center space-x-1.5 mt-4 pt-3 border-t border-white/5 text-[10px] sm:text-xs text-white/40">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{event.location}</span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
