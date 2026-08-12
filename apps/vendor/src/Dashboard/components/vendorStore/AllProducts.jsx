import React from "react";
import { Link } from "react-router";
import { Pencil as PencilIcon, Trash2 as TrashBinIcon, Plus as PlusIcon } from "lucide-react";

const allProducts = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: "$49.99", stock: 120, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 2, name: "Smart Watch Series 8", category: "Wearables", price: "$199.00", stock: 45, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  { id: 3, name: "Gaming Mouse RGB", category: "Accessories", price: "$29.50", stock: 300, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
  { id: 4, name: "Mechanical Keyboard", category: "Accessories", price: "$89.99", stock: 15, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
  { id: 5, name: "4K Web Camera", category: "Electronics", price: "$59.99", stock: 0, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" },
  { id: 6, name: "Bluetooth Speaker", category: "Electronics", price: "$39.99", stock: 50, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80" },
  { id: 7, name: "USB-C Hub Multiport", category: "Accessories", price: "$24.99", stock: 80, image: "https://images.unsplash.com/photo-1531297121223-9c87d464fbce?w=500&q=80" },
  { id: 8, name: "Fast Wireless Charger", category: "Accessories", price: "$19.99", stock: 200, image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80" },
];

export default function AllProducts() {
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
        
        <Link 
          to="/upload-product" 
          className="group flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
        >
          <span>Upload Product</span>
        </Link>
      </div>

      {/* Scrollable Products Grid */}
      <div className="flex-1 overflow-y-auto mt-6 pr-2 custom-scrollbar">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {allProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-theme-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-700/50 dark:hover:shadow-brand-500/5"
            >
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
      </div>
    </div>
  );
}
