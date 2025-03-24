
import React, { forwardRef } from 'react';

const Biography = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
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
  );
});

Biography.displayName = 'Biography';

export default Biography;
