
import React, { forwardRef } from 'react';

const Awards = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
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
  );
});

Awards.displayName = 'Awards';

export default Awards;
