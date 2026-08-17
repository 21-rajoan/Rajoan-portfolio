import portfolioData from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative bg-transparent">
      <div className="section-container relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-center">

        <FadeIn delay={100}>
          <div className="mb-8">
            <h2 className="font-mono text-white/80 text-sm md:text-base tracking-wide mb-2">
              about
            </h2>
            <div className="w-full h-px bg-secondary"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col items-start space-y-8">
          <FadeIn delay={200}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering robust mobile solutions from concept to scale.
            </h3>
          </FadeIn>

          <FadeIn delay={300} className="space-y-6">
            {portfolioData.personal.bio.map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={400} className="mt-8 w-full bg-card/90 backdrop-blur-md border border-border border-l-4 border-l-[#00E59B] p-6 md:p-8 rounded-r-2xl shadow-xl">
            <p className="text-white text-xl sm:text-2xl font-medium leading-snug">
              2+ years crafting production mobile experiences • 22+ apps built &amp; 16+ deployed across App Store &amp; Google Play.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
