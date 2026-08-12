import React, { useState } from "react";
import Badge from "../ui/badge/Badge";

const stages = [
  { id: 1, label: "Placed" },
  { id: 2, label: "Dispatched" },
  { id: 3, label: "Handed to Logistics" },
  { id: 4, label: "Delivered" },
  { id: 5, label: "Customer Confirmation" }
];

export default function DeliveryTrack() {
  const [currentStage, setCurrentStage] = useState(2); // 1-indexed

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800/80 sm:px-6 relative shadow-sm">
      {/* Background glow effects for aesthetics */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-rose-100/50 dark:bg-rose-900/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white flex-shrink-0 shadow-sm">
               <img src="/images/product/product-01.jpg" alt="Product" className="h-full w-full object-cover p-1" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                Wireless Noise-Cancelling Headphones
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Tracking ID:</span>
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">PAQ-327-P24</span>
              </div>
            </div>
          </div>
          <Badge size="md" color="info" className="bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 px-4 py-1.5 rounded-full font-medium self-start sm:self-auto">
            In Transit
          </Badge>
        </div>

        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">From:</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">14.Idumota RD</span>
            <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">14 Feb 2026</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">To:</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">24.Ikeja Lagos</span>
            <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">27 Feb 2026 (EST)</span>
          </div>
        </div>

        {/* Interactive Progress Bar */}
        <div className="relative mb-10 pt-4 px-2">
          {/* Track background */}
          <div 
            className="absolute top-6 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"
            style={{ left: '10%', right: '10%' }}
          >
            {/* Active progress */}
            <div 
              className="absolute left-0 top-0 h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentStage - 1) / (stages.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="relative flex justify-between">
            {stages.map((stage, index) => {
              const isCompleted = index + 1 <= currentStage;
              const isCurrent = index + 1 === currentStage;
              return (
                <div 
                  key={stage.id} 
                  className="flex flex-col items-center cursor-pointer group w-1/5"
                  onClick={() => setCurrentStage(stage.id)}
                >
                  <div 
                    className={`h-5 w-5 rounded-full z-10 flex items-center justify-center transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 text-white shadow-sm' 
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-transparent'
                    } ${isCurrent ? 'scale-125 ring-4 ring-blue-100 dark:ring-blue-900/50 shadow-md' : 'group-hover:scale-110'}`}
                  >
                    {isCompleted && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span 
                    className={`text-[10px] sm:text-xs font-medium text-center mt-3 transition-colors duration-300 ${
                      isCompleted 
                        ? 'text-gray-800 dark:text-gray-200' 
                        : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500'
                    } ${isCurrent ? 'font-bold text-blue-600 dark:text-blue-400' : ''}`}
                  >
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vendor Action */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
          <button className="w-full flex justify-center items-center gap-2 px-4 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-black hover:to-gray-800 dark:from-white dark:to-gray-200 dark:text-gray-900 dark:hover:from-gray-100 dark:hover:to-white shadow-md transition-all transform hover:-translate-y-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Confirm Order Receipt
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Click when customer officially receives the package.
          </p>
        </div>
      </div>
    </div>
  );
}
