import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../../redux/productSlice';
import Product from './Product';

const NewArrivals = () => {
  const [visibleCount, setVisibleCount] = useState(20);
  
  const allProducts = useSelector(selectAllProducts);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 20);
  };

  // Map the redux data to match the format expected by the Product component
  const displayedProducts = allProducts.slice(0, visibleCount).map(p => ({
    ...p,
    name: p.title,
    imageUrl: p.images?.[0] || "",
  }));

  return (
    <section className="py-12 md:py-16 font-sans mx-20">
      <div className="max-w-full">
        <h2 className="text-[32px] md:text-[48px] font-black text-center uppercase mb-8 md:mb-14 tracking-wider text-black">
          New Arrivals
        </h2>
        
        {/* Grid: 5 per row on lg, 4 per row on md, 3 on sm, 2 on xs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {displayedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        
        {visibleCount < allProducts.length && (
          <div className="flex justify-center mt-10 md:mt-14">
            <button 
              onClick={handleShowMore}
              className="border border-gray-200 text-black font-medium text-sm md:text-base rounded-full py-3 md:py-4 px-16 md:px-20 hover:bg-gray-50 transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
      
      {/* Bottom separator line */}
      <div className="mt-12 md:mt-16 border-b border-gray-200 max-w-full mx-auto" />
    </section>
  );
};

export default NewArrivals;