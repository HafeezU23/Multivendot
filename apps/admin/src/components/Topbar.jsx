import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 lg:h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1">
        <button 
          onClick={onMenuClick} 
          className="lg:hidden p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={22} />
        </button>
        
      </div>
      
      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-3 lg:gap-6">
        <button className="sm:hidden p-2 text-gray-500 hover:text-black transition-colors rounded-full hover:bg-gray-50">
          <Search size={20} />
        </button>
        <button className="relative p-2 text-gray-500 hover:text-black transition-colors rounded-full hover:bg-gray-50">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-2 lg:gap-3 cursor-pointer p-1.5 rounded-full hover:bg-gray-50 transition-colors lg:pr-4 border border-transparent hover:border-gray-200">
          <div className="w-9 h-9 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-white shrink-0">
            <User size={18} />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-black leading-tight">Admin User</p>
            <p className="text-xs text-gray-500 font-medium">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
