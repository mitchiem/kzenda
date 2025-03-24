
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  slug: string;
  image: string;
  year: string;
  dimensions: string;
  description: string;
  medium: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Mother's Love",
    slug: "mothers-love",
    image: "/lovable-uploads/cf2441b3-c1ef-4ad8-a7d7-4342e51f5a59.png",
    year: "2022",
    dimensions: "90 x 120 cm",
    medium: "Oil on canvas",
    description: "This piece captures the tender moment between a mother and her children, showcasing the universal bond of maternal love. The vibrant colors and textured brushwork emphasize the emotional depth of this everyday scene in rural Zimbabwe."
  },
  {
    id: 2,
    title: "Child with Bundle",
    slug: "child-with-bundle",
    image: "/lovable-uploads/2b7bcaf4-d417-4e78-a3ac-1c5c4276b17e.png",
    year: "2021",
    dimensions: "80 x 100 cm",
    medium: "Acrylic on canvas",
    description: "A powerful portrait depicting a young girl carrying her belongings, representing resilience and responsibility often shouldered by children in rural communities. The textured background contrasts with the detailed portraiture, creating a striking visual narrative."
  },
  {
    id: 3,
    title: "Spirits of the Savanna",
    slug: "spirits-of-the-savanna",
    image: "/lovable-uploads/4d0b40dd-73d7-414a-990f-d43d6761d98f.png", 
    year: "2023",
    dimensions: "100 x 150 cm",
    medium: "Mixed media on canvas",
    description: "This striking double-exposure style painting merges human and animal spirits, representing the deep connection between people and wildlife in African culture. The elephant symbolizes strength, wisdom, and memory – qualities that are also reflected in the human portrait."
  },
  {
    id: 4,
    title: "Zebra Child",
    slug: "zebra-child",
    image: "/lovable-uploads/c0ffa1bd-8d0e-4153-8ff3-cd35975579cb.png",
    year: "2022",
    dimensions: "90 x 120 cm",
    medium: "Mixed media on canvas",
    description: "A powerful portrait combining human and zebra imagery to explore themes of identity, heritage, and the relationship between mankind and nature. The footprint patterns symbolize the human impact on wildlife and the interconnected future of all species."
  },
  {
    id: 5,
    title: "Royal Heritage",
    slug: "royal-heritage",
    image: "/lovable-uploads/2b4d15df-dcb4-4c81-b970-a351eb066cf7.png",
    year: "2023",
    dimensions: "110 x 150 cm",
    medium: "Oil and fabric on canvas",
    description: "This regal portrait celebrates the beauty and cultural significance of traditional African headwraps and jewelry. The vibrant colors and intricate details showcase the pride and dignity of African heritage, while the expressive face conveys inner strength and wisdom."
  },
  {
    id: 6,
    title: "Father and Child",
    slug: "father-and-child",
    image: "/lovable-uploads/2b08b9c5-6bf5-44ce-909d-ca7dd3108505.png",
    year: "2022",
    dimensions: "85 x 115 cm",
    medium: "Mixed media on canvas",
    description: "A poignant representation of fatherhood and responsibility in modern Africa. The linear technique creates a sense of movement and life, while the careful color selection emphasizes the emotional bond between father and child."
  },
];

const ArtworkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = artworks.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-earth-900 mb-4">Artwork Not Found</h1>
          <p className="text-earth-700 mb-6">The artwork you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/#gallery" 
            className="px-6 py-3 bg-terracotta-600 text-white font-medium rounded-md 
              transition-all hover:bg-terracotta-700 inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        <Link 
          to="/#gallery" 
          className="inline-flex items-center text-earth-700 hover:text-terracotta-600 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-lg overflow-hidden art-shadow animate-fade-in">
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="w-full h-auto"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="mb-4 inline-block px-3 py-1 bg-terracotta-500/10 rounded-full">
              <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">{artwork.year}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">{artwork.title}</h1>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-sm font-medium text-earth-500 mb-1">Medium</h2>
                <p className="text-earth-900">{artwork.medium}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-earth-500 mb-1">Dimensions</h2>
                <p className="text-earth-900">{artwork.dimensions}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-serif font-medium text-earth-900 mb-4">About this Artwork</h2>
              <p className="text-earth-700 leading-relaxed">{artwork.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-6 py-3 bg-terracotta-600 text-white font-medium rounded-md 
                  transition-all hover:bg-terracotta-700 inline-flex items-center justify-center"
              >
                Inquire About This Piece
              </button>
              <Link 
                to="/#contact" 
                className="px-6 py-3 border border-earth-300 text-earth-900 font-medium 
                  rounded-md transition-all hover:bg-earth-100 inline-flex items-center justify-center"
              >
                Contact the Artist
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-8">More Artworks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks
              .filter(a => a.id !== artwork.id)
              .slice(0, 3)
              .map(relatedArtwork => (
                <div key={relatedArtwork.id} className="art-card">
                  <Link to={`/artwork/${relatedArtwork.slug}`} className="block image-hover-zoom">
                    <img 
                      src={relatedArtwork.image} 
                      alt={relatedArtwork.title}
                      className="w-full h-60 object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6">
                    <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">{relatedArtwork.title}</h3>
                    <div className="flex justify-between items-center text-sm text-earth-700">
                      <span>{relatedArtwork.year}</span>
                      <span>{relatedArtwork.medium}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
