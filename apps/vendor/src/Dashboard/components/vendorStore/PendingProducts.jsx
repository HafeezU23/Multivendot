import { useState } from "react";
import Badge from "../ui/badge/Badge";

const pendingProducts = [
  { id: 1, name: "Wireless Headphones", date: "12 Oct 2026", price: "$49.99", image: "/images/product/product-01.jpg" },
  { id: 2, name: "Smart Watch Series 8", date: "11 Oct 2026", price: "$199.00", image: "/images/product/product-02.jpg" },
  { id: 3, name: "Gaming Mouse RGB", date: "10 Oct 2026", price: "$29.50", image: "/images/product/product-03.jpg" },
  { id: 4, name: "Mechanical Keyboard", date: "09 Oct 2026", price: "$89.99", image: "/images/product/product-04.jpg" },
  { id: 5, name: "4K Web Camera", date: "08 Oct 2026", price: "$59.99", image: "/images/product/product-05.jpg" },
  { id: 6, name: "Bluetooth Speaker", date: "07 Oct 2026", price: "$39.99", image: "/images/product/product-01.jpg" },
 { id: 8, name: "Wireless Charger", date: "05 Oct 2026", price: "$19.99", image: "/images/product/product-03.jpg" },
];

export default function PendingProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = pendingProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 sm:px-6 sm:pt-6 h-full flex flex-col">
      <div className="flex flex-col xl:flex-row xl:items-center gap-3 justify-between pb-4 border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Pending Products
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Awaiting admin approval
          </p>
        </div>
        <div className="relative w-full xl:w-auto mt-2 xl:mt-0 group">
          <input 
            type="text" 
            placeholder="Product Title" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full xl:w-64 pl-11 pr-4 py-2.5 text-sm bg-white/50 backdrop-blur-md border border-gray-200/80 rounded-[27px] shadow-sm transition-all duration-300 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 hover:border-brand-300 hover:shadow-md dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:bg-gray-800 dark:hover:border-brand-600"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mt-4 space-y-6 pr-2 custom-scrollbar transition-all duration-300 ease-in-out">
        {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center h-48 text-gray-500 dark:text-gray-400 font-medium transition-all duration-300 ease-in-out">
                No Result Found
            </div>
        ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4 transition-all duration-300 ease-in-out">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                   <h4 className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">{product.name}</h4>
                   <p className="text-xs text-gray-500 dark:text-gray-400">{product.date} • {product.price}</p>
                </div>
                <div className="text-right flex-shrink-0">
                   <Badge color="warning">Pending</Badge>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}