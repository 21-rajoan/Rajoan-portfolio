
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { About } from "@/components/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FeaturedShowcaseSection } from "@/components/sections/FeaturedShowcaseSection";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <HeroSection />
      
      {/* Reordered sections based on user request */}
      <About />
      <ExperienceSection />
      <Skills />
      <ProjectsSection />
      <FeaturedShowcaseSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
