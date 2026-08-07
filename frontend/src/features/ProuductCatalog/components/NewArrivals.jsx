import React, { useState } from 'react';
import Product from './Product';

// Dummy data array for products that will be replaced later
const DUMMY_PRODUCTS = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  name: i % 4 === 0 ? "T-shirt with Tape Details" : 
        i % 4 === 1 ? "Skinny Fit Jeans" :
        i % 4 === 2 ? "Checkered Shirt" : "Sleeve Striped T-shirt",
  rating: [4.5, 3.5, 4.5, 4.5][i % 4],
  price: [120, 240, 180, 130][i % 4],
  originalPrice: [null, 260, null, 160][i % 4],
  discount: [null, 20, null, 30][i % 4],
  imageUrl: "" 
}));

const NewArrivals = () => {
  const [visibleCount, setVisibleCount] = useState(20);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 20);
  };

  const displayedProducts = DUMMY_PRODUCTS.slice(0, visibleCount);

  return (
    <section className="py-12 md:py-16 font-sans">
      <div className="max-w-full">
        <h2 className="text-[32px] md:text-[48px] font-black text-center uppercase mb-8 md:mb-14 tracking-wider text-black">
          New Arrivals
        </h2>
        
        {/* Grid: 4 per row on lg, 3 per row on md, 2 on sm */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {displayedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        
        {visibleCount < DUMMY_PRODUCTS.length && (
          <div className="flex justify-center mt-10 md:mt-14">
            <button 
              onClick={handleShowMore}
              className="border border-gray-200 text-black font-medium text-sm md:text-base rounded-full py-3 md:py-4 px-16 md:px-20 hover:bg-gray-50 transition-colors"
            >
              View All
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