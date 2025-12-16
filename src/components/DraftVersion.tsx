import React from 'react';
import { motion } from "motion/react";

export function DraftVersion() {
  return (
    <div className="w-full h-full bg-[#f8f9fa] relative font-mono text-gray-600 flex flex-col overflow-hidden">
      {/* Paper Texture / Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
        backgroundSize: '20px 20px' 
      }}></div>

      {/* Navigation Draft */}
      <div className="h-24 border-b-4 border-black border-dashed flex items-end pb-4 px-6 justify-between shrink-0 bg-white relative z-10">
        <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
           <
        </div>
        <div className="text-2xl font-bold italic text-black">
          TITLE?
        </div>
        <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
           +
        </div>
        
        {/* Annotation */}
        <div className="absolute top-8 left-20 -rotate-6 text-red-500 text-sm font-bold">
          make bigger!!
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 relative z-0">
        
        {/* Card 1 Draft */}
        <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
           <div className="h-6 w-1/2 bg-gray-200 mb-4 border border-black"></div>
           
           <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square border-2 border-dashed border-black flex items-center justify-center bg-gray-100 relative">
               <span className="text-4xl text-gray-300 font-black">X</span>
             </div>
             <div className="aspect-square border-2 border-dashed border-black flex items-center justify-center bg-gray-100 relative">
               <span className="text-4xl text-gray-300 font-black">X</span>
             </div>
             <div className="aspect-square border-2 border-dashed border-black flex items-center justify-center bg-gray-100 relative">
               <span className="text-4xl text-gray-300 font-black">X</span>
               {/* Annotation */}
               <div className="absolute -bottom-4 -right-4 bg-yellow-200 text-black text-xs p-1 border border-black rotate-12">
                 Photos here
               </div>
             </div>
             <div className="aspect-square border-2 border-dashed border-black flex items-center justify-center bg-gray-100">
               <span className="text-4xl text-gray-300 font-black">X</span>
             </div>
           </div>
           
           <div className="mt-4 h-4 w-3/4 bg-gray-200 border border-black"></div>
           <div className="mt-2 h-4 w-1/2 bg-gray-200 border border-black"></div>
        </div>

        {/* Card 2 Draft */}
        <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-70">
           <div className="h-6 w-1/3 bg-gray-200 mb-4 border border-black"></div>
           <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square border-2 border-dashed border-black flex items-center justify-center bg-gray-100"></div>
             <div className="aspect-square border-2 border-dashed border-black flex items-center justify-center bg-gray-100"></div>
           </div>
        </div>

        {/* Annotation */}
        <div className="absolute top-1/2 right-0 translate-x-2 bg-red-100 border-2 border-red-500 p-2 text-red-600 text-xs font-bold rotate-[-2deg] w-32 text-center shadow-lg">
          Too cluttered? Remove borders?
        </div>

      </div>

      {/* Bottom Actions Draft */}
      <div className="h-24 border-t-4 border-black bg-white p-4 flex items-center justify-center gap-4 relative z-10">
        <div className="h-12 flex-1 border-2 border-black bg-black text-white flex items-center justify-center font-bold text-lg shadow-[-4px_4px_0px_0px_rgba(100,100,100,1)]">
          BTN 1
        </div>
        <div className="h-12 flex-1 border-2 border-black bg-white text-black flex items-center justify-center font-bold text-lg shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
          BTN 2
        </div>
      </div>
    </div>
  );
}
