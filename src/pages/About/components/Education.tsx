
import React, { forwardRef } from 'react';

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
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
  );
});

Education.displayName = 'Education';

export default Education;
