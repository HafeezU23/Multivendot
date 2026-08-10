import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import { selectCartItems, selectCartTotalPrice, clearCart } from '../../../redux/features/cartSlice';
import { placeOrder } from '../../../redux/features/orderSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: '123 Main St',
    city: 'New York',
    zip: '10001',
    cardNumber: '4242 4242 4242 4242',
    expDate: '12/25',
    cvv: '123'
  });

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="grow flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Nothing to checkout</h2>
          <Link to="/cart" className="text-blue-600 underline">Return to Cart</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // Dispatch placeOrder
    dispatch(placeOrder({
      items: cartItems,
      shippingAddress: {
        name: `${formData.firstName} ${formData.lastName}`,
        address: formData.address,
        city: formData.city,
        zip: formData.zip
      },
      paymentInfo: {
        last4: formData.cardNumber.slice(-4)
      },
      total: totalPrice + 15
    }));

    // Clear cart
    dispatch(clearCart());

    // Redirect to orders
    navigate('/orders');
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8 grow">
        <h1 className="text-3xl font-black uppercase mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="lg:w-2/3">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-6">
              <h2 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                  <input required type="text" name="zip" value={formData.zip} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4 mt-8">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number (Dummy)</label>
                  <input required type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                  <input required type="text" name="expDate" value={formData.expDate} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input required type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-6">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="flex flex-col gap-4 text-sm mb-6 max-h-60 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.cartItemId} className="flex justify-between items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden shrink-0">
                        <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold line-clamp-1">{item.product.title}</p>
                        <p className="text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 text-gray-600 border-t border-b border-gray-200 py-4 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
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
                type="submit"
                form="checkout-form"
                className="w-full bg-black text-white rounded-full font-medium py-4 hover:bg-gray-800 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
