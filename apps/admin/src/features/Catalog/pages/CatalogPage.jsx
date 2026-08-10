import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Edit, Trash2, Plus, Flag, Ban, CheckCircle } from 'lucide-react';

const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const { categories, flaggedProducts } = useSelector(state => state.catalog);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-black">Catalog & Moderation</h1>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit">
          <Plus size={18} /> Add Category
        </button>
      </div>

      <div className="flex gap-4 sm:gap-6 border-b border-gray-200 overflow-x-auto">
        <button onClick={() => setActiveTab('categories')} className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'categories' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>Global Categories</button>
        <button onClick={() => setActiveTab('moderation')} className={`pb-4 px-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'moderation' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          Flagged Listings <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{flaggedProducts.length}</span>
        </button>
      </div>

      {activeTab === 'categories' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
            <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Category ID</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Sub-categories</th>
                <th className="px-6 py-4 font-medium">Total Products</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-black">{cat.id}</td>
                  <td className="px-6 py-4 font-bold">{cat.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {cat.subCategories.map(sub => (
                         <span key={sub} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs">{sub}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{cat.productCount}</td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-black rounded-md"><Edit size={18} /></button>
                    <button className="p-2 text-red-400 hover:text-red-600 rounded-md"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      )}

      {activeTab === 'moderation' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
            <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Product ID</th>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Flag Reason</th>
                <th className="px-6 py-4 font-medium">Date Flagged</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {flaggedProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-red-600 flex items-center gap-2">
                    <Flag size={16} /> {prod.id}
                  </td>
                  <td className="px-6 py-4 font-medium">{prod.name}</td>
                  <td className="px-6 py-4">{prod.vendor}</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold border border-red-100">
                      {prod.reason}
                    </span>
                  </td>
                  <td className="px-6 py-4">{prod.dateFlagged}</td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="flex items-center gap-1.5 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-transparent hover:border-red-200">
                      <Ban size={14} /> Remove Listing
                    </button>
                    <button className="flex items-center gap-1.5 text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-transparent hover:border-green-200">
                      <CheckCircle size={14} /> Ignore Flag
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      )}
    </div>
  );
};

export default CatalogPage;
