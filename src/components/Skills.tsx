
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A comprehensive skill set focused on modern mobile development technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-2xl p-8 card-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
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
