import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../../redux/features/productSlice';
import Product from './Product';
import { useNavigate } from 'react-router';

const TopSelling = () => {
  const navigate = useNavigate();
  const allProducts = useSelector(selectAllProducts);

  const handleShowMore = () => {
    navigate('/category?filter=top-selling');
  };

  // Sort by reviewCount as proxy for top selling since we have it
  const topSellingProducts = [...allProducts]
    .sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
    .slice(0, 5);

  const displayedProducts = topSellingProducts.map(p => ({
    ...p,
    name: p.title,
    imageUrl: p.images?.[0] || "",
    badge: "Top Selling"
  }));

  return (
    <section className="py-12 md:py-16 font-sans mx-4 md:mx-10 lg:mx-20 overflow-hidden">
      <div className="max-w-full">
        <h2 className="text-[28px] md:text-[40px] font-black text-center uppercase mb-8 md:mb-10 tracking-wider text-black">
          Top Selling
        </h2>
        
        {/* Horizontal scroll on mobile/tablet, Grid on lg */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-4 md:gap-6 pb-6 snap-x snap-mandatory  [-ms-overflow-style:none] scrollbar-none">
          {displayedProducts.map(product => (
            <div key={product.id} className="w-[80vw] sm:w-[45vw] md:w-[35vw] lg:w-auto shrink-0 snap-center lg:snap-align-none">
              <Product product={product} onClick={() => navigate(`/product/${product.id}`)} />
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
    </section>
  );
};

export default TopSelling;
