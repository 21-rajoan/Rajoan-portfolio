import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AppShowcaseGallery } from "@/components/AppShowcaseGallery";
import { PublishedApps } from "@/components/PublishedApps";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Sticky Premium Navbar */}
      <Navigation />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Statistics Section */}
      <Statistics />
      
      {/* 3. Featured Projects Section */}
      <FeaturedProjects />
      
      {/* 4. App Showcase Gallery */}
      <AppShowcaseGallery />
      
      {/* 5. Published Applications Section */}
      <PublishedApps />
      
      {/* 6. Skills & Technologies */}
      <Skills />
      
      {/* 7. Professional Experience Timeline */}
      <Timeline />
      
      {/* 8. Testimonials Section */}
      <Testimonials />
      
      {/* 9. Contact Section */}
      <Contact />
      
      {/* 10. Premium Footer */}
      <Footer />
    </div>
  );
};

export default Index;
