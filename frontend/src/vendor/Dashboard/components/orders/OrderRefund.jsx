import React from "react";

const refundRequests = [
  {
    id: 1,
    product: {
      name: "Wireless Noise-Cancelling Headphones",
      image: "/images/product/product-01.jpg"
    },
    customer: {
      email: "sarah.jenkins@example.com",
      image: "/images/user/user-17.jpg"
    }
  },
  {
    id: 2,
    product: {
      name: "Smart Home Hub 2.0",
      image: "/images/product/product-02.jpg"
    },
    customer: {
      email: "mark.t@example.com",
      image: "/images/user/user-18.jpg"
    }
  },
  {
    id: 3,
    product: {
      name: "Ergonomic Office Chair",
      image: "/images/product/product-03.jpg"
    },
    customer: {
      email: "rachel.green@example.com",
      image: "/images/user/user-19.jpg"
    }
  },
  {
    id: 4,
    product: {
      name: "Mechanical Gaming Keyboard",
      image: "/images/product/product-04.jpg"
    },
    customer: {
      email: "david.w@example.com",
      image: "/images/user/user-20.jpg"
    }
  }
];

export default function OrderRefund() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customer Refund Requests
          </h3>
        </div>
      </div>
      
      {/* Scrollable container with fixed height matching MonthlySalesChart (~210px) */}
      <div className="h-[210px] overflow-y-auto scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
        <div className="flex flex-col">
          {refundRequests.map((request, index) => (
            <div 
              key={request.id} 
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 ${
                index !== refundRequests.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Product Image */}
                <div className="h-10 w-10 overflow-hidden rounded-lg flex-shrink-0 border border-gray-200 dark:border-gray-700 bg-white">
                  <img src={request.product.image} className="h-full w-full object-cover p-0.5" alt={request.product.name} />
                </div>
                
                {/* Product and Customer Info */}
                <div className="flex flex-col min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                    {request.product.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <img 
                      src={request.customer.image} 
                      className="h-4 w-4 rounded-full object-cover" 
                      alt="Customer" 
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${request.customer.email.charAt(0)}&background=random`;
                      }} 
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {request.customer.email}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <div>
                <button 
                  onClick={() => console.log("View Complain", request.id)}
                  className="w-full sm:w-auto px-3 py-1.5 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 shadow-sm transition-all"
                >
                  View Complain
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
