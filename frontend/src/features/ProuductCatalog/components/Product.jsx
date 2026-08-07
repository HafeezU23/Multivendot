import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const Product = ({ product }) => {
  // Function to render stars based on rating in monochrome
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-black w-3 h-3 md:w-3.5 md:h-3.5" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-black w-3 h-3 md:w-3.5 md:h-3.5" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 w-3 h-3 md:w-3.5 md:h-3.5" />);
      }
    }
    return stars;
  };

  const reviewCount = product.reviewCount || 0; 

  // Calculate discount if originalPrice exists
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  return (
    <div className="flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden border border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-300">
      
      {/* Top Image Section */}
      <div className="relative aspect-square w-full border-b border-black overflow-hidden bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
        {/* Product Image */}
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-multiply hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm font-medium">No Image</div>
        )}
      </div>
      
      {/* Bottom Content Section */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        {/* Category & Brand */}
        {(product.category || product.brand) && (
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
            {[product.category, product.brand].filter(Boolean).join(' · ')}
          </p>
        )}        {/* Title */}
        <h3 className="text-sm md:text-base font-bold text-black leading-snug mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-[2px] mr-2">
            {renderStars(product.rating || 4.8)}
          </div>
          <span className="text-black font-bold text-xs md:text-sm mr-1.5">{product.rating || 4.8}</span>
          <span className="text-gray-500 text-xs md:text-sm">({reviewCount} reviews)</span>
        </div>
        
        {/* Divider */}
        <div className="border-t border-black mb-4"></div>
        
        {/* Price and Cart Row */}
        <div className="flex items-end justify-between mb-4">
          <div className="flex flex-col">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl md:text-3xl font-black text-black">${product.price?.toFixed(2) || product.price}</span>
              {product.originalPrice && (
                <span className="text-sm font-bold text-gray-400 line-through">
                  ${product.originalPrice?.toFixed(2) || product.originalPrice}
                </span>
              )}
            </div>
            {/* Discount Badge */}
           
          </div>

  
        </div>
        
        {/* Status */}
        <div className="flex items-center mt-auto pt-1">
          <div className={`w-2 h-2 rounded-full mr-2 ${product.stock > 0 ? 'bg-black' : 'bg-red-500'}`}></div>
          <span className="text-gray-600 font-bold text-xs">
            {product.stock > 0 ? `In stock (${product.stock}) · Free delivery by tomorrow` : 'Out of stock'}
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Product;
