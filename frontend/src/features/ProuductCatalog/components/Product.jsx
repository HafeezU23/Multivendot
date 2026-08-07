import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Product = ({ product }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-[#FFC633] w-4 h-4 md:w-[18px] md:h-[18px]" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#FFC633] w-4 h-4 md:w-[18px] md:h-[18px]" />);
      } else {
        // We can add empty stars here if needed, but standard design usually just shows the filled/half ones
        // stars.push(<FaStar key={i} className="text-gray-300 w-4 h-4 md:w-[18px] md:h-[18px]" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col cursor-pointer group">
      {/* Image container */}
      <div className="bg-[#F0EEED] rounded-[20px] aspect-square flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <div className="w-full h-full bg-[#F0EEED] mix-blend-multiply" />
        )}
      </div>
      
      {/* Details */}
      <h3 className="text-base md:text-xl font-bold mt-4 text-black truncate">{product.name}</h3>
      
      <div className="flex items-center mt-1 md:mt-2 space-x-2">
        <div className="flex space-x-[2px]">
          {renderStars(product.rating)}
        </div>
        <span className="text-xs md:text-sm text-black font-medium">
          {product.rating}<span className="text-gray-500">/5</span>
        </span>
      </div>
      
      <div className="flex items-center mt-1 md:mt-2 space-x-3">
        <span className="text-xl md:text-2xl font-bold text-black">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xl md:text-2xl font-bold text-gray-400 line-through">
            ${product.originalPrice}
          </span>
        )}
        {product.discount && (
          <span className="bg-[#FF3333]/10 text-[#FF3333] text-[10px] md:text-xs font-medium px-2 py-1 md:px-3 rounded-full">
            -{product.discount}%
          </span>
        )}
      </div>
    </div>
  );
};

export default Product;
