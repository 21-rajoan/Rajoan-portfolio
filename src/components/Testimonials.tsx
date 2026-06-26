import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Rajoan has an uncanny ability to translate complex app specs into flawless Flutter layouts. He is disciplined, structured, and understands clean architecture deeply. Our app is running incredibly fast.",
      author: "Tahmid Chowdhury",
      role: "CTO, Fintech Venture",
      rating: 5,
      avatarBg: "bg-gradient-to-tr from-[#4FC3F7] to-[#00E5FF]"
    },
    {
      id: 2,
      quote: "Working with Rajoan was an exceptional experience. He structured our ride-sharing platform with high modularity and stable background tracking. We launched ahead of schedule, with zero memory leaks.",
      author: "Mirza Tasnim",
      role: "Product Director, GoRide App",
      rating: 5,
      avatarBg: "bg-gradient-to-tr from-[#00E5FF] to-indigo-500"
    },
    {
      id: 3,
      quote: "Rajoan delivers senior-grade mobile engineering. His attention to pixel-perfection, reactive state management, and clear, documented source code is exemplary. Highly recommended.",
      author: "Evelyn Sterling",
      role: "Founder, Zenith Wellness Labs",
      rating: 5,
      avatarBg: "bg-gradient-to-tr from-purple-500 to-[#4FC3F7]"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-[#050816]/90 border-b border-white/5">
      <div className="absolute top-[30%] left-[5%] w-[250px] h-[250px] bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#4FC3F7] uppercase tracking-widest">
            VALUED FEEDBACK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Discover what technical directors, tech startup founders, and project stakeholders say about cooperating with Rajoan.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Testimonial Active Card wrapper */}
          <div className="min-h-[280px] sm:min-h-[240px] flex items-center justify-center">
            {testimonials.map((test, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={test.id}
                  className={`absolute w-full bg-[#0F172A]/40 backdrop-blur-md border border-white/5 p-8 sm:p-12 rounded-[32px] transition-all duration-700 flex flex-col justify-between ${
                    isActive 
                      ? "opacity-100 scale-100 pointer-events-auto z-10" 
                      : "opacity-0 scale-95 pointer-events-none z-0 translate-y-4"
                  }`}
                >
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />

                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex space-x-1">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed italic font-medium">
                      "{test.quote}"
                    </p>

                    {/* Author block */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white shrink-0 ${test.avatarBg}`}>
                        {test.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-white leading-none">{test.author}</h4>
                        <span className="text-[10px] sm:text-xs text-[#00E5FF] font-semibold mt-1 block">{test.role}</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12 px-4 relative z-20">
            {/* Dots indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "w-8 bg-[#00E5FF]" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-[#00E5FF] hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-[#00E5FF] hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
