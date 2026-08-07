import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    let hasStarted = false;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          hasStarted = true;
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
};
