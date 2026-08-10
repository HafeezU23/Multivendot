import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";

const pendingOrders = [
  {
    id: 1,
    product: {
      name: "MacBook Pro 13”",
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
      name: "Apple Watch Ultra",
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
      name: "iPhone 15 Pro Max",
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
      name: "iPad Pro 3rd Gen",
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

export default function OrderList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Pending Orders
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
              {pendingOrders.map((order) => (
                <TableRow key={order.id} className="">
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                        <img src={order.product.image} className="h-[50px] w-[50px] object-cover" alt={order.product.name} />
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
                    <Badge size="sm" color="warning">
                      <button onClick={() => console.log("Proceed for Delivery Clicked", order.id)}>
                        Dispatch Order
                      </button>
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="block sm:hidden flex flex-col gap-4">
          {pendingOrders.map((order) => (
            <div key={order.id} className="flex flex-col gap-3 p-4 bg-gray-50 border border-gray-100 rounded-xl dark:bg-gray-800/50 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-md flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <img src={order.product.image} className="h-full w-full object-cover" alt={order.product.name} />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">
                    {order.product.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <img src={order.customer.image} className="h-5 w-5 rounded-full object-cover flex-shrink-0" alt="Customer" onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${order.customer.email.charAt(0)}&background=random`;
                    }} />
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {order.customer.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex">
                <button 
                  onClick={() => console.log("Proceed for Delivery Clicked", order.id)}
                  className="w-full px-4 py-2.5 text-sm font-semibold text-warning-700 bg-warning-100 rounded-lg hover:bg-warning-200 dark:bg-warning-500/20 dark:text-warning-400 dark:hover:bg-warning-500/30 transition-colors text-center shadow-sm"
                >
                  Proceed for Delivery
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
