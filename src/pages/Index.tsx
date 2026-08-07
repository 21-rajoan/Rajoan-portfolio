
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { About } from "@/components/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

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
      <Contact />
    </div>
  );
};

export default Index;
