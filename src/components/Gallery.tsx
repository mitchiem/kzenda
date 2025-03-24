
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Artwork {
  id: number;
  title: string;
  slug: string;
  image: string;
  year: string;
  dimensions: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Mother's Love",
    slug: "mothers-love",
    image: "/lovable-uploads/cf2441b3-c1ef-4ad8-a7d7-4342e51f5a59.png",
    year: "2022",
    dimensions: "90 x 120 cm",
  },
  {
    id: 2,
    title: "Child with Bundle",
    slug: "child-with-bundle",
    image: "/lovable-uploads/2b7bcaf4-d417-4e78-a3ac-1c5c4276b17e.png",
    year: "2021",
    dimensions: "80 x 100 cm",
  },
  {
    id: 3,
    title: "Spirits of the Savanna",
    slug: "spirits-of-the-savanna",
    image: "/lovable-uploads/4d0b40dd-73d7-414a-990f-d43d6761d98f.png", 
    year: "2023",
    dimensions: "100 x 150 cm",
  },
  {
    id: 4,
    title: "Zebra Child",
    slug: "zebra-child",
    image: "/lovable-uploads/c0ffa1bd-8d0e-4153-8ff3-cd35975579cb.png",
    year: "2022",
    dimensions: "90 x 120 cm",
  },
  {
    id: 5,
    title: "Royal Heritage",
    slug: "royal-heritage",
    image: "/lovable-uploads/2b4d15df-dcb4-4c81-b970-a351eb066cf7.png",
    year: "2023",
    dimensions: "110 x 150 cm",
  },
  {
    id: 6,
    title: "Father and Child",
    slug: "father-and-child",
    image: "/lovable-uploads/2b08b9c5-6bf5-44ce-909d-ca7dd3108505.png",
    year: "2022",
    dimensions: "85 x 115 cm",
  },
];

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const artworkRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    artworkRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('smooth-reveal');
        observer.observe(ref);
      }
    });

    return () => {
      artworkRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="gallery" className="section-spacing pt-2" ref={galleryRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <div className="mb-2 inline-block px-3 py-1 bg-savanna-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-savanna-800">Featured Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-3">Artwork Gallery</h2>
          <p className="text-earth-700 max-w-2xl mx-auto">
            Each piece tells a story of African life, culture, and the human experience through vibrant colors and emotional expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id}
              ref={(el) => (artworkRefs.current[index] = el)}
              className="art-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link to={`/artwork/${artwork.slug}`} className="block image-hover-zoom">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">{artwork.title}</h3>
                <div className="flex justify-between items-center text-sm text-earth-700">
                  <span>{artwork.year}</span>
                  <span>{artwork.dimensions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/exhibitions" 
            className="px-6 py-3 border border-earth-300 text-earth-900 font-medium 
              rounded-md transition-all hover:bg-earth-100 inline-flex items-center justify-center"
          >
            View All Artworks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
