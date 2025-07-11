
import { GraduationCap, Briefcase, MapPin, Calendar, Code2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about creating exceptional mobile experiences through clean code and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">RA</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Passionate Flutter Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As a passionate Flutter developer, I build cross-platform mobile applications 
                that are performant, elegant, and user-friendly. I love turning complex problems 
                into simple, beautiful solutions.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-primary font-medium mb-1">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-muted-foreground mb-2">Daffodil International University, Dhaka</p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Experience</h4>
                  <p className="text-primary font-medium mb-1">Intern Developer</p>
                  <p className="text-muted-foreground mb-2">Cityscape International Ltd</p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Dec 2024 – Feb 2025</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Assisted in Flutter UI development and API integrations, 
                    gaining hands-on experience in mobile app development.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Code2 className="h-5 w-5 text-primary mr-2" />
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Firebase", "API Integration", "UI/UX Design", "Mobile Development"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
