import React, { useState } from 'react'
import { FiChevronDown, FiSearch, FiBell, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
              if (isSearchOpen) setIsSearchOpen(false); // Close search if menu opens
            }}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
          
          <a href="/" className="text-2xl sm:text-[32px] font-black tracking-tight leading-none text-black">
            SHOP.CO
          </a>
        </div>
        
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-[16px] text-black">
          <a href="#" className="flex items-center hover:text-gray-600 transition-colors">
            Shop
            <FiChevronDown className="w-4 h-4 ml-1" />
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">On Sale</a>
          <a href="#" className="hover:text-gray-600 transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Categories</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Brands</a>
        </nav>

        {/* Center: Search Bar (Desktop/Tablet) */}
        <div className="hidden md:flex flex-1 items-center bg-[#F0F0F0] rounded-full px-4 py-2.5 mx-4 lg:mx-0 max-w-xl">
          <FiSearch className="h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="bg-transparent outline-none ml-3 w-full text-black text-[16px]"
          />
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center space-x-1 sm:space-x-4 text-black cursor-pointer">
          {/* Search icon for mobile */}
          <button 
            className="md:hidden hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full p-2"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isMenuOpen) setIsMenuOpen(false); // Close menu if search opens
            }}
          >
            <FiSearch className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
           
          {/* Notification Icon*/}
          <button className="hidden sm:block hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <FiBell className="w-6 h-6" />
          </button>
          
          {/* Cart Icon */}
          <button className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <FiShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          {/* User Icon */}
          <button className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 z-50 lg:hidden shadow-lg">
          <nav className="flex flex-col p-4 px-6 space-y-4 text-black text-lg font-medium bg-gray-50">
            <a href="#" className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3 flex justify-between items-center">
              Shop <FiChevronDown className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">On Sale</a>
            <a href="#" className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">New Arrivals</a>
            <a href="#" className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-3">Categories</a>
            <a href="#" className="hover:text-gray-600 transition-colors pb-2">Brands</a>
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