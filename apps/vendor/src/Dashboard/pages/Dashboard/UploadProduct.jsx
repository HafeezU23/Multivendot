import React, { useState } from 'react';
import PageMeta from "../../components/common/PageMeta";

export default function UploadProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [intro, setIntro] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  
  return (
    <>
      <PageMeta title="Vendor Dashboard - Upload Product" description="Upload Product Page" />
      
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90">
          Upload Product
        </h2>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/30 transition-all active:scale-95">
            Upload Product
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: General Info */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              General Information
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Product Title
                </label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter product title" 
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Introduction
                </label>
                <input 
                  type="text" 
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  placeholder="Tell Your Product Briefly" 
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Detail Description
                </label>
                <textarea 
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe in detail" 
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 custom-scrollbar"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              Pricing
            </h3>
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00" 
                    className="w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-8 pr-4 text-sm text-gray-800 shadow-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90"
                  />
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Category & Media */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          
          {/* Category */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              Category
            </h3>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Product Category
              </label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90 appearance-none"
              >
                <option value="">Select a category</option>
                <option value="garments">Garments</option>
                <option value="accessories">Accessories</option>
                <option value="electronics">Electronics</option>
                <option value="grocery">Grocery</option>
                <option value="toys">Toys</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          {/* Media */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              Product Media
            </h3>
            
            <div className="space-y-5">
              {/* Cover Photo */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Cover photo
                </label>
                <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-8 hover:border-brand-500 hover:bg-brand-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-brand-500 dark:hover:bg-brand-500/10 transition-colors">
                  <input type="file" className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none" accept="image/*" />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    </span>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span className="text-brand-500">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Photos */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  additional photos <span className="text-gray-400">(Max 3 photos)</span>
                </label>
                <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-6 hover:border-brand-500 hover:bg-brand-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-brand-500 dark:hover:bg-brand-500/10 transition-colors">
                  <input type="file" multiple max="3" className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none" accept="image/*" />
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <p className="text-xs font-medium text-brand-500">
                      Upload additional photos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
