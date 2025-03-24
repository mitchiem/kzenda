
import React, { useEffect, useRef } from 'react';
import AboutHeader from './components/AboutHeader';
import ArtistPortrait from './components/ArtistPortrait';
import Biography from './components/Biography';
import ArtistStatement from './components/ArtistStatement';
import Education from './components/Education';
import Awards from './components/Awards';

const About = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

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

    sectionsRef.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('smooth-reveal');
        observer.observe(ref);
      }
    });

    return () => {
      sectionsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        <AboutHeader ref={(el) => (sectionsRef.current[0] = el)} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ArtistPortrait ref={(el) => (sectionsRef.current[1] = el)} />
          <Biography ref={(el) => (sectionsRef.current[2] = el)} />
        </div>

        <ArtistStatement ref={(el) => (sectionsRef.current[3] = el)} />
        <Education ref={(el) => (sectionsRef.current[4] = el)} />
        <Awards ref={(el) => (sectionsRef.current[5] = el)} />
      </div>
    </div>
  );
};

export default About;
