
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const routeImages = {
  '/': '/lovable-uploads/2b7bcaf4-d417-4e78-a3ac-1c5c4276b17e.png', // Default - Child with Bundle
  '/about': '/lovable-uploads/cf2441b3-c1ef-4ad8-a7d7-4342e51f5a59.png', // Mother's Love
  '/exhibitions': '/lovable-uploads/4d0b40dd-73d7-414a-990f-d43d6761d98f.png', // Spirits of the Savanna
  '/artwork': '/lovable-uploads/2b4d15df-dcb4-4c81-b970-a351eb066cf7.png', // Royal Heritage
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  const getImageForRoute = () => {
    if (location.pathname.startsWith('/artwork/')) {
      return routeImages['/artwork'];
    }
    
    return routeImages[location.pathname] || routeImages['/'];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add('animate-image-reveal');
              setTimeout(() => {
                if (imageRef.current) {
                  imageRef.current.style.opacity = '0.5';
                }
              }, 1200);
            }
            
            if (textRef.current) {
              textRef.current.classList.add('animate-fade-in');
              setTimeout(() => {
                if (textRef.current) {
                  textRef.current.style.opacity = '1';
                }
              }, 700);
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
    <div ref={heroRef} className="relative min-h-[30vh] flex items-center pt-2 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={getImageForRoute()}
          alt="Featured artwork silhouette"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-1">
        <div 
          ref={textRef} 
          className="max-w-3xl pt-16 md:pt-20" 
          style={{ opacity: 0 }}
        >
          <div className="mb-1 inline-block px-2 py-0.5 bg-terracotta-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">Zimbabwean Artist</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-earth-900 mb-2 leading-tight">
            Capturing the Spirit of <span className="text-terracotta-600">Zimbabwe</span> Through Art
          </h1>
          <p className="text-sm md:text-base text-earth-800/90 mb-2 max-w-2xl leading-relaxed">
            Exploring humanity, heritage, and the natural beauty of Africa through vibrant, 
            emotionally rich compositions that tell stories of our shared experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mb-1">
            <Link 
              to="/#gallery" 
              className="px-4 py-2 bg-terracotta-600 text-white font-medium rounded-md 
                transition-all hover:bg-terracotta-700 inline-flex items-center justify-center group"
            >
              Explore Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 border border-earth-300 text-earth-900 font-medium 
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
