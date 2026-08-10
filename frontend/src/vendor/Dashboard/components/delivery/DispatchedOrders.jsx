import React from "react";
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
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Dispatched Orders
          </h3>
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

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {dispatchedOrders.map((order) => (
                <TableRow key={order.id} className="">
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
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile List View */}
        <div className="block sm:hidden flex-col gap-4">
          {dispatchedOrders.map((order, index) => (
            <div key={order.id} className={`flex flex-col py-4 gap-4 ${index !== dispatchedOrders.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
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
          ))}
        </div>
        
      </div>
    </div>
  );
}
