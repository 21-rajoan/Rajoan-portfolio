import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolioData";

const experiences = [
  {
    company: "Softvence",
    role: "Mobile Application Developer",
    period: "Mar 2025 — Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Architect and maintain cross-platform mobile apps for iOS and Android using Clean Architecture, MVVM, and reactive state management (GetX, RxDart, Provider).",
      "Engineered real-time features — low-latency WebSockets, WebRTC live audio/video streaming, push notifications, and full payment integration (Stripe, Apple Pay, Google Pay).",
      "Manage end-to-end App Store and Google Play releases with CI/CD pipelines and Shorebird over-the-air binary updates.",
    ],
    stack: ["Flutter", "Dart", "Swift", "Kotlin", "WebRTC", "Shorebird"],
  },
  {
    company: "Cityscape International Ltd.",
    role: "Junior Flutter Developer",
    period: "Dec 2024 — Feb 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Built responsive mobile UI with Provider state management following modular design specifications.",
      "Improved runtime performance by 30% and reduced bundle sizes by 20% through memory profiling and asset optimization.",
    ],
    stack: ["Flutter", "Provider", "Dart"],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-20 scroll-mt-16 md:mb-28 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <h2 className="section-label">Experience</h2>

      {/* Timeline */}
      <div className="space-y-14">
        {experiences.map((job, idx) => (
          <div key={idx} className="group relative">

            {/* Period badge */}
            <p className="text-[11px] font-mono tracking-[0.08em] text-[#4a5c78] uppercase mb-2.5">
              {job.period}
            </p>

            {/* Role + Company */}
            <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#CCD6F6] leading-tight mb-0.5">
              {job.role}
              <span className="text-[#64FFDA]"> · {job.company}</span>
            </h3>

            {/* Location */}
            <p className="text-[12px] font-mono text-[#4a5c78] mb-4">
              {job.location}
            </p>

            {/* Bullets */}
            <ul className="space-y-3">
              {job.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-[13.5px] text-[#8892B0] leading-[1.75]">
                  <span className="text-[#64FFDA] text-[9px] mt-[6px] flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Stack pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-[3px] rounded-sm text-[11px] font-mono
                             text-[#64FFDA] bg-[#64FFDA]/8 border border-[#64FFDA]/15"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Separator — not on last item */}
            {idx < experiences.length - 1 && (
              <div className="mt-14 h-px bg-[#233554]/40" />
            )}
          </div>
        ))}
      </div>

      {/* Footer: Education + Résumé */}
      <div className="mt-14 pt-8 border-t border-[#1a2e50] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <p className="text-[13px] font-medium text-[#CCD6F6]">
            B.Sc. in Computer Science &amp; Engineering
          </p>
          <p className="text-[12px] font-mono text-[#4a5c78] mt-0.5">
            Daffodil International University · 2019 – 2024
          </p>
        </div>

        <a
          href={portfolioData.personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-[12px] font-mono text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-200"
        >
          View Full Résumé
          <ArrowUpRight
            size={13}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </a>
      </div>
    </section>
  );
};
