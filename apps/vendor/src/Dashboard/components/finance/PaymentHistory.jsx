import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";

const payments = [
  {
    id: "TRX-1092-A",
    orderId: "PAQ-327-P24",
    amount: "$239.00",
    method: "Online",
    date: "14 Feb 2026",
    status: "Completed",
    customer: {
      email: "alex@example.com",
      image: "/images/user/user-17.jpg"
    }
  },
  {
    id: "TRX-8821-B",
    orderId: "PAQ-892-K99",
    amount: "$120.50",
    method: "Cash on Delivery",
    date: "12 Feb 2026",
    status: "Pending",
    customer: {
      email: "rachel.green@example.com",
      image: "/images/user/user-19.jpg"
    }
  },
  {
    id: "TRX-5532-C",
    orderId: "PAQ-104-M11",
    amount: "$879.00",
    method: "Online",
    date: "10 Feb 2026",
    status: "Completed",
    customer: {
      email: "david.w@example.com",
      image: "/images/user/user-20.jpg"
    }
  },
  {
    id: "TRX-2291-D",
    orderId: "PAQ-445-Z22",
    amount: "$45.00",
    method: "Cash on Delivery",
    date: "09 Feb 2026",
    status: "Completed",
    customer: {
      email: "sarah.w@example.com",
      image: "/images/user/user-18.jpg"
    }
  }
];

export default function PaymentHistory() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Payment History
          </h3>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[500px] scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700">
        
        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <Table>
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Customer
                </TableCell>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Order ID
                </TableCell>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Amount
                </TableCell>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Method
                </TableCell>
                <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {payments.map((payment) => (
                <TableRow key={payment.id} className="">
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                        <img src={payment.customer.image} className="h-10 w-10 object-cover" alt="Customer" onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${payment.customer.email.charAt(0)}&background=random`;
                        }} />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium text-theme-sm dark:text-gray-200">
                          {payment.customer.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {payment.orderId}
                  </TableCell>
                  <TableCell className="py-3 text-gray-800 font-semibold text-theme-sm dark:text-gray-200">
                    {payment.amount}
                  </TableCell>
                  <TableCell className="py-3 text-theme-sm">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                        payment.method === "Online" 
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400" 
                          : "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                      }`}>
                      {payment.method === "Online" ? (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {payment.method}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <Badge size="sm" color={payment.status === "Completed" ? "success" : "warning"}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile List View */}
        <div className="block lg:hidden flex-col gap-4">
          {payments.map((payment, index) => (
            <div key={payment.id} className={`flex flex-col py-4 gap-3 ${index !== payments.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <img src={payment.customer.image} className="h-full w-full object-cover" alt="Customer" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <p className="font-medium text-gray-800 text-sm dark:text-white/90 truncate">
                      {payment.customer.email}
                    </p>
                    <p className="text-gray-500 text-xs dark:text-gray-400">
                      Order: {payment.orderId}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    {payment.amount}
                  </p>
                  <Badge size="sm" color={payment.status === "Completed" ? "success" : "warning"} className="mt-1">
                    {payment.status}
                  </Badge>
                </div>
              </div>
              
              {/* Method badge in mobile */}
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-400">{payment.date}</span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                    payment.method === "Online" 
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400" 
                      : "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                  }`}>
                  {payment.method}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
