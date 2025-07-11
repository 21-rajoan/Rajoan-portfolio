
import { Code, Database, Wrench, Lightbulb } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Dart", level: 90 },
        { name: "Java", level: 85 },
        { name: "Python", level: 75 },
        { name: "C", level: 70 },
      ],
      color: "bg-blue-500"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Git", level: 85 },
      ],
      color: "bg-green-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "Firebase", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
      color: "bg-purple-500"
    },
    {
      title: "Best Practices",
      icon: Lightbulb,
      skills: [
        { name: "MVVM Architecture", level: 85 },
        { name: "REST API Development", level: 90 },
        { name: "Agile Methodologies", level: 80 },
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            A comprehensive skill set focused on modern mobile development technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-2xl p-8 card-shadow h-full"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
