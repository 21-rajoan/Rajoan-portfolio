import portfolioData from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";

export const Skills = () => {
  return (
    <section id="skills" className="py-16 relative bg-transparent">
      <div className="section-container relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-center">
        
        <FadeIn delay={100}>
          <div className="mb-12">
            <h2 className="font-mono text-white/80 text-sm md:text-base tracking-wide mb-2">
              skills
            </h2>
            <div className="w-full h-px bg-secondary mb-8"></div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Capabilities
            </h3>
          </div>
        </FadeIn>

        <div className="flex flex-col space-y-12">
          {portfolioData.skillCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="up">
              <div>
                <h4 className="font-mono text-white/70 text-sm md:text-base mb-4 tracking-wide">
                  {category.title}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-5 py-2 rounded-full bg-card border border-border text-white/90 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
