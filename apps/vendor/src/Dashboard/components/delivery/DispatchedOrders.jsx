import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";

const dispatchedOrders = [
  {
    id: 1,
    product: {
      name: "Wireless Noise-Cancelling Headphones",
      image: "/images/product/product-01.jpg"
    },
    customer: {
      email: "alex@example.com",
      image: "/images/user/user-17.jpg"
    }
  },
  {
    id: 2,
    product: {
      name: "Smart Home Hub 2.0",
      image: "/images/product/product-02.jpg"
    },
    customer: {
      email: "sarah.w@example.com",
      image: "/images/user/user-18.jpg"
    }
  },
  {
    id: 3,
    product: {
      name: "Ergonomic Office Chair",
      image: "/images/product/product-03.jpg"
    },
    customer: {
      email: "michael.j@example.com",
      image: "/images/user/user-19.jpg"
    }
  },
  {
    id: 4,
    product: {
      name: "Mechanical Gaming Keyboard",
      image: "/images/product/product-04.jpg"
    },
    customer: {
      email: "jessica.b@example.com",
      image: "/images/user/user-20.jpg"
    }
  },
  {
    id: 5,
    product: {
      name: "Samsung Galaxy S24 Ultra",
      image: "/images/product/product-01.jpg"
    },
    customer: {
      email: "ryan.k@example.com",
      image: "/images/user/user-17.jpg"
    }
  },
  {
    id: 6,
    product: {
      name: "Sony PlayStation 5",
      image: "/images/product/product-02.jpg"
    },
    customer: {
      email: "emma.stone@example.com",
      image: "/images/user/user-18.jpg"
    }
  }
];

export default function DispatchedOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredOrders = dispatchedOrders.filter(order => order.product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Dispatched Orders
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
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Product
                </TableCell>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Customer
                </TableCell>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 transition-all duration-300 ease-in-out">
              {filteredOrders.length === 0 ? (
                  <TableRow className="transition-all duration-300 ease-in-out">
                      <TableCell colSpan={3} className="py-16 text-center text-gray-500 dark:text-gray-400 font-medium">
                          No Result Found
                      </TableCell>
                  </TableRow>
              ) : (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id} className="transition-all duration-300 ease-in-out">
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md border border-gray-100 dark:border-gray-800">
                        <img src={order.product.image} className="h-full w-full object-cover p-1 bg-white" alt={order.product.name} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.product.name}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                        <img src={order.customer.image} className="h-10 w-10 object-cover" alt="Customer" onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${order.customer.email.charAt(0)}&background=random`;
                        }} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                          {order.customer.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <button 
                      onClick={() => console.log("Proceed to Delivery Clicked", order.id)}
                      className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-sm transition-all"
                    >
                      Proceed to Delivery
                    </button>
                  </TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile List View */}
        <div className="block sm:hidden flex-col gap-4 min-h-[200px] transition-all duration-300 ease-in-out">
          {filteredOrders.length === 0 ? (
              <div className="flex items-center justify-center h-32 text-gray-500 dark:text-gray-400 font-medium transition-all duration-300 ease-in-out">
                  No Result Found
              </div>
          ) : (
              filteredOrders.map((order, index) => (
                <div key={order.id} className={`flex flex-col py-4 gap-4 ${index !== filteredOrders.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''} transition-all duration-300 ease-in-out`}>
              <div className="flex items-start gap-3">
                <div className="h-[50px] w-[50px] overflow-hidden rounded-md border border-gray-100 dark:border-gray-800 flex-shrink-0">
                  <img src={order.product.image} className="h-full w-full object-cover p-1 bg-white" alt={order.product.name} />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <p className="font-medium text-gray-800 text-sm dark:text-white/90 truncate">
                    {order.product.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                     <img src={order.customer.image} className="h-4 w-4 rounded-full object-cover" alt="Customer" />
                     <p className="text-gray-500 text-xs dark:text-gray-400 truncate">
                       {order.customer.email}
                     </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => console.log("Proceed to Delivery Clicked", order.id)}
                className="w-full px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-sm transition-all"
              >
                Proceed to Delivery
              </button>
            </div>
          )))}
        </div>
        
      </div>
    </div>
  );
}
