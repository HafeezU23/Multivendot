import React from 'react';
import { useSelector } from 'react-redux';
import { Plus, Edit2, Power, PowerOff } from 'lucide-react';

const PromotionsPage = () => {
  const { promotions } = useSelector(state => state.promotions);
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black mb-1">Promotions & Banners</h1>
          <p className="text-gray-500 text-sm">Manage platform-wide marketing campaigns.</p>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit">
          <Plus size={18} /> Create Promotion
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <div key={promo.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col group">
            <div className="h-48 w-full relative overflow-hidden bg-gray-100">
              <img src={promo.image} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {promo.type}
              </div>
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${promo.status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'}`}>
                {promo.status}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">{promo.title}</h3>
                  <p className="text-gray-500 text-sm">{promo.id} • {promo.discount}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-black py-2 rounded-lg font-medium transition-colors">
                  <Edit2 size={16} /> Edit
                </button>
                <button className={`flex-1 flex items-center justify-center gap-2 text-white py-2 rounded-lg font-medium transition-colors ${promo.status === 'Active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                  {promo.status === 'Active' ? <><PowerOff size={16} /> Deactivate</> : <><Power size={16} /> Activate</>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
