
import React, { forwardRef } from 'react';

const ArtistStatement = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
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
  );
});

ArtistStatement.displayName = 'ArtistStatement';

export default ArtistStatement;
