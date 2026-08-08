import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectWishlistItems } from '../../../redux/wishlistSlice';
import { selectAllProducts } from '../../../redux/productSlice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Product from '../../ProuductCatalog/components/Product';

const WishlistPage = () => {
  const wishlistIds = useSelector(selectWishlistItems);
  const allProducts = useSelector(selectAllProducts);

  const wishlistProducts = allProducts.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8 grow">
        <h1 className="text-3xl font-black uppercase mb-8">My Wishlist</h1>
        
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your wishlist yet.</p>
            <Link to="/category" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Discover Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistProducts.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
