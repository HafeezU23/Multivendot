import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Edit2, Star, Maximize2, Feather, Layers, ShieldCheck, Zap, Truck, RefreshCcw, Lock } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  
  // Mock data fitting the new premium layout
  const product = {
    id: id || 1,
    name: "Airion Pro X1",
    subtitle: "Performance Sneaker for Everyday Innovators",
    category: "Footwear / Sneakers",
    price: "$129.00",
    originalPrice: "$159.00",
    discount: "-19%",
    stock: 120,
    rating: "4.8",
    reviews: 128,
    uploadedBy: "PlayTime",
    intro: "Engineered for comfort. Designed to perform. Airion Pro X1 delivers lightweight support, superior cushioning, and modern street-ready style.",
    description: "Experience the next level of footwear innovation. The Airion Pro X1 features a breathable mesh upper that adapts to your foot, while the signature air-foam midsole provides unparalleled energy return with every step. Whether you're navigating city streets or hitting the gym, the reinforced durable outsole ensures maximum traction and longevity. Every detail, from the ergonomic heel counter to the premium stitching, has been meticulously crafted to provide a perfect blend of performance and aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80", 
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80"
    ],
    features: [
      { icon: <Feather className="w-5 h-5 text-gray-700 dark:text-gray-300" />, title: "Lightweight", desc: "Breathable mesh for all-day comfort" },
      { icon: <Layers className="w-5 h-5 text-gray-700 dark:text-gray-300" />, title: "Cushioning", desc: "Air-foam midsole for responsive support" },
      { icon: <ShieldCheck className="w-5 h-5 text-gray-700 dark:text-gray-300" />, title: "Durable Outsole", desc: "Grip pattern for better traction" },
      { icon: <Zap className="w-5 h-5 text-gray-700 dark:text-gray-300" />, title: "Premium Materials", desc: "High-quality build that lasts" }
    ]
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="w-full max-w-[1400px] mx-auto min-h-screen pb-16 px-3 pt-4 bg-white dark:bg-gray-950 font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100 dark:border-gray-800">
         <div className="flex items-center gap-4">
           <Link 
             to="/store" 
             className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
           >
             <ArrowLeft className="w-5 h-5" />
           </Link>
           <div>
             <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Vendor Dashboard</h2>
             <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Product Overview / {product.name}</p>
           </div>
         </div>
         <Link 
           to={`/edit-product?id=${product.id}`} 
           className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all active:scale-95 shadow-sm"
         >
            <Edit2 className="w-4 h-4" />
            <span>Edit Product</span>
         </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
        
        {/* Left Column: Image Gallery & Features (Col span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 h-auto sm:h-[600px]">
             {/* Vertical Thumbnails */}
             <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto custom-scrollbar hide-scrollbar py-1">
               {product.images.map((img, idx) => (
                 <button 
                   key={idx} 
                   onClick={() => setActiveImage(img)}
                   className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden transition-all duration-200 bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 ${
                     activeImage === img 
                       ? 'ring-2 ring-brand-500 border border-transparent' 
                       : 'border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 opacity-70 hover:opacity-100'
                   }`}
                 >
                   <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover rounded-xl" />
                 </button>
               ))}
               {/* "+2" Placeholder indicator to match the design */}
               <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity border border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 text-sm">+2</span>
               </div>
             </div>
             
             {/* Main Image View */}
             <div className="relative flex-1 rounded-3xl overflow-hidden bg-[#F8F9FA] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center group">
               {/* Expand Icon */}
               <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-500 hover:bg-white transition-colors z-10 shadow-sm">
                  <Maximize2 className="w-5 h-5" />
               </button>
               
               <img 
                 src={activeImage} 
                 alt={product.name}
                 className="w-[85%] h-[85%] object-contain transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
               />

               {/* Carousel Dots */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                 {product.images.map((img, idx) => (
                   <div 
                     key={idx} 
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${activeImage === img ? 'bg-brand-500 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                   />
                 ))}
               </div>
             </div>
          </div>

          {/* Features Under Image */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
             {product.features.map((feat, idx) => (
               <div key={idx} className="flex flex-col gap-2">
                 <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl mb-1 text-gray-700 dark:text-gray-300">
                   {feat.icon}
                 </div>
                 <h4 className="text-sm font-bold text-gray-900 dark:text-white">{feat.title}</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{feat.desc}</p>
               </div>
             ))}
          </div>
          
        </div>

        {/* Right Column: Product Info (Col span 5, Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col font-sans">
           
           {/* Title Section */}
           <div className="mb-6">
             <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-2">
               {product.name}
             </h1>
             <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
               {product.subtitle}
             </p>
           </div>

           {/* Rating */}
           <div className="flex items-center gap-2 mb-6">
             <div className="flex items-center text-brand-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
             </div>
             <span className="font-bold text-gray-900 dark:text-white ml-1">{product.rating}</span>
             <span className="text-sm text-gray-500 dark:text-gray-400 underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-gray-900">
               ({product.reviews} reviews)
             </span>
           </div>

           {/* Price */}
           <div className="flex items-center gap-4 mb-6">
             <span className="text-4xl font-black text-black dark:text-white tracking-tight">
               {product.price}
             </span>
             {product.originalPrice && (
               <span className="text-xl text-gray-400 line-through font-medium">
                 {product.originalPrice}
               </span>
             )}
             {product.discount && (
               <span className="px-2 py-1 text-xs font-bold text-brand-600 bg-brand-50 dark:bg-brand-500/10 dark:text-brand-400 rounded-md">
                 {product.discount}
               </span>
             )}
           </div>

           {/* Intro */}
           <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
             {product.intro}
           </p>

           <hr className="border-gray-100 dark:border-gray-800 mb-8" />

           {/* Detail Description Section (Replacing Cart) */}
           <div className="mb-8">
             <h3 className="text-lg font-bold text-black dark:text-white mb-4">Detailed Description</h3>
             <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
               <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                 {product.description}
               </p>
             </div>
           </div>

           {/* Trust Badges (Shipping, Returns, Secure) */}
           <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
             <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white">Free Shipping</h5>
                  <p className="text-[10px] text-gray-500">On orders over $99</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <RefreshCcw className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white">Easy Returns</h5>
                  <p className="text-[10px] text-gray-500">30-day returns</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white">Secure Payment</h5>
                  <p className="text-[10px] text-gray-500">100% secure checkout</p>
                </div>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
}
