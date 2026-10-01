export const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-20 scroll-mt-16 md:mb-28 lg:scroll-mt-24"
      aria-label="About"
    >
      <h2 className="section-label">About</h2>

      <div className="space-y-5 text-[14px] sm:text-[15px] text-[#8892B0] leading-[1.8]">
        <p>
          I am a{" "}
          <span className="text-[#CCD6F6] font-medium">Software Engineer</span>{" "}
          specializing in cross-platform mobile systems for iOS and Android. My foundation
          is a B.Sc. in Computer Science &amp; Engineering, and my daily work involves
          designing maintainable, scalable applications using{" "}
          <span className="text-[#CCD6F6] font-medium">Flutter, Swift, and Kotlin</span>.
        </p>

        <p>
          My engineering approach centers on Clean Architecture and decoupled state management.
          I integrate real-time WebSockets, WebRTC media pipelines, and secure payment flows —
          focusing on predictable data, modular code, and shipping software that performs well
          in production.
        </p>
      </div>

      {/* Focus checklist */}
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
        {[
          "Clean Architecture & MVVM",
          "Flutter, Swift & Kotlin",
          "WebSockets & WebRTC",
          "In-App Purchases & Stripe",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[13px] font-mono text-[#8892B0]">
            <span className="text-[#64FFDA] text-[10px]">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
