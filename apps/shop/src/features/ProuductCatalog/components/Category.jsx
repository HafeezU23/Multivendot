import React from 'react';
import { Link } from 'react-router';

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="bg-[#F0F0F0] rounded-[40px] px-6 py-10 md:px-16 md:py-16">
        <h2 className="text-[32px] md:text-[48px] font-black text-center mb-10 md:mb-16 uppercase tracking-wider text-black">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Electronics - 1/3 width on desktop */}
          <Link 
            to="/category?category=Electronics"
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-xl md:text-2xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Electronics
            </span>
            <img 
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Electronics" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          {/* Fashion - 2/3 width on desktop */}
          <Link 
            to={`/category?category=${encodeURIComponent('Fashion & Apparel')}`}
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 md:col-span-2 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-xl md:text-2xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Fashion & Apparel
            </span>
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Fashion & Apparel" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          {/* Home & Kitchen - 2/3 width on desktop */}
          <Link 
            to={`/category?category=${encodeURIComponent('Home & Kitchen')}`}
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 md:col-span-2 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-xl md:text-2xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Home & Kitchen
            </span>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Home & Kitchen" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          {/* Health & Beauty - 1/3 width on desktop */}
          <Link 
            to={`/category?category=${encodeURIComponent('Health & Beauty')}`}
            className="group relative h-[250px] md:h-[289px] rounded-3xl overflow-hidden bg-white col-span-1 block"
          >
            <span className="absolute top-6 left-6 md:left-8 z-10 text-xl md:text-2xl font-bold text-black bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-sm">
              Health & Beauty
            </span>
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Health & Beauty" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
