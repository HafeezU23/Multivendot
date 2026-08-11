import React, { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newStock, setNewStock] = useState("");

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
                        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {tableData.map(product => (
                                <TableRow key={product.id} className="">
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
                                            onClick={() => openModal(product)}
                                            className="rounded-lg border border-brand-500/20 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-100 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-500 dark:hover:bg-brand-500/20 transition-colors"
                                        >
                                            Update Stock
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Mobile List View */}
                <div className="block sm:hidden flex-col gap-4">
                    {tableData.map((product, index) => (
                        <div key={product.id} className={`flex flex-col py-4 gap-4 ${index !== tableData.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
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
                                        onClick={() => openModal(product)}
                                        className="rounded-lg border border-brand-500/20 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-100 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-500 dark:hover:bg-brand-500/20 transition-colors"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
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
