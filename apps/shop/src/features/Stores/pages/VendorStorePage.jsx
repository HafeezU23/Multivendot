import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '../../../redux/features/productSlice';
import { selectFollowedVendors, toggleFollowVendor } from '../../../redux/features/vendorSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Product from '../../ProuductCatalog/components/Product';
import { FiStar, FiUsers, FiCheck, FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const VendorStorePage = () => {
  const { vendorId } = useParams();
  const dispatch = useDispatch();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const allProducts = useSelector(selectAllProducts);
  const followedVendors = useSelector(selectFollowedVendors);

  // Extract products and vendor info
  const vendorProducts = useMemo(() => {
    return allProducts.filter(p => p.vendor?.vendorId === vendorId);
  }, [allProducts, vendorId]);

  const vendorInfo = vendorProducts.length > 0 ? vendorProducts[0].vendor : null;
  const isFollowing = followedVendors.includes(vendorId);

  // Simulate base followers deterministically from vendorId string
  const baseFollowers = useMemo(() => {
    if (!vendorId) return 0;
    let hash = 0;
    for (let i = 0; i < vendorId.length; i++) {
      hash = vendorId.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 10000) + 500; // Random number between 500 and 10500
  }, [vendorId]);

  const totalFollowers = baseFollowers + (isFollowing ? 1 : 0);

  if (!vendorInfo) {
    return (
      <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
        <Navbar />
        <div className="grow flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-3xl font-black mb-4">Store Not Found</h2>
          <p className="text-gray-500 mb-8">We couldn't find the vendor you're looking for.</p>
          <Link to="/stores" className="bg-black text-white px-8 py-3 rounded-full font-medium">Browse Stores</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      
      {/* Store Banner */}
      <div className="bg-white border-b border-gray-200 pt-10 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Store Logo Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full flex items-center justify-center text-5xl md:text-6xl font-black text-gray-300 shrink-0 border-4 border-white shadow-lg">
            {vendorInfo.storeName.charAt(0)}
          </div>
          
          <div className="grow text-center md:text-left flex flex-col md:block items-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">{vendorInfo.storeName}</h1>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-6">
              <div className="bg-green-50 text-green-700 flex items-center gap-1 px-3 py-1.5 rounded-full font-bold">
                <FiStar className="fill-green-700" />
                {vendorInfo.rating} Rating
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <FiUsers className="w-5 h-5 text-gray-400" />
                <span>{totalFollowers.toLocaleString()} Followers</span>
              </div>
              <div className="text-gray-500 font-medium">
                • {vendorProducts.length} Products
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-auto flex items-center gap-3">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-3.5 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-sm cursor-pointer bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"
            >
              <FiMessageSquare className="w-5 h-5" /> Chat
            </button>
            <button 
              onClick={() => dispatch(toggleFollowVendor(vendorId))}
              className={`px-8 py-3.5 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-sm cursor-pointer ${
                isFollowing 
                  ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800 hover:shadow-md'
              }`}
            >
              {isFollowing ? (
                <>
                  <FiCheck className="w-5 h-5" /> Following
                </>
              ) : (
                '+ Follow Store'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Store Products */}
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-12 grow">
        <h2 className="text-2xl font-black uppercase mb-8">All Products</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vendorProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
      
      <Footer />
      
      {/* Floating Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="font-bold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              {vendorInfo.storeName}
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              <FiX className="w-5 h-5" />
            </button>
          </div>
          {/* Chat Messages Area */}
          <div className="h-72 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            <div className="text-center text-xs text-gray-400 my-2">Today</div>
            <div className="self-start bg-gray-200 text-black px-4 py-2 rounded-2xl rounded-tl-sm text-sm max-w-[80%]">
              Hi there! Thanks for visiting our store. How can we help you today?
            </div>
          </div>
          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200 bg-white flex items-center gap-2">
            <input type="text" placeholder="Type a message..." className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5" />
            <button className="bg-black text-white p-2.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <FiSend className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorStorePage;
