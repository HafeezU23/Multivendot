import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '../../../redux/productSlice';
import { addToCart, selectCartItems } from '../../../redux/cartSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Product from '../components/Product';

const COLOR_MAP = {
  Red: '#ef4444', Blue: '#3b82f6', Green: '#22c55e', Yellow: '#eab308',
  Black: '#000000', White: '#ffffff', Purple: '#a855f7', Orange: '#f97316', Pink: '#ec4899', Brown: '#92400e'
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const cartItems = useSelector(selectCartItems);
  
  const product = allProducts.find(p => p.id === id);
  
  // Find related products (same category, exclude current)
  const relatedProducts = allProducts
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const [activeImage, setActiveImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('reviews');

  // Compute cartItemId based on current selections
  const cartItemId = product ? `${product.id}-${selectedColor || 'none'}-${selectedSize || 'none'}` : null;
  const isAlreadyInCart = cartItems.some(item => item.cartItemId === cartItemId);

  // Initialize defaults when product loads
  useEffect(() => {
    if (product) {
      if (product.color?.length > 0) setSelectedColor(product.color[0]);
      if (product.size?.length > 0) setSelectedSize(product.size[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="grow flex items-center justify-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  // Calculate mock original price for UI purposes to show a discount badge like the screenshot
  const originalPrice = (product.price * 1.2).toFixed(2);
  const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
      } else if (i === fullStars && hasHalfStar) {
        // Use a full star with lower opacity to represent half star for simplicity
        stars.push(<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" opacity="0.5" /></svg>);
      } else {
        stars.push(<svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-6 grow">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 flex gap-2 items-center">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>&gt;</span>
          <Link to="/category" className="hover:text-black">Shop</Link>
          <span>&gt;</span>
          <Link to={`/category?category=${encodeURIComponent(product.category)}`} className="hover:text-black">{product.category}</Link>
          <span>&gt;</span>
          <span className="text-black font-medium line-clamp-1">{product.title}</span>
        </div>

        {/* Product Overview Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-16">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:w-1/2">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
              {[1, 2, 3].map((num) => (
                <div key={num} className="w-24 h-24 lg:w-36 lg:h-36 rounded-2xl overflow-hidden bg-[#F0EEED] shrink-0 cursor-pointer border-2 border-transparent hover:border-black transition-colors">
                  <img src={product.images[0]} alt="thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="w-full aspect-square rounded-4xl overflow-hidden bg-[#F0EEED] flex items-center justify-center">
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Product Info & Configurator */}
          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-black uppercase mb-3 leading-tight">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm font-medium">{product.rating}/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              <span className="text-3xl font-bold text-gray-300 line-through">${originalPrice}</span>
              <span className="bg-red-100 text-red-500 font-medium px-3 py-1 rounded-full text-sm">-{discountPercent}%</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              {product.description} This product is perfect for any occasion. Crafted from premium materials, it offers superior comfort and style.
            </p>

            <div className="border-t border-gray-200 mb-6"></div>

            {/* Select Colors */}
            {product.color && product.color.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Select Colors</h3>
                <div className="flex gap-4">
                  {product.color.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className="w-10 h-10 rounded-full flex items-center justify-center focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                      style={{ backgroundColor: COLOR_MAP[color] || color.toLowerCase() }}
                    >
                      {selectedColor === color && (
                        <svg className={`w-5 h-5 ${color === 'White' || color === 'Yellow' ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.color && product.color.length > 0 && <div className="border-t border-gray-200 mb-6"></div>}

            {/* Choose Size */}
            {product.size && product.size.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Choose Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.size.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-gray-600 hover:bg-gray-200'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.size && product.size.length > 0 && <div className="border-t border-gray-200 mb-6"></div>}

            {/* Actions: Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="bg-[#F0F0F0] rounded-full flex items-center px-4 py-3 w-1/3 max-w-[150px] justify-between">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-2xl font-medium cursor-pointer focus:outline-none">-</button>
                <span className="font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-2xl font-medium cursor-pointer focus:outline-none">+</button>
              </div>
              <button 
                disabled={isAlreadyInCart}
                onClick={() => {
                  dispatch(addToCart({
                    product,
                    quantity,
                    selectedColor,
                    selectedSize
                  }));
                }}
                className={`flex-1 rounded-full font-medium py-3 transition-colors shadow-sm ${
                  isAlreadyInCart 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                }`}
              >
                {isAlreadyInCart ? 'Already in Cart' : 'Add to Cart'}
              </button>
            </div>

          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-8">
          <div className="flex border-b border-gray-200 overflow-x-auto custom-scrollbar">
            <button 
              className={`flex-1 py-4 px-6 text-center font-medium text-base sm:text-lg transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'details' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setActiveTab('details')}
            >
              Product Details
            </button>
            <button 
              className={`flex-1 py-4 px-6 text-center font-medium text-base sm:text-lg transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'reviews' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Rating & Reviews
            </button>
          </div>
        </div>

        {/* Tab Content: Reviews */}
        {activeTab === 'reviews' && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                All Reviews <span className="text-sm font-normal text-gray-500 mt-1">({product.reviews?.length || 0})</span>
              </h2>
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="bg-[#F0F0F0] p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer hidden sm:block">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </button>
                <div className="bg-[#F0F0F0] px-4 py-3 rounded-full flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-200 transition-colors flex-1 sm:flex-none">
                  <span className="font-medium text-sm">Latest</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors cursor-pointer flex-1 sm:flex-none whitespace-nowrap">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {product.reviews?.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-1 text-yellow-400">
                      {renderStars(review.rating)}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-bold text-lg">{review.user}</h4>
                    {review.verified && (
                      <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 mb-4 text-sm sm:text-base leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-gray-400 text-sm font-medium">
                    Posted on {review.date}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <button className="border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                Load More Reviews
              </button>
            </div>
          </div>
        )}
        
        {/* Product Details Tab */}
        {activeTab === 'details' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Product Specifications</h3>
            {product.productDetails && product.productDetails.length > 0 ? (
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg">
                {product.productDetails.map((detail, idx) => (
                  <li key={idx}>
                    {detail.split(':').length > 1 ? (
                      <>
                        <span className="font-bold text-black">{detail.split(':')[0]}:</span> 
                        {detail.substring(detail.indexOf(':') + 1)}
                      </>
                    ) : (
                      detail
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No specific details available for this product.</p>
            )}
          </div>
        )}

        {/* You Might Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-10">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {relatedProducts.map(related => (
                <Product key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}

      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
