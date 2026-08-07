import { useState } from "react";
import portfolioData from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronRight, Briefcase, CheckCircle2 } from "lucide-react";

export const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="pt-24 pb-12 relative bg-[#0A0F11]">
      <div className="section-container relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-center">
        
        <FadeIn>
          <div className="mb-8">
            <h2 className="font-mono text-white/80 text-sm md:text-base tracking-wide mb-2">
              career.log
            </h2>
            <div className="w-full h-px bg-[#222F35]"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col space-y-4">
          {portfolioData.experience.map((job, idx) => {
            const isExpanded = expandedIndex === idx;
            
            return (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="border-b border-[#222F35]/50 pb-4">
                  {/* Clickable Header */}
                  <button 
                    onClick={() => toggleExpand(idx)}
                    className="w-full text-left flex items-center gap-3 py-2 group focus:outline-none"
                  >
                    <ChevronRight 
                      size={18} 
                      className={`text-[#00E59B] transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`} 
                    />
                    <span className="font-mono text-white/90 text-sm sm:text-base group-hover:text-[#00E59B] transition-colors truncate">
                      {job.company} — {job.period}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[1000px] opacity-100 mt-6 mb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-8 sm:pl-10">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {job.role}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-6">
                        <Briefcase size={14} className="opacity-70" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {job.responsibilities.map((task, taskIdx) => (
                          <li key={taskIdx} className="text-muted-foreground/90 flex items-start gap-3 text-sm md:text-base">
                            <CheckCircle2 size={16} className="text-[#00E59B] opacity-70 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIdx) => (
                          <span 
                            key={techIdx}
                            className="px-2.5 py-1 rounded-md bg-[#11181C] border border-[#222F35] text-[11px] font-mono text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
