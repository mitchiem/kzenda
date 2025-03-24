
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Exhibition {
  id: number;
  title: string;
  date: string;
  location: string;
  city: string;
  description: string;
  featured: boolean;
  image?: string;
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Spirits of Zimbabwe",
    date: "June 15 - July 30, 2023",
    location: "National Gallery of Zimbabwe",
    city: "Harare, Zimbabwe",
    description: "A solo exhibition featuring works that explore the spiritual and cultural heritage of Zimbabwe.",
    featured: true,
    image: "/lovable-uploads/4d0b40dd-73d7-414a-990f-d43d6761d98f.png"
  },
  {
    id: 2,
    title: "Contemporary African Voices",
    date: "August 10 - September 5, 2023",
    location: "African Art Museum",
    city: "Cape Town, South Africa",
    description: "A group exhibition showcasing emerging and established artists from across the African continent.",
    featured: true,
    image: "/lovable-uploads/2b4d15df-dcb4-4c81-b970-a351eb066cf7.png"
  },
  {
    id: 3,
    title: "Rhythms of Life",
    date: "October 18 - December 12, 2023",
    location: "International Art Center",
    city: "London, UK",
    description: "An exploration of daily life and human connections through vibrant portraiture and scenes.",
    featured: true,
    image: "/lovable-uploads/cf2441b3-c1ef-4ad8-a7d7-4342e51f5a59.png"
  },
  {
    id: 4,
    title: "African Heritage Festival",
    date: "January 5 - February 10, 2024",
    location: "Modern Art Gallery",
    city: "Nairobi, Kenya",
    description: "A celebration of African cultural heritage through contemporary artistic expressions.",
    featured: false
  },
  {
    id: 5,
    title: "Portraits of Humanity",
    date: "March 15 - April 30, 2024",
    location: "Global Arts Center",
    city: "Paris, France",
    description: "An international exhibition exploring human experiences across cultures through portraiture.",
    featured: false
  },
  {
    id: 6,
    title: "Wildlife and Spirit",
    date: "May 20 - June 25, 2024",
    location: "Natural History Museum",
    city: "Johannesburg, South Africa",
    description: "Exploring the connections between humans and wildlife through artistic interpretation.",
    featured: false
  },
  {
    id: 7,
    title: "Art of Zimbabwe",
    date: "July 10 - August 30, 2024",
    location: "Cultural Heritage Center",
    city: "New York, USA",
    description: "A showcase of Zimbabwe's finest contemporary artists and their cultural expressions.",
    featured: false
  },
  {
    id: 8,
    title: "Colors of Africa",
    date: "September 15 - October 20, 2024",
    location: "International Arts Festival",
    city: "Berlin, Germany",
    description: "A vibrant exploration of traditional and contemporary color expressions in African art.",
    featured: false
  }
];

const Exhibitions = () => {
  const featuredRef = useRef<HTMLDivElement>(null);
  const upcomingRef = useRef<HTMLDivElement>(null);
  const featuredItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const upcomingItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    if (featuredRef.current) {
      featuredRef.current.classList.add('smooth-reveal');
      observer.observe(featuredRef.current);
    }

    if (upcomingRef.current) {
      upcomingRef.current.classList.add('smooth-reveal');
      observer.observe(upcomingRef.current);
    }

    featuredItemsRef.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('smooth-reveal');
        observer.observe(ref);
      }
    });

    upcomingItemsRef.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('smooth-reveal');
        observer.observe(ref);
      }
    });

    return () => {
      if (featuredRef.current) observer.unobserve(featuredRef.current);
      if (upcomingRef.current) observer.unobserve(upcomingRef.current);
      
      featuredItemsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      
      upcomingItemsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const featuredExhibitions = exhibitions.filter(ex => ex.featured);
  const upcomingExhibitions = exhibitions.filter(ex => !ex.featured);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={featuredRef}>
          <div className="mb-4 inline-block px-3 py-1 bg-terracotta-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">Exhibitions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Featured Exhibitions</h1>
          <p className="text-earth-700 max-w-3xl mx-auto">
            Explore Keith Zenda's current and upcoming exhibitions around the world, 
            showcasing his vibrant artwork and celebrating African heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredExhibitions.map((exhibition, index) => (
            <div 
              key={exhibition.id}
              ref={(el) => (featuredItemsRef.current[index] = el)}
              className="bg-white rounded-lg overflow-hidden art-shadow"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {exhibition.image && (
                <div className="h-60 overflow-hidden">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4 text-terracotta-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium text-sm">{exhibition.date}</span>
                </div>
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">{exhibition.title}</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-earth-400 mt-1 mr-2" />
                  <div>
                    <p className="text-earth-800">{exhibition.location}</p>
                    <p className="text-earth-600 text-sm">{exhibition.city}</p>
                  </div>
                </div>
                <p className="text-earth-700 mb-6">{exhibition.description}</p>
                <button className="text-terracotta-600 font-medium hover:text-terracotta-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12" ref={upcomingRef} style={{ transitionDelay: '500ms' }}>
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">Upcoming Exhibitions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {upcomingExhibitions.map((exhibition, index) => (
            <div 
              key={exhibition.id}
              ref={(el) => (upcomingItemsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-sm border border-earth-100 flex items-start"
              style={{ transitionDelay: `${500 + (index * 100)}ms` }}
            >
              <div className="mr-4 h-14 w-14 rounded-full bg-earth-100 flex items-center justify-center text-terracotta-600">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">{exhibition.title}</h3>
                <p className="text-earth-600 text-sm mb-2">{exhibition.date}</p>
                <div className="flex items-start mb-3">
                  <MapPin className="h-4 w-4 text-earth-400 mt-1 mr-2" />
                  <div>
                    <p className="text-earth-800 text-sm">{exhibition.location}</p>
                    <p className="text-earth-600 text-xs">{exhibition.city}</p>
                  </div>
                </div>
                <p className="text-earth-700 text-sm">{exhibition.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-earth-100/50 rounded-lg p-8 animate-fade-in" 
          style={{ animationDelay: '1000ms' }}
        >
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">Exhibition Requests</h2>
          <p className="text-earth-700 mb-6">
            Interested in featuring Keith Zenda's artwork in your gallery or event? 
            Please get in touch with your proposal and requirements.
          </p>
          <button className="px-6 py-3 bg-terracotta-600 text-white font-medium rounded-md 
            transition-all hover:bg-terracotta-700 inline-flex items-center justify-center">
            Contact for Exhibition Inquiries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
