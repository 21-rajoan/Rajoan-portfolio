
import { GraduationCap, Briefcase, MapPin, Calendar, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img 
                  src="/lovable-uploads/af9cc730-9df3-4684-988b-2351ef1cbb55.png"
                  alt="Professional profile"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Who I Am?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I am a mobile app developer from Dhaka with a strong focus in Flutter 
                development. I love to get new experiences and always learn from my 
                surroundings.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I am a mobile app developer from Dhaka with a strong focus in Flutter 
                development. I love to get new experiences and always learn from my 
                surroundings.
              </p>
              
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md"
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD CV
              </Button>
            </div>

            {/* Stats or Skills */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="bg-card rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Education</h4>
                    <p className="text-primary font-medium text-sm">B.Sc. in CSE</p>
                    <p className="text-muted-foreground text-sm">Daffodil International University</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Experience</h4>
                    <p className="text-primary font-medium text-sm">Intern Developer</p>
                    <p className="text-muted-foreground text-sm">Cityscape International Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
