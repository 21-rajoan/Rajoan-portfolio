import { useState, useEffect } from "react";

/**
 * Custom hook that tracks which section is currently in view
 * based on scroll position. Used for active navigation highlighting.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i].replace("#", "");
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      // Default to first section if at top
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0] || "");
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
