import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectAllProducts } from '../../../redux/features/productSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FiSearch, FiStar, FiShoppingBag, FiArrowRight } from 'react-icons/fi';

const StoresPage = () => {
  const allProducts = useSelector(selectAllProducts);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique vendors and their product counts
  const vendors = useMemo(() => {
    const vendorMap = {};
    allProducts.forEach(product => {
      if (product.vendor) {
        const { vendorId, storeName, rating } = product.vendor;
        if (!vendorMap[vendorId]) {
          vendorMap[vendorId] = {
            vendorId,
            storeName,
            rating,
            productCount: 0
          };
        }
        vendorMap[vendorId].productCount += 1;
      }
    });
    return Object.values(vendorMap);
  }, [allProducts]);

  // Filter vendors based on search query
  const filteredVendors = useMemo(() => {
    if (!searchQuery.trim()) return vendors;
    const query = searchQuery.toLowerCase();
    return vendors.filter(v => v.storeName.toLowerCase().includes(query));
  }, [vendors, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-10 grow">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2">Our Stores</h1>
            <p className="text-gray-500">Discover incredible products from our trusted vendors.</p>
          </div>
          
          <div className="w-full md:w-96 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for a store..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
            />
          </div>
        </div>

        {/* Vendors Grid */}
        {filteredVendors.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <h3 className="text-xl font-bold mb-2">No stores found</h3>
            <p className="text-gray-500">We couldn't find any stores matching "{searchQuery}".</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-black border border-black rounded-full px-6 py-2 font-medium hover:bg-gray-50 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVendors.map(vendor => (
              <div key={vendor.vendorId} className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                
                {/* Logo */}
                <div className="w-14 h-14 rounded-[16px] border border-gray-200 bg-white shadow-sm flex items-center justify-center text-2xl font-bold text-black mb-5">
                  {vendor.storeName.charAt(0)}
                </div>
                
                {/* Category & Title */}
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5 mb-1.5">
                  <div className="w-3 h-3 rounded-sm border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  </div>
                  STORE
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black leading-tight truncate">{vendor.storeName}</h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                  Curated products and high-quality gear from our trusted premium vendor.
                </p>
                
                {/* Metrics Boxes */}
                <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                  <div className="border border-gray-200 rounded-xl p-3.5 flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider mb-1">Rating</span>
                    <span className="text-lg font-bold flex items-center gap-1 text-black">
                      <span className="text-yellow-400">★</span> {vendor.rating}
                    </span>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-3.5 flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider mb-1">Products</span>
                    <span className="text-lg font-bold text-black">{vendor.productCount}</span>
                  </div>
                </div>
                
                {/* Button */}
                <Link 
                  to={`/store/${vendor.vendorId}`}
                  className="w-full bg-black text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Visit store
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default StoresPage;
