import React, { useEffect, useRef } from 'react';
import { Avatar } from "@/components/ui/avatar";

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
        <div 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-block px-3 py-1 bg-terracotta-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-terracotta-700">About the Artist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Keith Zenda</h1>
          <p className="text-earth-700 max-w-3xl mx-auto text-lg">
            Renowned Zimbabwean artist capturing the essence of African life through vibrant, emotionally-rich artwork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div 
            ref={(el) => (sectionsRef.current[1] = el)}
            style={{ transitionDelay: '200ms' }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/2b4d15df-dcb4-4c81-b970-a351eb066cf7.png" 
              alt="Keith Zenda - Artwork"
              className="w-full h-auto rounded-lg art-shadow mb-10"
            />
            
            <div className="rounded-lg overflow-hidden art-shadow-lg">
              <img 
                src="/lovable-uploads/8f1cd880-f239-4008-a7cb-9700e1e8f4b4.png"
                alt="Keith Zenda - Portrait"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full art-shadow border-4 border-earth-100 hidden md:flex">
              <Avatar className="h-20 w-20">
                <img
                  src="/lovable-uploads/8f1cd880-f239-4008-a7cb-9700e1e8f4b4.png"
                  alt="Keith Zenda"
                  className="object-cover"
                />
              </Avatar>
            </div>
          </div>

          <div 
            ref={(el) => (sectionsRef.current[2] = el)}
            style={{ transitionDelay: '400ms' }}
          >
            <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">Biography</h2>
            <div className="space-y-4 text-earth-800">
              <p>
                Born in 1985 in Harare, Zimbabwe, Keith Zenda showed artistic promise from an early age. 
                Growing up in a country with rich cultural traditions and breathtaking landscapes, 
                Keith developed a deep appreciation for his heritage and the natural beauty surrounding him.
              </p>
              <p>
                After completing formal art training at the National Gallery School of Visual Art and Design in Harare, 
                Keith began developing his distinctive style that merges traditional African themes with contemporary techniques. 
                His work is characterized by vibrant colors, emotional depth, and powerful storytelling.
              </p>
              <p>
                Keith's art primarily focuses on portraiture and scenes of daily life, capturing the resilience, 
                dignity, and spirit of the people of Zimbabwe. His innovative approach often incorporates elements 
                of African wildlife and spiritual symbolism, creating multi-layered works that speak to both cultural 
                heritage and universal human experiences.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={(el) => (sectionsRef.current[3] = el)}
          className="bg-earth-100/50 rounded-lg p-8 mb-20"
          style={{ transitionDelay: '600ms' }}
        >
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">Artist Statement</h2>
          <div className="space-y-4 text-earth-800">
            <p>
              "My work is deeply rooted in the soil of Zimbabwe—its people, landscapes, wildlife, and cultural 
              traditions. Through my art, I seek to capture the essence of African life, revealing both its challenges 
              and its profound beauty.
            </p>
            <p>
              I believe that art should tell stories that resonate with viewers on an emotional level. Whether 
              depicting a mother with her children, a child carrying responsibility beyond their years, or the 
              spiritual connection between humans and wildlife, my aim is to create work that speaks to our 
              shared humanity while celebrating the unique qualities of African culture.
            </p>
            <p>
              The vibrant colors and textured surfaces in my paintings reflect the richness and complexity of life 
              in Zimbabwe. My techniques often blend traditional African artistic approaches with contemporary 
              methods, creating a visual language that bridges past and present, local and universal.
            </p>
            <p>
              Through my art, I hope to preserve and share the stories of my homeland, fostering understanding 
              and appreciation for a culture that continues to thrive despite many challenges."
            </p>
          </div>
        </div>

        <div 
          ref={(el) => (sectionsRef.current[4] = el)}
          className="mb-20"
          style={{ transitionDelay: '800ms' }}
        >
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">Education & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-terracotta-700">2003 - 2007</div>
              <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">Bachelor of Fine Arts</h3>
              <p className="text-earth-700">National Gallery School of Visual Art and Design, Harare</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-terracotta-700">2008 - 2009</div>
              <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">Advanced Painting Techniques</h3>
              <p className="text-earth-700">African Arts Institute, Cape Town, South Africa</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-terracotta-700">2010</div>
              <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">Mixed Media Masterclass</h3>
              <p className="text-earth-700">International Studio Program, London, UK</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-terracotta-700">2015</div>
              <h3 className="text-xl font-medium font-serif text-earth-900 mb-2">Cultural Heritage in Modern Art</h3>
              <p className="text-earth-700">African Contemporary Art Symposium, Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <div 
          ref={(el) => (sectionsRef.current[5] = el)}
          style={{ transitionDelay: '1000ms' }}
        >
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">Recognition & Awards</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-savanna-100 flex items-center justify-center text-savanna-700 mr-4">
                <span className="font-serif font-bold">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-1">African Heritage Award</h3>
                <p className="text-earth-700">Pan-African Arts Foundation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-savanna-100 flex items-center justify-center text-savanna-700 mr-4">
                <span className="font-serif font-bold">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-1">Excellence in Visual Arts</h3>
                <p className="text-earth-700">Zimbabwe National Arts Council</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-savanna-100 flex items-center justify-center text-savanna-700 mr-4">
                <span className="font-serif font-bold">2018</span>
              </div>
              <div>
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-1">Cultural Preservation Prize</h3>
                <p className="text-earth-700">International Heritage Foundation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-savanna-100 flex items-center justify-center text-savanna-700 mr-4">
                <span className="font-serif font-bold">2016</span>
              </div>
              <div>
                <h3 className="text-xl font-medium font-serif text-earth-900 mb-1">Emerging Artist of the Year</h3>
                <p className="text-earth-700">Contemporary African Art Biennale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
