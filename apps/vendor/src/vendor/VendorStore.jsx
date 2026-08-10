import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaStar, FaStarHalfAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { Package, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router';

// Dummy Data
const dummyProducts = [
    { id: 1, title: 'Vintage Leather Bag', price: 120.00, category: 'Accessories', rating: 4.5, reviewCount: 24, imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80', status: 'Approved', quantity: 45 },
    { id: 2, title: 'Denim Jacket', price: 89.99, category: 'Garments', rating: 4.8, reviewCount: 156, imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80', status: 'Pending', quantity: 12 },
    { id: 3, title: 'Classic Watch', price: 199.50, category: 'Accessories', rating: 4.2, reviewCount: 89, imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80', status: 'Approved', quantity: 8 },
    { id: 4, title: 'Canvas Sneakers', price: 55.00, category: 'Garments', rating: 4.6, reviewCount: 312, imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80', status: 'Approved', quantity: 150 },
    { id: 5, title: 'Cotton T-Shirt', price: 25.00, category: 'Garments', rating: 4.1, reviewCount: 45, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80', status: 'Approved', quantity: 300 },
    { id: 6, title: 'Wireless Earbuds', price: 149.99, category: 'Electronics', rating: 4.9, reviewCount: 890, imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80', status: 'Approved', quantity: 50 },
    { id: 7, title: 'Matte Lipstick', price: 18.00, category: 'Cosmetics', rating: 4.3, reviewCount: 112, imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80', status: 'Pending', quantity: 85 },
    { id: 8, title: 'Plush Toy Bear', price: 30.00, category: 'Toys', rating: 4.7, reviewCount: 56, imageUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&q=80', status: 'Approved', quantity: 20 }
];

export default function VendorStore() {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [showAllInventory, setShowAllInventory] = useState(false);
    const [stockModalOpen, setStockModalOpen] = useState(false);
    const [selectedProductStock, setSelectedProductStock] = useState(null);

    const displayedProducts = showAllProducts ? dummyProducts : dummyProducts.slice(0, 4);
    const displayedInventory = showAllInventory ? dummyProducts : dummyProducts.slice(0, 4);

    const openStockModal = (product) => {
        setSelectedProductStock(product);
        setStockModalOpen(true);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<FaStar key={i} className="text-[#e9d014] w-3 h-3" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-[#e9d014] w-3 h-3" />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-300 w-3 h-3" />);
            }
        }
        return stars;
    };

    return (
        <div className="min-h-screen bg-[#f8f9fb] flex flex-col font-sans">
            <Navbar />

            <main className="flex-1 max-w-[1200px] w-full mx-auto p-4 sm:p-6 lg:p-8 mt-4 relative">

                {/* Header & Action Buttons */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">New Mart</h1>
                        <p className="text-gray-500 mt-2 font-medium">Manage Your Store & Inventory</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/upload-product" className="px-6 py-3.5 bg-black hover:bg-gray-900 text-white font-bold rounded-full transition-all duration-300 ease-out text-[13px] tracking-wide shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center justify-center">
                            Add New Product
                        </Link>
                        <Link to="/vendor-dashboard" className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all duration-300 ease-out text-[13px] tracking-wide border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center justify-center">
                            Vendor Dashboard
                        </Link>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ease-out cursor-pointer">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Package className="w-7 h-7 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Products</p>
                            <p className="text-3xl font-black text-gray-900 leading-none">{dummyProducts.length}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ease-out cursor-pointer">
                        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                            <CheckCircle className="w-7 h-7 text-green-500" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Approved</p>
                            <p className="text-3xl font-black text-gray-900 leading-none">{dummyProducts.filter(p => p.status === 'Approved').length}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ease-out cursor-pointer">
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Clock className="w-7 h-7 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pending Approval</p>
                            <p className="text-3xl font-black text-gray-900 leading-none">{dummyProducts.filter(p => p.status === 'Pending').length}</p>
                        </div>
                    </div>
                </div>

                {/* Products Grid Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-gray-900">All Products</h2>
                        <button
                            onClick={() => setShowAllProducts(!showAllProducts)}
                            className="text-[13px] font-bold text-gray-600 hover:text-black transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                        >
                            {showAllProducts ? 'Show Less' : 'View All'}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
                        {displayedProducts.map(product => (
                            <div key={product.id} className="flex flex-col bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-300 w-full h-full max-w-[300px] mx-auto group border border-gray-50">

                                {/* Product Image & Badge */}
                                <div className="relative aspect-square w-full bg-gray-100 overflow-hidden flex items-center justify-center">
                                    <div className={`absolute top-4 left-4 ${product.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'} text-[10px] font-black px-2.5 py-1 rounded-sm uppercase tracking-widest z-10 shadow-sm`}>
                                        {product.status}
                                    </div>
                                    <img
                                        src={product.imageUrl}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="p-5 flex flex-col flex-1 bg-white rounded-t-2xl -mt-4 relative z-20">
                                    <h3 className="text-base font-bold text-[#333333] leading-tight mb-2.5 line-clamp-1">
                                        {product.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-3.5">
                                        <span className="text-[10px] font-bold text-gray-600 border border-gray-200 rounded px-2 py-0.5 uppercase tracking-wider">
                                            {product.category}
                                        </span>
                                    </div>

                                    <div className="flex items-center mb-5 text-sm text-gray-500">
                                        <div className="flex space-x-[2px] mr-2">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="font-semibold text-gray-700 mr-1.5 text-[13px]">{product.rating}</span>
                                        <span className="text-xs">({product.reviewCount})</span>
                                    </div>

                                    <div className="mt-auto flex items-end justify-between mb-5">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Price</span>
                                            <span className="text-xl font-black text-[#333333] leading-none tracking-tight">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Edit & Delete Action Buttons */}
                                    <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-100">
                                        <button className="flex items-center justify-center gap-2 py-2.5 bg-gray-50 hover:bg-black hover:text-white text-gray-700 text-xs font-bold rounded-xl transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5">
                                            <FaEdit className="w-3.5 h-3.5" /> Edit
                                        </button>
                                        <button className="flex items-center justify-center gap-2 py-2.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 text-xs font-bold rounded-xl transition-all duration-300 ease-out hover:shadow-[0_8px_20px_rgb(220,38,38,0.3)] hover:-translate-y-0.5">
                                            <FaTrash className="w-3 h-3" /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Manage Inventory Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-gray-900">Manage Inventory</h2>
                        <button
                            onClick={() => setShowAllInventory(!showAllInventory)}
                            className="text-[13px] font-bold text-gray-600 hover:text-black transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                        >
                            {showAllInventory ? 'Show Less' : 'View All'}
                        </button>
                    </div>

                    <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 p-5 md:p-6 border-b border-gray-100 bg-gray-50/50 text-xs font-black text-gray-500 uppercase tracking-wider">
                            <div className="col-span-6 md:col-span-6">Product</div>
                            <div className="col-span-3 md:col-span-3 text-center">Available Quantity</div>
                            <div className="col-span-3 md:col-span-3 text-right">Action</div>
                        </div>

                        {/* Inventory Rows */}
                        <div className="divide-y divide-gray-50">
                            {displayedInventory.map(product => (
                                <div key={product.id} className="grid grid-cols-12 gap-4 p-5 md:p-6 items-center hover:bg-gray-50/50 transition-colors">
                                    <div className="col-span-6 md:col-span-6 flex items-center gap-3 sm:gap-4">
                                        <img src={product.imageUrl} alt={product.title} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shadow-sm shrink-0" />
                                        <div>
                                            <p className="text-[13px] sm:text-[14px] font-bold text-gray-900 line-clamp-1 mb-1">{product.title}</p>
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{product.category}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-3 md:col-span-3 text-center font-black text-gray-800 text-[15px]">
                                        {product.quantity}
                                    </div>
                                    <div className="col-span-3 md:col-span-3 text-right">
                                        <button
                                            onClick={() => openStockModal(product)}
                                            className="px-3 md:px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-[11px] sm:text-xs font-bold rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5 w-full md:w-auto"
                                        >
                                            Update Stock
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Update Stock Modal */}
                {stockModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop overlay */}
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setStockModalOpen(false)}
                        ></div>

                        {/* Modal Content */}
                        <div className="bg-white rounded-[2rem] p-6 sm:p-8 max-w-md w-full shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200">
                            <h3 className="text-2xl font-black text-gray-900 mb-2">Update Stock</h3>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                                Set the new available inventory for <span className="font-bold text-gray-800">"{selectedProductStock?.title}"</span>.
                            </p>

                            <div className="mb-8">
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-3">New Quantity</label>
                                <input
                                    type="number"
                                    placeholder="Add New Stock Quantity for this product"
                                    defaultValue={selectedProductStock?.quantity}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all text-[15px] font-medium"
                                />
                            </div>

                            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                                <button
                                    onClick={() => setStockModalOpen(false)}
                                    className="px-6 py-3.5 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors text-[13px] w-full sm:w-auto"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setStockModalOpen(false)}
                                    className="px-6 py-3.5 rounded-full font-bold bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[13px] w-full sm:w-auto"
                                >
                                    Update Quantity
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}