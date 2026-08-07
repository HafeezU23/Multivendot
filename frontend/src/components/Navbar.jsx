import React from 'react'
import { FiChevronDown, FiSearch, FiBell, FiShoppingCart, FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 font-sans">
      <div className="max-w-full mx-20 px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-x-6 lg:gap-x-10">
        
        {/* Left side: Logo & Links */}
        <div className="flex items-center space-x-10">
          <a href="/" className="text-[32px] font-black tracking-tight leading-none text-black">
            SHOP.CO
          </a>
          
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
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 items-center bg-[#F0F0F0] rounded-full px-4 py-2.5 ">
          <FiSearch className="h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="bg-transparent outline-none ml-3 w-full text-black text-[16px]"
          />
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center space-x-4 text-black cursor-pointer">
          {/* Search icon for mobile */}
          <button className="md:hidden hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full p-2">
            <FiSearch className="h-6 w-6" />
          </button>
           
           {/* Notification Icon*/}
          <button className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <FiBell className="w-6 h-6" />
          </button>
          
          {/* Cart Icon */}
          <button className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <FiShoppingCart className="w-6 h-6" />
          </button>
          
          {/* User Icon */}
          <button className="hover:text-gray-600 transition-colors cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <FiUser className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar