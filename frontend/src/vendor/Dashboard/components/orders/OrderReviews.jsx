import React from "react";

const reviews = [
  {
    id: 1,
    product: {
      name: "Wireless Noise-Cancelling Headphones",
      image: "/images/product/product-01.jpg"
    },
    customer: {
      email: "sarah.jenkins@example.com",
      image: "/images/user/user-17.jpg"
    },
    text: "Absolutely love these! The noise cancellation is top tier and they are incredibly comfortable to wear for long hours."
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
    },
    text: "Decent hub, but the setup process was a bit confusing. Once it's running though, it works flawlessly."
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
    },
    text: "My back pain has completely vanished since I started using this chair. Highly recommend it to anyone working from home!"
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
    },
    text: "The tactile feedback is amazing. Best keyboard I have ever owned, hands down."
  }
];

export default function OrderReviews() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customer Reviews
          </h3>
        </div>
      </div>
      
      {/* Scrollable area matching OrderList's max-h-[400px] */}
      <div className="max-w-full overflow-x-hidden overflow-y-auto max-h-[400px] scroll-smooth pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex flex-col gap-3 p-4 bg-gray-50/50 border border-gray-100 rounded-2xl dark:bg-gray-800/40 dark:border-gray-800/60 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Product Info */}
                <div className="flex items-center gap-3">
                  <div className="h-[50px] w-[50px] overflow-hidden rounded-lg flex-shrink-0 border border-gray-200 dark:border-gray-700 bg-white">
                    <img src={review.product.image} className="h-full w-full object-cover p-0.5" alt={review.product.name} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">Product</span>
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                      {review.product.name}
                    </h4>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 sm:max-w-[200px]">
                  <div className="h-10 w-10 overflow-hidden rounded-full flex-shrink-0 border border-gray-200 dark:border-gray-700">
                    <img 
                      src={review.customer.image} 
                      className="h-full w-full object-cover" 
                      alt="Customer" 
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${review.customer.email.charAt(0)}&background=random`;
                      }} 
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">Customer</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {review.customer.email}
                    </span>
                  </div>
                </div>

              </div>
              
              {/* Review Text */}
              <div className="mt-1 bg-white dark:bg-gray-800/80 p-3.5 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm relative">
                {/* Decorative quote marks */}
                <span className="absolute top-2 left-2 text-2xl text-gray-200 dark:text-gray-600 leading-none select-none">"</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic pl-5 pr-2">
                  {review.text}
                </p>
                <span className="absolute bottom-[-5px] right-3 text-2xl text-gray-200 dark:text-gray-600 leading-none select-none">"</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
