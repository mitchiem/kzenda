
import React, { forwardRef } from 'react';
import { Avatar } from "@/components/ui/avatar";

const ArtistPortrait = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
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
  );
});

ArtistPortrait.displayName = 'ArtistPortrait';

export default ArtistPortrait;
