import portfolioData from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0A0F11]">
      <div className="section-container relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-center">
        
        <FadeIn delay={100}>
          <div className="mb-8">
            <h2 className="font-mono text-white/80 text-sm md:text-base tracking-wide mb-2">
              about
            </h2>
            <div className="w-full h-px bg-[#222F35]"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col items-start space-y-8">
          <FadeIn delay={200}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Building apps people actually love.
            </h3>
          </FadeIn>
          
          <FadeIn delay={300} className="space-y-6">
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Mobile App Developer from Dhaka with a strong focus in Flutter development. 
              I design and build cross-platform applications that prioritize clean architecture, 
              smooth user experience, and maintainable code. My approach centers on MVVM architecture, 
              reactive state management with GetX and RxDart, and robust backend integration through 
              REST APIs and Firebase.
            </p>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Specialized in E-commerce, Streaming, Logistics, and Business apps — published and 
              maintained 18+ apps on Google Play and the App Store.
            </p>
          </FadeIn>

          <FadeIn delay={400} className="mt-8 w-full bg-[#11181C] border-l-4 border-[#00E59B] p-6 md:p-8 rounded-r-xl">
            <p className="text-white text-xl sm:text-2xl font-medium leading-snug">
              2+ years crafting mobile experiences. Now 18+ apps in the stores.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
