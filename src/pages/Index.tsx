
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import ArtistBio from '@/components/ArtistBio';
import Exhibition from '@/components/Exhibition';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Initialize intersection observer for smooth reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.smooth-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <ArtistBio />
      <Exhibition />
      <Contact />
    </div>
  );
};

export default Index;
