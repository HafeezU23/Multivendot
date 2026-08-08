import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectOrders } from '../../../redux/orderSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const OrderHistoryPage = () => {
  const orders = useSelector(selectOrders);

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8 grow">
        <h1 className="text-3xl font-black uppercase mb-8">My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">No orders found</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't placed any orders yet.</p>
            <Link to="/category" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500">Order ID: <span className="font-bold text-black">{order.id}</span></span>
                  <span className="text-sm text-gray-500">Placed on: <span className="font-bold text-black">{new Date(order.date).toLocaleDateString()}</span></span>
                  <span className="text-sm text-gray-500">Total: <span className="font-bold text-black">${order.total.toFixed(2)}</span></span>
                </div>
                
                <div className="flex flex-col gap-2 grow">
                  <span className="text-sm font-bold">Items from:</span>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(order.itemsByVendor).map(v => (
                      <span key={v.vendor.vendorId} className="bg-gray-100 text-xs px-2 py-1 rounded-md font-medium text-gray-700">
                        {v.vendor.storeName} ({v.items.length}) - <span className={v.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}>{v.status}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Link to={`/orders/track/${order.id}`} className="inline-block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Track Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
