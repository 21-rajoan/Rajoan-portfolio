const skillGroups = [
  {
    category: "Languages",
    skills: ["Dart", "Swift", "Kotlin", "TypeScript", "Java"],
  },
  {
    category: "Frameworks & Architecture",
    skills: [
      "Flutter",
      "Clean Architecture",
      "MVVM",
      "SOLID",
      "BLoC / Cubit",
      "Riverpod",
      "GetX",
    ],
  },
  {
    category: "Backend & Realtime",
    skills: [
      "RESTful APIs",
      "WebSockets",
      "WebRTC",
      "Firebase",
      "GraphQL",
    ],
  },
  {
    category: "Payments & Tooling",
    skills: [
      "Stripe",
      "Apple Pay",
      "Google Pay",
      "RevenueCat",
      "In-App Purchases",
      "Shorebird OTA",
      "Git & CI/CD",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="mb-20 scroll-mt-16 md:mb-28 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <h2 className="section-label">Skills</h2>

      <div className="space-y-9">
        {skillGroups.map((group) => (
          <div key={group.category}>
            {/* Category label */}
            <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#4a5c78] mb-3">
              {group.category}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
