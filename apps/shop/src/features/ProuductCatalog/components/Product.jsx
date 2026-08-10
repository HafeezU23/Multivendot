import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist, selectWishlistItems } from '../../../redux/features/wishlistSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const isWishlisted = wishlistItems.includes(product.id);
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-[#e9d014] w-3 h-3" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#e9d014] w-3 h-3" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 w-3 h-3" />);
      }
    }
    return stars;
  };

  const reviewCount = product.reviewCount || 0; 
  const rating = product.rating || 4.8;
  const displayTitle = product.name || product.title;
  const displayImage = product.imageUrl || (product.images && product.images[0]) || "";

  return (
    <Link to={`/product/${product.id}`} className="flex flex-col cursor-pointer bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 w-full h-full max-w-[280px] mx-auto group">
      
      {/* Top Image Section */}
      <div className="relative aspect-square w-full bg-linear-to-br from-[#A69ECB] to-[#7C73A6] overflow-hidden flex items-center justify-center ">
      
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-white/90 text-black text-[10px] font-black px-2.5 py-1 rounded-sm uppercase tracking-widest z-10 shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating to product detail
            dispatch(toggleWishlist(product.id));
          }}
          className="absolute top-4 right-4 bg-white/90 text-black p-2 rounded-full z-10 shadow-sm hover:bg-white hover:scale-110 transition-transform"
        >
          <FiHeart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Product Image */}
        {displayImage ? (
          <img 
            src={displayImage} 
            alt={displayTitle} 
            className="w-full h-full object-cover drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/70 text-sm font-medium">No Image</div>
        )}
      </div>
      
      {/* Bottom Content Section */}
      <div className="p-5 flex flex-col flex-1 bg-white rounded-t-2xl -mt-4 relative z-20">
        
        {/* Title */}
        <h3 className="text-base font-bold text-[#333333] leading-tight mb-2.5 line-clamp-1">
          {displayTitle}
        </h3>

        {/* Badges / Category / Brand */}
        <div className="flex flex-wrap gap-2 mb-3.5">
          {product.category && (
            <span className="text-[10px] font-bold text-gray-600 border border-gray-300 rounded px-2 py-0.5 uppercase tracking-wider">
              {product.category}
            </span>
          )}
          {product.brand && (
            <span className="text-[10px] font-bold text-gray-600 border border-gray-300 rounded px-2 py-0.5 uppercase tracking-wider">
              {product.brand}
            </span>
          )}
        </div>
        
        {/* Rating & Reviews */}
        <div className="flex items-center mb-5 text-sm text-gray-500">
          <div className="flex space-x-[2px] mr-2">
            {renderStars(rating)}
          </div>
          <span className="font-semibold text-gray-700 mr-1.5 text-[13px]">{rating}</span>
          <span className="text-xs"><p>({reviewCount})</p></span>
        </div>
        
        {/* Footer */}
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Price</span>
            <span className="text-xl font-black text-[#333333] leading-none tracking-tight">
              ${product.price?.toFixed(2) || product.price}
            </span>
          </div>
         
        </div>
      </div>
    </Link>
  );
};

export default Product;
