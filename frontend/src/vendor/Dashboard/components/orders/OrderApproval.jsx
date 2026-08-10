import React from "react";

const approvalOrders = [
  {
    id: 1,
    product: {
      name: "Smart Watch Series 8",
      image: "/images/product/product-01.jpg"
    },
    customer: {
      email: "david.c@example.com",
      image: "/images/user/user-17.jpg"
    }
  },
  {
    id: 2,
    product: {
      name: "Wireless Earbuds Pro",
      image: "/images/product/product-02.jpg"
    },
    customer: {
      email: "lisa.m@example.com",
      image: "/images/user/user-18.jpg"
    }
  },
  {
    id: 3,
    product: {
      name: "4K Action Camera",
      image: "/images/product/product-03.jpg"
    },
    customer: {
      email: "james.r@example.com",
      image: "/images/user/user-19.jpg"
    }
  },
  {
    id: 4,
    product: {
      name: "Portable Power Bank 20000mAh",
      image: "/images/product/product-04.jpg"
    },
    customer: {
      email: "emma.s@example.com",
      image: "/images/user/user-20.jpg"
    }
  }
];

export default function OrderApproval() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Approve Orders
          </h3>
        </div>
      </div>
      
      <div className="max-h-[400px] overflow-y-auto scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
        <div className="flex flex-col gap-4">
          {approvalOrders.map((order) => (
            <div key={order.id} className="flex flex-col gap-4 p-4 bg-gray-50/50 border border-gray-100 rounded-2xl dark:bg-gray-800/40 dark:border-gray-800/60 hover:shadow-sm transition-all duration-300">
              
              {/* Prominent Customer Info */}
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800/80 p-3 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm">
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-brand-100 dark:border-brand-500/30 flex-shrink-0 shadow-sm">
                  <img src={order.customer.image} className="h-full w-full object-cover" alt="Customer" onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${order.customer.email.charAt(0)}&background=random`;
                  }} />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Customer</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white/90 truncate">
                    {order.customer.email}
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex items-center gap-3 px-1">
                <div className="h-10 w-10 overflow-hidden rounded-lg flex-shrink-0 border border-gray-200 dark:border-gray-700 bg-white">
                  <img src={order.product.image} className="h-full w-full object-cover p-0.5" alt={order.product.name} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">Product</span>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                    {order.product.name}
                  </h4>
                </div>
              </div>
              
              {/* Premium Actions */}
              <div className="flex items-center gap-3 mt-1">
                <button 
                  onClick={() => console.log("Approved", order.id)}
                  className="flex-1 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 shadow-[0_4px_12px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_16px_rgba(16,185,129,0.35)] transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Approve
                </button>
                <button 
                  onClick={() => console.log("Rejected", order.id)}
                  className="flex-1 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-500 hover:to-red-600 shadow-[0_4px_12px_rgba(244,63,94,0.25)] hover:shadow-[0_6px_16px_rgba(244,63,94,0.35)] transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Reject
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
