import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Login from './features/Authentication/pages/Login'
import ProductCategoryPage from './features/ProuductCatalog/pages/ProductCategoryPage'
import ProductDetail from './features/ProuductCatalog/pages/ProductDetail'
import CartPage from './features/Cart/pages/CartPage'
import CheckoutPage from './features/Cart/pages/CheckoutPage'
import OrderHistoryPage from './features/Orders/pages/OrderHistoryPage'
import OrderTrackingPage from './features/Orders/pages/OrderTrackingPage'
import WishlistPage from './features/Wishlist/pages/WishlistPage'
import StoresPage from './features/Stores/pages/StoresPage'
import VendorStorePage from './features/Stores/pages/VendorStorePage'
import StaticPage from './features/StaticPages/pages/StaticPage'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<ProductCategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/orders/track/:id" element={<OrderTrackingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/store/:vendorId" element={<VendorStorePage />} />
        
        {/* Static Pages */}
        <Route path="/about" element={<StaticPage />} />
        <Route path="/features" element={<StaticPage />} />
        <Route path="/works" element={<StaticPage />} />
        <Route path="/career" element={<StaticPage />} />
        <Route path="/support" element={<StaticPage />} />
        <Route path="/delivery" element={<StaticPage />} />
        <Route path="/terms" element={<StaticPage />} />
        <Route path="/privacy" element={<StaticPage />} />
        <Route path="/account" element={<StaticPage />} />
        <Route path="/manage-deliveries" element={<StaticPage />} />
        <Route path="/payments" element={<StaticPage />} />
      </Routes>
    </div>
  )
}

export default App;