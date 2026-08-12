import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Pencil as PencilIcon, Trash2 as TrashBinIcon, Plus as PlusIcon, Filter, ChevronDown, Check } from "lucide-react";

const allProducts = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: "$49.99", stock: 120, orders: 450, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 2, name: "Smart Watch Series 8", category: "Wearables", price: "$199.00", stock: 45, orders: 120, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  { id: 3, name: "Gaming Mouse RGB", category: "Accessories", price: "$29.50", stock: 300, orders: 890, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
  { id: 4, name: "Mechanical Keyboard", category: "Accessories", price: "$89.99", stock: 15, orders: 340, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
  { id: 5, name: "4K Web Camera", category: "Electronics", price: "$59.99", stock: 0, orders: 67, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" },
  { id: 6, name: "Bluetooth Speaker", category: "Electronics", price: "$39.99", stock: 50, orders: 230, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80" },
  { id: 7, name: "USB-C Hub Multiport", category: "Accessories", price: "$24.99", stock: 80, orders: 560, image: "https://images.unsplash.com/photo-1531297121223-9c87d464fbce?w=500&q=80" },
  { id: 8, name: "Fast Wireless Charger", category: "Accessories", price: "$19.99", stock: 200, orders: 410, image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80" },
];

export default function AllProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (filterOption === "In Stock") {
    filteredProducts = filteredProducts.filter(product => product.stock > 0);
  } else if (filterOption === "Out of Stock") {
    filteredProducts = filteredProducts.filter(product => product.stock === 0);
  } else if (filterOption === "Electronics" || filterOption === "Accessories" || filterOption === "Wearables") {
    filteredProducts = filteredProducts.filter(product => product.category === filterOption);
  } else if (filterOption === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
  } else if (filterOption === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
  } else if (filterOption === "Top Selling") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.orders - a.orders);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 sm:px-6 sm:pt-6 w-full flex flex-col h-[600px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-gray-200 dark:border-gray-800 gap-4 flex-shrink-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            All Products
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your store inventory
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-auto mt-2 sm:mt-0 group">
              <input 
                type="text" 
                placeholder="Product Title" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-11 pr-4 py-2.5 text-sm bg-white/50 backdrop-blur-md border border-gray-200/80 rounded-[27px] shadow-sm transition-all duration-300 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 hover:border-brand-300 hover:shadow-md dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:bg-gray-800 dark:hover:border-brand-600"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Modern Custom Filter Dropdown */}
            <div className="relative w-full sm:w-auto mt-2 sm:mt-0" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full sm:w-auto min-w-[180px] flex items-center justify-between gap-3 px-5 py-2.5 text-sm font-medium bg-white/60 backdrop-blur-lg border border-gray-200/80 rounded-[27px] shadow-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-500/10 hover:border-brand-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:hover:border-brand-500 active:scale-95"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-brand-500" />
                  <span className="text-gray-700 dark:text-gray-200">
                    {filterOption === "All" ? "Filter & Sort" : filterOption}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isFilterOpen ? 'rotate-180 text-brand-500' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 sm:left-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl dark:bg-gray-900/95 dark:border-gray-800 overflow-hidden transform transition-all duration-300 origin-top-left z-50 ${isFilterOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <div className="p-2 max-h-[350px] overflow-y-auto custom-scrollbar">
                  {[
                    { group: "Status", options: ["All", "In Stock", "Out of Stock"] },
                    { group: "Sort By", options: ["Price: Low to High", "Price: High to Low", "Top Selling"] },
                    { group: "Category", options: ["Electronics", "Accessories", "Wearables"] }
                  ].map((section, idx) => (
                    <div key={section.group} className={`${idx !== 0 ? 'mt-2 pt-2 border-t border-gray-100 dark:border-gray-800' : ''}`}>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 px-3">{section.group}</h4>
                      <div className="space-y-0.5">
                        {section.options.map(opt => (
                          <button
                            key={opt}
                            onClick={() => { setFilterOption(opt); setIsFilterOpen(false); }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl transition-all duration-200 ${filterOption === opt ? 'bg-brand-50 text-brand-600 font-medium dark:bg-brand-500/10 dark:text-brand-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50'}`}
                          >
                            {opt}
                            {filterOption === opt && <Check className="w-4 h-4" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link 
            to="/upload-product" 
            className="group flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 w-full sm:w-auto"
          >
            <span>Upload Product</span>
          </Link>
        </div>
      </div>

      {/* Scrollable Products Grid */}
      <div className="flex-1 overflow-y-auto mt-6 pr-2 custom-scrollbar transition-all duration-300 ease-in-out">
        {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center h-48 text-gray-500 dark:text-gray-400 font-medium transition-all duration-300 ease-in-out">
                No Result Found
            </div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 transition-all duration-300 ease-in-out">
                {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-theme-sm hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-700/50 dark:hover:shadow-brand-500/5 transition-all duration-300 ease-in-out"
            >
              {/* Product Image & Info wrapped in Link */}
              <Link to={`/product/${product.id}`} className="block flex-1 cursor-pointer">
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <p className="text-xs font-medium text-brand-500 mb-1">{product.category}</p>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 line-clamp-1 mb-2">
                    {product.name}
                  </h4>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                    <span className="text-base font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500' : 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500'}`}>
                      {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Actions */}
              <div className="flex flex-col xl:flex-row gap-2 mt-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link 
                  to={`/edit-product?id=${product.id}`}
                  className="flex-1 flex justify-center items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-brand-500 dark:hover:border-brand-500 transition-all duration-300"
                >
                  <PencilIcon className="size-3.5" />
                  Edit
                </Link>
                <button 
                  className="flex-1 flex justify-center items-center gap-1.5 rounded-lg border border-error-100 bg-error-50 px-3 py-2 text-xs font-medium text-error-600 hover:bg-error-500 hover:text-white hover:border-error-500 hover:-translate-y-0.5 hover:shadow-md dark:border-error-500/20 dark:bg-error-500/10 dark:text-error-500 dark:hover:bg-error-500 dark:hover:text-white transition-all duration-300"
                >
                  <TrashBinIcon className="size-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
