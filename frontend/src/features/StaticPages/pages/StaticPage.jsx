import React from 'react';
import { useLocation, Link } from 'react-router';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const StaticPage = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  
  // Format the path into a readable title (e.g., 'manage-deliveries' -> 'Manage Deliveries')
  const title = path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      
      <main className="max-w-[1000px] mx-auto w-full px-4 md:px-10 py-12 md:py-20 grow">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-16 shadow-sm">
          <div className="text-sm text-gray-500 mb-6 flex gap-2 items-center">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>&gt;</span>
            <span className="text-black">{title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-8">{title}</h1>
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="lead text-xl mb-6">
              Welcome to the {title} page. This is a placeholder for the content that will be provided by the business team.
            </p>
            
            <h3 className="text-2xl font-bold text-black mt-10 mb-4">Section 1: Introduction</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h3 className="text-2xl font-bold text-black mt-10 mb-4">Section 2: Details</h3>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Important point number one regarding {title.toLowerCase()}.</li>
              <li>Secondary information that users should be aware of.</li>
              <li>Final consideration for this section.</li>
            </ul>
            
            <p>
              Please check back later for the finalized content of this page. If you have any urgent questions, feel free to visit our <Link to="/support" className="text-black font-bold underline">Customer Support</Link> page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StaticPage;
