import React from 'react';
import { NavLink } from 'react-router';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  ShoppingBag, 
  Tags, 
  Megaphone, 
  Star, 
  Settings,
  X 
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Vendors', path: '/vendors', icon: <Store size={20} /> },
    { name: 'Users', path: '/users', icon: <Users size={20} /> },
    { name: 'Orders', path: '/orders', icon: <ShoppingBag size={20} /> },
    { name: 'Catalog', path: '/catalog', icon: <Tags size={20} /> },
    { name: 'Promotions', path: '/promotions', icon: <Megaphone size={20} /> },
    { name: 'Reviews', path: '/reviews', icon: <Star size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-wider text-black">ADMIN<span className="text-gray-400">PANEL</span></h1>
          <button onClick={onClose} className="lg:hidden p-1 text-gray-400 hover:text-black transition-colors">
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                      isActive 
                        ? 'bg-black text-white' 
                        : 'text-gray-500 hover:bg-gray-100 hover:text-black'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
