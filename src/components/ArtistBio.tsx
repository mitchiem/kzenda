
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ArtistBio = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      contentRef.current.classList.add('smooth-reveal');
      observer.observe(contentRef.current);
    }

    if (imageRef.current) {
      imageRef.current.classList.add('smooth-reveal');
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="section-spacing bg-earth-100/50" ref={bioRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef} 
            className="order-2 lg:order-1"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-4 inline-block px-3 py-1 bg-terracotta-500/10 rounded-full">
              <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">About the Artist</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">Keith Zenda</h2>
            <p className="text-earth-800 mb-6 leading-relaxed">
              Born and raised in Zimbabwe, Keith Zenda developed a profound connection to his heritage 
              from an early age. His artwork is a testament to the rich cultural tapestry and natural beauty of his homeland.
            </p>
            <p className="text-earth-800 mb-6 leading-relaxed">
              Keith's distinctive style merges traditional African themes with contemporary techniques, 
              creating pieces that resonate with both emotional depth and cultural significance. His work 
              focuses primarily on capturing the human experience through portraiture and daily life scenes.
            </p>
            <p className="text-earth-800 mb-8 leading-relaxed">
              Having exhibited across Africa and internationally, Keith's art has gained recognition for 
              its authenticity and powerful storytelling. Each piece invites viewers to connect with the 
              stories, emotions, and heritage of Zimbabwe.
            </p>
            <Link 
              to="/about" 
              className="px-6 py-3 bg-terracotta-600 text-white font-medium rounded-md 
                transition-all hover:bg-terracotta-700 inline-flex items-center justify-center"
            >
              Full Biography
            </Link>
          </div>
          <div 
            ref={imageRef} 
            className="order-1 lg:order-2"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/2b4d15df-dcb4-4c81-b970-a351eb066cf7.png" 
                alt="Keith Zenda - Artist Portrait" 
                className="w-full h-auto rounded-lg art-shadow"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg art-shadow hidden md:block">
                <p className="text-earth-900 font-serif italic">
                  "My art is a bridge between heritage and contemporary expression."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
