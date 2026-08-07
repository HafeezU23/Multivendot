import React from 'react';

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="bg-[#F0F0F0] rounded-[40px] px-6 py-10 md:px-16 md:py-16">
        <h2 className="text-[32px] md:text-[48px] font-black text-center mb-10 md:mb-16 uppercase tracking-wider text-black">
          Browse by dress style
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Casual - 1/3 width on desktop */}
          <a 
            href="#" 
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-2xl md:text-3xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Casual
            </span>
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Casual Style" 
              className="w-full h-full object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
            />
          </a>
          
          {/* Formal - 2/3 width on desktop */}
          <a 
            href="#" 
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 md:col-span-2 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-2xl md:text-3xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Formal
            </span>
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Formal Style" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </a>
          
          {/* Party - 2/3 width on desktop */}
          <a 
            href="#" 
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 md:col-span-2 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-2xl md:text-3xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Party
            </span>
            <img 
              src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Party Style" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </a>
          
          {/* Gym - 1/3 width on desktop */}
          <a 
            href="#" 
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-2xl md:text-3xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Gym
            </span>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gym Style" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Category;
