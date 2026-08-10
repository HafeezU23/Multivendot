import React, { useState, useEffect, useRef } from 'react'
import { FiChevronDown, FiSearch, FiBell, FiShoppingCart, FiUser, FiMenu, FiX, FiHeart } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const cartTotalItems = 0;
  const wishlistItems = [];
  const notifications = [];
  const unreadCount = 0;

  const notificationsRef = useRef(null);

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (!isNotificationsOpen && unreadCount > 0) {
      // Mark as read when opening
      dispatch(markNotificationsRead());
    }
  };

  return (
    <header className="border-b border-gray-200 font-sans relative">
      <div className="max-w-full mx-4 md:mx-10 lg:mx-20 px-2 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between gap-x-2 lg:gap-x-10">
        
        {/* Left side: Hamburger & Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            className="lg:hidden mr-2 sm:mr-4 p-2 -ml-2 text-black hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isSearchOpen) setIsSearchOpen(false); 
            }}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
          
          <Link to="/" className="text-2xl sm:text-[32px] font-black tracking-tight leading-none text-black">
            SHOP.CO
          </Link>
        </div>
        
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-[16px] text-black">
          <Link to="/stores" className="hover:text-gray-600 transition-colors">Stores</Link>
          <Link to="/category?filter=sale" className="hover:text-gray-600 transition-colors">On Sale</Link>
          <Link to="/category?filter=new" className="hover:text-gray-600 transition-colors">New Arrivals</Link>
          <Link to="/category" className="hover:text-gray-600 transition-colors">Categories</Link>
        </nav>

        {/* Center: Search Bar (Desktop/Tablet) */}
        <div className="hidden md:flex flex-1 items-center bg-[#F0F0F0] rounded-full px-4 py-2.5 mx-4 lg:mx-0 max-w-xl">
          <FiSearch className="h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="bg-transparent outline-none ml-3 w-full text-black text-[16px]"
          />
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center space-x-1 sm:space-x-3 text-black cursor-pointer">
          {/* Search icon for mobile */}
          <button 
            className="md:hidden hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full p-2"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isMenuOpen) setIsMenuOpen(false); 
            }}
          >
            <FiSearch className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
           
          {/* Notification Icon */}
          <div className="relative" ref={notificationsRef}>
            <button 
              className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2 relative"
              onClick={handleNotificationsClick}
            >
              <FiBell className="w-5 h-5 sm:w-6 sm:h-6" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            
            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">No notifications yet.</div>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${!notif.read ? 'bg-blue-50/30' : ''}`}>
                        <p className="text-sm text-gray-800">{notif.message}</p>
                        <span className="text-xs text-gray-400 mt-1 block">{new Date(notif.date).toLocaleDateString()} {new Date(notif.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <button 
            className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2 relative"
            onClick={() => navigate("/wishlist")}
          >
            <FiHeart className="h-5 w-5 sm:h-6 sm:w-6" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </button>
          
          {/* Cart Icon */}
          <button 
            className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2 relative"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            {cartTotalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartTotalItems}
              </span>
            )}
          </button>
          
          {/* User Icon */}
          <button className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2"
          onClick={() => navigate("/login")}>
            <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 z-50 lg:hidden shadow-lg">
          <nav className="flex flex-col p-4 px-6 space-y-4 text-black text-lg font-medium bg-gray-50">
            <Link to="/stores" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">Stores</Link>
            <Link to="/category?filter=sale" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">On Sale</Link>
            <Link to="/category?filter=new" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">New Arrivals</Link>
            <Link to="/category" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">Categories</Link>
            <Link to="/orders" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 transition-colors pt-1 flex justify-between items-center text-blue-600">
              My Orders
            </Link>
          </nav>
        </div>
      )}

      {/* Mobile Search Bar Dropdown */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 z-40 md:hidden p-4 shadow-md transition-all">
          <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2.5 w-full">
            <FiSearch className="h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent outline-none ml-3 w-full text-black text-[16px]"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar