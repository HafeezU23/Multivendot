import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";
import { Modal } from "../ui/modal";

const tableData = [
  { id: 1, name: "Wireless Headphones", stock: 120, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 2, name: "Smart Watch Series 8", stock: 45, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  { id: 3, name: "Gaming Mouse RGB", stock: 300, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
  { id: 4, name: "Mechanical Keyboard", stock: 15, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
  { id: 5, name: "4K Web Camera", stock: 0, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" },
];

export default function StockHandler() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newStock, setNewStock] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = tableData.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const openModal = (product) => {
        setSelectedProduct(product);
        setNewStock(product.stock);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    };

    const handleUpdate = () => {
        // Logic to update stock goes here
        console.log(`Updated ${selectedProduct?.name} to ${newStock}`);
        closeModal();
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Stock Handler
                    </h3>
                </div>
                <div className="relative w-full sm:w-auto mt-2 sm:mt-0 group">
                    <input 
                        type="text" 
                        placeholder="Product Title" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-72 pl-11 pr-4 py-2.5 text-sm bg-white/50 backdrop-blur-md border border-gray-200/80 rounded-[27px] shadow-sm transition-all duration-300 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 hover:border-brand-300 hover:shadow-md dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:bg-gray-800 dark:hover:border-brand-600"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[400px] scroll-smooth pr-2 custom-scrollbar">
                
                {/* Desktop Table View */}
                <div className="hidden sm:block">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                            <TableRow>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Product
                                </TableCell>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Current Stock
                                </TableCell>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 transition-all duration-300 ease-in-out">
                            {filteredData.length === 0 ? (
                                <TableRow className="transition-all duration-300 ease-in-out">
                                    <TableCell colSpan={3} className="py-16 text-center text-gray-500 dark:text-gray-400 font-medium">
                                        No Result Found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map(product => (
                                    <TableRow key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <TableCell className="py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-[50px] w-[50px] overflow-hidden rounded-md border border-gray-100 dark:border-gray-800">
                                                <img src={product.image} className="h-full w-full object-cover p-1 bg-white" alt={product.name} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {product.name}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge size="sm" color={product.stock > 10 ? "success" : product.stock > 0 ? "warning" : "error"}>
                                            {product.stock} Units
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); openModal(product); }}
                                            className="rounded-lg border border-brand-500/20 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-100 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-500 dark:hover:bg-brand-500/20 transition-colors"
                                        >
                                            Update Stock
                                        </button>
                                    </TableCell>
                                </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile List View */}
                <div className="block sm:hidden flex-col gap-4 min-h-[200px] transition-all duration-300 ease-in-out">
                    {filteredData.length === 0 ? (
                        <div className="flex items-center justify-center h-32 text-gray-500 dark:text-gray-400 font-medium transition-all duration-300 ease-in-out">
                            No Result Found
                        </div>
                    ) : (
                        filteredData.map((product, index) => (
                            <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className={`flex flex-col py-4 gap-4 ${index !== filteredData.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''} transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg px-2`}>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md border border-gray-100 dark:border-gray-800 flex-shrink-0">
                                        <img src={product.image} className="h-full w-full object-cover p-1 bg-white" alt={product.name} />
                                    </div>
                                    <div className="flex flex-col min-w-0 flex-1">
                                        <p className="font-medium text-gray-800 text-sm dark:text-white/90 truncate">
                                            {product.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge size="sm" color={product.stock > 10 ? "success" : product.stock > 0 ? "warning" : "error"}>
                                                {product.stock} Units
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); openModal(product); }}
                                        className="rounded-lg border border-brand-500/20 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-100 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-500 dark:hover:bg-brand-500/20 transition-colors"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>

            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[400px] p-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
                            Update Stock
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {selectedProduct?.name}
                        </p>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            New Stock Quantity
                        </label>
                        <input 
                            type="number" 
                            value={newStock}
                            onChange={(e) => setNewStock(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-800 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white/90"
                            placeholder="Enter stock amount"
                        />
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-6">
                        <button 
                            onClick={closeModal}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleUpdate}
                            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
