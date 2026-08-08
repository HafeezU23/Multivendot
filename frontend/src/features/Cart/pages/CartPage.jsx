import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { selectCartItems, selectCartTotalPrice, removeFromCart, updateQuantity } from '../../../redux/cartSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FiTrash2 } from 'react-icons/fi';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  // Group items by vendor
  const itemsByVendor = cartItems.reduce((acc, item) => {
    const vendorId = item.product.vendor.vendorId;
    if (!acc[vendorId]) {
      acc[vendorId] = {
        vendor: item.product.vendor,
        items: []
      };
    }
    acc[vendorId].items.push(item);
    return acc;
  }, {});

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8 grow">
        <h1 className="text-3xl font-black uppercase mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/category" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              {Object.values(itemsByVendor).map(({ vendor, items }) => (
                <div key={vendor.vendorId} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                    <span className="font-bold text-lg">Sold by: {vendor.storeName}</span>
                    <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">⭐ {vendor.rating}</span>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    {items.map(item => (
                      <div key={item.cartItemId} className="flex gap-4">
                        <div className="w-24 h-24 bg-[#F0EEED] rounded-xl overflow-hidden shrink-0">
                          <img src={item.product.images[0]} alt={item.product.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="grow flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-lg leading-tight line-clamp-1">{item.product.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                {item.selectedSize && `Size: ${item.selectedSize}`}
                                {item.selectedSize && item.selectedColor && ' | '}
                                {item.selectedColor && `Color: ${item.selectedColor}`}
                              </p>
                              <p className="text-xl font-bold mt-2">${item.product.price.toFixed(2)}</p>
                            </div>
                            <button 
                              onClick={() => dispatch(removeFromCart(item.cartItemId))}
                              className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                            >
                              <FiTrash2 className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-2">
                            <div className="bg-[#F0F0F0] rounded-full flex items-center px-3 py-1.5 w-[100px] justify-between">
                              <button onClick={() => dispatch(updateQuantity({ cartItemId: item.cartItemId, quantity: item.quantity - 1 }))} className="text-lg font-medium cursor-pointer">-</button>
                              <span className="font-medium text-sm">{item.quantity}</span>
                              <button onClick={() => dispatch(updateQuantity({ cartItemId: item.cartItemId, quantity: item.quantity + 1 }))} className="text-lg font-medium cursor-pointer">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-6">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                <div className="flex flex-col gap-4 text-gray-600 border-b border-gray-200 pb-6 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span className="font-bold text-red-500">-$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-black">$15.00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-black font-medium">Total</span>
                  <span className="text-2xl font-black">${(totalPrice + 15).toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-black text-white rounded-full font-medium py-4 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Go to Checkout
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
