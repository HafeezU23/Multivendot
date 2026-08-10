import React from "react";

const complaints = [
  {
    id: 1,
    orderId: "PAQ-327-P24",
    customer: {
      email: "alex@example.com",
      image: "/images/user/user-17.jpg"
    },
    message: "I got a message from the vendor that the order was delivered, but I have not received it yet at my front door.",
    status: "Pending"
  },
  {
    id: 2,
    orderId: "PAQ-892-K99",
    customer: {
      email: "rachel.green@example.com",
      image: "/images/user/user-19.jpg"
    },
    message: "Tracking says 'Handed to Logistics' for 4 days now. Can you check where my package is?",
    status: "Pending"
  },
  {
    id: 3,
    orderId: "PAQ-104-M11",
    customer: {
      email: "david.w@example.com",
      image: "/images/user/user-20.jpg"
    },
    message: "The delivery guy left it at the wrong apartment block.",
    status: "Resolved"
  }
];

export default function DeliveryComplain() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Delivery Complaints
          </h3>
        </div>
      </div>
      
      {/* Scrollable container matching other lists */}
      <div className="max-h-[400px] overflow-y-auto scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
        <div className="flex flex-col gap-4">
          {complaints.map((complaint) => (
            <div 
              key={complaint.id} 
              className="flex flex-col gap-3 p-4 bg-gray-50/50 border border-gray-100 rounded-2xl dark:bg-gray-800/40 dark:border-gray-800/60 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full flex-shrink-0 border border-gray-200 dark:border-gray-700">
                    <img 
                      src={complaint.customer.image} 
                      className="h-full w-full object-cover" 
                      alt="Customer" 
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${complaint.customer.email.charAt(0)}&background=random`;
                      }} 
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">
                      Order: {complaint.orderId}
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                      {complaint.customer.email}
                    </span>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    complaint.status === "Pending" 
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-500" 
                      : "bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-500"
                  }`}>
                    {complaint.status}
                  </span>
                </div>
              </div>

              {/* Message block */}
              <div className="bg-white dark:bg-gray-800/80 p-3.5 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm relative mt-1">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 mr-2">Issue:</span>
                  "{complaint.message}"
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-1 flex justify-end">
                <button 
                  className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-sm transition-all"
                  onClick={() => console.log("Contact Logistics for", complaint.id)}
                >
                  Contact Logistics
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
