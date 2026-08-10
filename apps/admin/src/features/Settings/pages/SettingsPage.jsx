import React, { useState } from 'react';
import { Save, ShieldCheck, Percent, HelpCircle } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('commissions');

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-black mb-1">Platform Settings</h1>
        <p className="text-gray-500 text-sm">Configure global platform rules, commissions, and policies.</p>
      </div>

      <div className="flex gap-4 sm:gap-6 border-b border-gray-200 overflow-x-auto">
        <button onClick={() => setActiveTab('commissions')} className={`pb-4 px-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'commissions' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          <Percent size={18} /> Commissions
        </button>
        <button onClick={() => setActiveTab('policies')} className={`pb-4 px-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'policies' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          <ShieldCheck size={18} /> Platform Policies
        </button>
      </div>

      {activeTab === 'commissions' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-black mb-4">Global Commission Rate</h2>
            <p className="text-gray-500 text-sm mb-6">This is the default percentage taken from every vendor sale unless overridden by a category-specific rate.</p>
            
            <div className="flex items-center gap-4 max-w-sm">
              <div className="flex-1 relative">
                <input type="number" defaultValue="15" className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-black font-medium" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                <Save size={18} /> Save
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-black">Tiered Category Overrides</h2>
                <p className="text-gray-500 text-sm mt-1">Set specific commission rates for high-margin or low-margin categories.</p>
              </div>
              <button className="text-black font-bold text-sm border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">Add Override</button>
            </div>

            <div className="border border-gray-100 rounded-lg overflow-hidden mt-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-medium">Category</th>
                    <th className="px-4 py-3 font-medium">Override Rate</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-4 font-bold text-black">Electronics</td>
                    <td className="px-4 py-4"><span className="bg-gray-100 text-black px-2 py-1 rounded font-bold">8%</span></td>
                    <td className="px-4 py-4 text-right"><button className="text-red-500 hover:underline text-xs font-bold">Remove</button></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-bold text-black">Fashion & Apparel</td>
                    <td className="px-4 py-4"><span className="bg-gray-100 text-black px-2 py-1 rounded font-bold">20%</span></td>
                    <td className="px-4 py-4 text-right"><button className="text-red-500 hover:underline text-xs font-bold">Remove</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'policies' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-black mb-4">Terms of Service & Policies</h2>
          <p className="text-gray-500 text-sm mb-6">Update the global policy documents that all vendors and buyers must agree to.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-black mb-2">Vendor Agreement URL</label>
              <input type="text" defaultValue="https://multivendot.com/policies/vendor-agreement" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-black text-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Prohibited Items Policy URL</label>
              <input type="text" defaultValue="https://multivendot.com/policies/prohibited-items" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-black text-sm" />
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
              <Save size={18} /> Save Policies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
