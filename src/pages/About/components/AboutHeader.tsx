
import React, { forwardRef } from 'react';

const AboutHeader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
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
  );
});

AboutHeader.displayName = 'AboutHeader';

export default AboutHeader;
