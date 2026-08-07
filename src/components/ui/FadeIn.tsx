import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // In your case there's only one element to observe
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Unobserve once it's visible so it doesn't animate out and back in
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 } // trigger when 10% of element is visible
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const getDirectionClasses = () => {
    if (isVisible) return 'translate-y-0 translate-x-0 opacity-100';
    
    switch (direction) {
      case 'up': return 'translate-y-10 opacity-0';
      case 'down': return '-translate-y-10 opacity-0';
      case 'left': return 'translate-x-10 opacity-0';
      case 'right': return '-translate-x-10 opacity-0';
      case 'none': return 'opacity-0';
      default: return 'translate-y-10 opacity-0';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${getDirectionClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
