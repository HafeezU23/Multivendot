import React from 'react';
import { useParams, Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrderById, advanceOrderStatus } from '../../../redux/orderSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const STEPS = ['Placed', 'Packed', 'Shipped', 'Delivered'];

const OrderTrackingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(state => selectOrderById(state, id));

  if (!order) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="grow flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Order not found</h2>
          <Link to="/orders" className="text-blue-600 underline">Return to Orders</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="max-w-[1200px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8 grow">
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
          <Link to="/orders" className="hover:text-black">My Orders</Link>
          <span>&gt;</span>
          <span className="text-black font-medium">Track Order {order.id}</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black uppercase mb-8">Track Order</h1>

        <div className="flex flex-col gap-8">
          {Object.values(order.itemsByVendor).map(({ vendor, items, status }) => {
            const currentStepIndex = STEPS.indexOf(status);

            return (
              <div key={vendor.vendorId} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <div>
                    <h3 className="font-bold text-xl">Package from {vendor.storeName}</h3>
                    <p className="text-gray-500 text-sm mt-1">{items.length} item(s)</p>
                  </div>
                  
                  {/* {status !== 'Delivered' && (
                    <button 
                      onClick={() => dispatch(advanceOrderStatus({ orderId: order.id, vendorId: vendor.vendorId }))}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-bold hover:bg-blue-200 transition-colors"
                      title="For testing purposes to simulate backend updates"
                    >
                      Simulate Status Update
                    </button>
                  )} */}
                </div>

                {/* Progress Stepper */}
                <div className="relative mb-12 mt-4 px-4">
                  {/* Background Line */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0"></div>
                  
                  {/* Active Line */}
                  <div 
                    className="absolute top-1/2 left-0 h-1 bg-black -translate-y-1/2 rounded-full z-0 transition-all duration-500" 
                    style={{ width: `${(currentStepIndex / (STEPS.length - 1)) * 100}%` }}
                  ></div>

                  {/* Steps */}
                  <div className="flex justify-between relative z-10">
                    {STEPS.map((step, idx) => {
                      const isCompleted = idx <= currentStepIndex;
                      const isCurrent = idx === currentStepIndex;
                      
                      return (
                        <div key={step} className="flex flex-col items-center gap-3 w-10">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500 ${isCompleted ? 'bg-black text-white' : 'bg-gray-200 text-gray-400 border-2 border-white'}`}>
                            {isCompleted && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                          </div>
                          <span className={`text-xs md:text-sm font-bold absolute top-10 whitespace-nowrap ${isCurrent ? 'text-black' : (isCompleted ? 'text-gray-600' : 'text-gray-400')}`}>
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Items in this package */}
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <h4 className="font-bold mb-4 text-sm uppercase text-gray-400 tracking-wider">Items in Package</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map(item => (
                      <div key={item.cartItemId} className="flex gap-4 items-center bg-gray-50 p-3 rounded-xl">
                        <img src={item.product.images[0]} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                        <div>
                          <p className="font-bold text-sm line-clamp-1">{item.product.title}</p>
                          <p className="text-gray-500 text-xs mt-1">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;
