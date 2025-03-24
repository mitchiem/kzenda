
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add('animate-image-reveal');
            }
            
            if (textRef.current) {
              textRef.current.classList.add('animate-fade-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="/lovable-uploads/2b7bcaf4-d417-4e78-a3ac-1c5c4276b17e.png"
          alt="African woman with colorful headwrap"
          className="w-full h-full object-cover opacity-50 object-center"
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 pt-16">
        <div 
          ref={textRef} 
          className="max-w-3xl" 
          style={{ opacity: 0 }}
        >
          <div className="mb-4 inline-block px-3 py-1 bg-terracotta-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">Zimbabwean Artist</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6 leading-tight">
            Capturing the Spirit of <span className="text-terracotta-600">Zimbabwe</span> Through Art
          </h1>
          <p className="text-lg md:text-xl text-earth-800/90 mb-8 max-w-2xl leading-relaxed">
            Exploring humanity, heritage, and the natural beauty of Africa through vibrant, 
            emotionally rich compositions that tell stories of our shared experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/#gallery" 
              className="px-6 py-3 bg-terracotta-600 text-white font-medium rounded-md 
                transition-all hover:bg-terracotta-700 inline-flex items-center justify-center group"
            >
              Explore Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-3 border border-earth-300 text-earth-900 font-medium 
                rounded-md transition-all hover:bg-earth-100 inline-flex items-center justify-center"
            >
              About the Artist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
