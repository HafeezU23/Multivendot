import { useState } from "react";
import { useNavigate } from "react-router";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";

const tableData = [{
    id: 1,
    name: "MacBook Pro 13”",
    placedOrders: 152,
    image: "/images/product/product-01.jpg"
}, {
    id: 2,
    name: "Apple Watch Ultra",
    placedOrders: 84,
    image: "/images/product/product-02.jpg"
}, {
    id: 3,
    name: "iPhone 15 Pro Max",
    placedOrders: 321,
    image: "/images/product/product-03.jpg"
}, {
    id: 4,
    name: "iPad Pro 3rd Gen",
    placedOrders: 115,
    image: "/images/product/product-04.jpg"
}, {
    id: 5,
    name: "AirPods Pro",
    placedOrders: 420,
    image: "/images/product/product-05.jpg"
}];

export default function TopProducts() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = tableData
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => b.placedOrders - a.placedOrders);

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Top Products
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
            
            <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[400px] scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
                
                {/* Desktop Table View */}
                <div className="hidden sm:block">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                            <TableRow>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Products
                                </TableCell>
                                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Placed Orders
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
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">{product.placedOrders}</span> Orders
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge size="sm" color="success">
                                            <button onClick={(e) => { e.stopPropagation(); console.log("See in Store Clicked"); }}>
                                                See in Store
                                            </button>
                                        </Badge>
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
                            <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className={`flex flex-col py-4 gap-4 ${index !== tableData.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''} transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg px-2`}>
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
                                            <span className="text-gray-500 text-xs dark:text-gray-400">
                                                Placed: <span className="font-semibold text-gray-800 dark:text-gray-200">{product.placedOrders}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <Badge size="sm" color="success">
                                        <button onClick={(e) => { e.stopPropagation(); console.log("See in Store Clicked"); }}>
                                            See in Store
                                        </button>
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>

            </div>
        </div>
    );
}