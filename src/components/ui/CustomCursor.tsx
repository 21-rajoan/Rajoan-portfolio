import { useEffect, useState, useRef } from "react";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Track exact mouse coordinates
  const mousePosition = useRef({ x: -100, y: -100 });
  // Track trailing ring coordinates
  const trailingPosition = useRef({ x: -100, y: -100 });
  
  // DOM refs for direct style manipulation (much better for performance than React state for 60fps animations)
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let isTouchDevice = false;

    // Detect touch device
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      isTouchDevice = true;
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animateCursor = () => {
      if (isTouchDevice) return;

      // Lerp (Linear Interpolation) for the trailing ring
      trailingPosition.current.x += (mousePosition.current.x - trailingPosition.current.x) * 0.15;
      trailingPosition.current.y += (mousePosition.current.y - trailingPosition.current.y) * 0.15;

      // Update dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePosition.current.x - 4}px, ${mousePosition.current.y - 4}px, 0)`;
      }

      // Update trailing ring with lerped position
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailingPosition.current.x - 16}px, ${trailingPosition.current.y - 16}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    
    // Start animation loop
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Exact Dot */}
      <div 
        ref={dotRef}
        className={`absolute top-0 left-0 w-2 h-2 rounded-full mix-blend-screen transition-all duration-200 ease-out`}
        style={{ 
          backgroundColor: isHovering ? 'transparent' : '#00E59B',
        }}
      />
      
      {/* Trailing Ring with Glow */}
      <div 
        ref={ringRef}
        className="absolute top-0 left-0 w-8 h-8 rounded-full border border-[#00E59B]/50 transition-all duration-300 ease-out flex items-center justify-center backdrop-blur-[1px]"
        style={{ 
          transform: `scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'rgba(0, 229, 155, 0.15)' : 'transparent',
          boxShadow: isHovering ? '0 0 25px rgba(0, 229, 155, 0.4)' : '0 0 10px rgba(0, 229, 155, 0.1)',
          borderColor: isHovering ? 'rgba(0, 229, 155, 0.8)' : 'rgba(0, 229, 155, 0.5)'
        }}
      >
        {/* Inner glow ping when hovering */}
        <div 
          className={`absolute inset-0 rounded-full bg-[#00E59B] transition-opacity duration-300 ${isHovering ? 'opacity-20 animate-ping' : 'opacity-0'}`} 
        />
      </div>
    </div>
  );
};
