
import React, { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Exhibition {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Spirits of Zimbabwe",
    date: "June 15 - July 30, 2023",
    location: "National Gallery of Zimbabwe, Harare",
    description: "A solo exhibition featuring works that explore the spiritual and cultural heritage of Zimbabwe.",
  },
  {
    id: 2,
    title: "Contemporary African Voices",
    date: "August 10 - September 5, 2023",
    location: "African Art Museum, Cape Town",
    description: "A group exhibition showcasing emerging and established artists from across the African continent.",
  },
  {
    id: 3,
    title: "Rhythms of Life",
    date: "October 18 - December 12, 2023",
    location: "International Art Center, London",
    description: "An exploration of daily life and human connections through vibrant portraiture and scenes.",
  },
];

const Exhibition = () => {
  const exhibitionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (titleRef.current) {
      titleRef.current.classList.add('smooth-reveal');
      observer.observe(titleRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('smooth-reveal');
        observer.observe(ref);
      }
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="exhibitions" className="section-spacing" ref={exhibitionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10" ref={titleRef}>
          <div className="mb-3 inline-block px-3 py-1 bg-terracotta-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-3">Upcoming Exhibitions</h2>
          <p className="text-earth-700 max-w-2xl mx-auto">
            Experience Keith Zenda's artwork in person at these upcoming exhibitions and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={exhibition.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-lg overflow-hidden art-shadow p-5 border border-earth-100"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-3 text-terracotta-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium text-sm">{exhibition.date}</span>
              </div>
              <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">{exhibition.title}</h3>
              <p className="text-earth-600 text-sm mb-3">{exhibition.location}</p>
              <p className="text-earth-700 mb-4 text-sm">{exhibition.description}</p>
              <Link 
                to="/exhibitions" 
                className="text-terracotta-600 font-medium text-sm hover:text-terracotta-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/exhibitions" 
            className="px-6 py-3 border border-earth-300 text-earth-900 font-medium 
              rounded-md transition-all hover:bg-earth-100 inline-flex items-center justify-center"
          >
            View All Exhibitions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
