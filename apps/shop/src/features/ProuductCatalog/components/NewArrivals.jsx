import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../../redux/features/productSlice';
import Product from './Product';
import { useNavigate } from 'react-router';

const NewArrivals = () => {
  const navigate = useNavigate();
  const allProducts = useSelector(selectAllProducts);

  const handleShowMore = () => {
    navigate('/category?filter=new-arrivals');
  };

  // We don't have dateAdded in our dummyProducts. Let's just reverse the array
  const newestProducts = [...allProducts]
    .reverse()
    .slice(0, 5);

  const displayedProducts = newestProducts.map(p => ({
    ...p,
    name: p.title,
    imageUrl: p.images?.[0] || "",
    badge: "New Arrival"
  }));

  return (
    <section className="py-12 md:py-16 font-sans mx-4 md:mx-10 lg:mx-20 overflow-hidden">
      <div className="max-w-full">
        <h2 className="text-[28px] md:text-[40px] font-black text-center uppercase mb-8 md:mb-10 tracking-wider text-black">
          New Arrivals
        </h2>
        
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-4 md:gap-6 pb-6 snap-x snap-mandatory [-ms-overflow-style:none] scrollbar-none">
          {displayedProducts.map(product => (
            <div key={product.id} className="w-[80vw] sm:w-[45vw] md:w-[35vw] lg:w-auto shrink-0 snap-center lg:snap-align-none">
              <Product product={product} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 md:mt-10">
          <button 
            onClick={handleShowMore}
            className="border border-gray-200 text-black font-semibold text-sm md:text-base rounded-full py-3 px-12 hover:bg-gray-50 transition-colors"
          >
            View More
          </button>
        </div>
      </div>
      
      <div className="mt-12 md:mt-16 border-b border-gray-200 max-w-full mx-auto" />
    </section>
  );
};

export default NewArrivals;