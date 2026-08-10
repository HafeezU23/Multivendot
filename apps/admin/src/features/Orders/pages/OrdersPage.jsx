import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrdersSearch, setTransactionsSearch, setDisputesSearch } from '../../../redux/slices/searchSlice';
import { Search, Eye, ShieldAlert, CheckCircle, Clock, DollarSign, Package, AlertTriangle } from 'lucide-react';

const statusColors = {
  'Delivered': 'bg-green-100 text-green-700',
  'Processing': 'bg-blue-100 text-blue-700',
  'Shipped': 'bg-purple-100 text-purple-700',
  'Pending': 'bg-amber-100 text-amber-700',
  'Cancelled': 'bg-red-100 text-red-700',
};

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const dispatch = useDispatch();
  const searchTerms = useSelector(state => state.search);
  const { orders, disputes, transactions } = useSelector(state => state.orders);
  
  const [limits, setLimits] = useState({
    all: 10,
    transactions: 10,
    disputes: 10
  });

  const handleSearchChange = (e) => {
    const val = e.target.value;
    if (activeTab === 'all') dispatch(setOrdersSearch(val));
    else if (activeTab === 'transactions') dispatch(setTransactionsSearch(val));
    else if (activeTab === 'disputes') dispatch(setDisputesSearch(val));
  };

  const currentSearchTerm = activeTab === 'all' 
    ? searchTerms.orders 
    : activeTab === 'transactions' 
      ? searchTerms.transactions 
      : searchTerms.disputes;

  const handleViewMore = () => {
    setLimits(prev => ({
      ...prev,
      [activeTab]: prev[activeTab] + 10
    }));
  };

  const filteredOrders = orders.filter(o => 
    o.id.toLowerCase().includes(searchTerms.orders.toLowerCase()) ||
    o.customer.toLowerCase().includes(searchTerms.orders.toLowerCase()) ||
    o.vendor.toLowerCase().includes(searchTerms.orders.toLowerCase())
  );

  const filteredTransactions = transactions.filter(t =>
    t.id.toLowerCase().includes(searchTerms.transactions.toLowerCase()) ||
    t.orderId.toLowerCase().includes(searchTerms.transactions.toLowerCase()) ||
    t.vendor.toLowerCase().includes(searchTerms.transactions.toLowerCase())
  );

  const filteredDisputes = disputes.filter(d =>
    d.id.toLowerCase().includes(searchTerms.disputes.toLowerCase()) ||
    d.orderId.toLowerCase().includes(searchTerms.disputes.toLowerCase()) ||
    d.customer.toLowerCase().includes(searchTerms.disputes.toLowerCase()) ||
    d.vendor.toLowerCase().includes(searchTerms.disputes.toLowerCase())
  );

  const displayedOrders = filteredOrders.slice(0, limits.all);
  const displayedTransactions = filteredTransactions.slice(0, limits.transactions);
  const displayedDisputes = filteredDisputes.slice(0, limits.disputes);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black">Orders, Transactions & Disputes</h1>
          <p className="text-gray-500 text-sm mt-1">Monitor all platform activity and resolve buyer-vendor conflicts.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder={`Search ${activeTab} by ID, name...`}
            value={currentSearchTerm}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all w-full sm:w-72" 
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-xs font-medium mb-1">Total Orders</p>
          <p className="text-2xl font-black text-black">5</p>
          <p className="text-green-600 text-xs font-bold mt-1">Today's snapshot</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-xs font-medium mb-1">Revenue</p>
          <p className="text-2xl font-black text-black">$1,859.69</p>
          <p className="text-blue-600 text-xs font-bold mt-1">Gross value</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-xs font-medium mb-1">Open Disputes</p>
          <p className="text-2xl font-black text-red-600">3</p>
          <p className="text-red-500 text-xs font-bold mt-1">Requires action</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-xs font-medium mb-1">Cancellations</p>
          <p className="text-2xl font-black text-black">1</p>
          <p className="text-gray-400 text-xs font-bold mt-1">This period</p>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 border-b border-gray-200 overflow-x-auto">
        <button onClick={() => setActiveTab('all')} className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'all' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>All Orders</button>
        <button onClick={() => setActiveTab('transactions')} className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'transactions' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>Transactions</button>
        <button onClick={() => setActiveTab('disputes')} className={`pb-4 px-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'disputes' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          Disputes <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">{disputes.length}</span>
        </button>
      </div>

      {/* ALL ORDERS TAB */}
      {activeTab === 'all' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
              <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Order ID</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Vendor</th>
                  <th className="px-6 py-4 font-medium">Items</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Payment</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 font-medium text-right">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {displayedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-black">{order.id}</td>
                    <td className="px-6 py-4 font-medium">{order.customer}</td>
                    <td className="px-6 py-4 text-gray-500">{order.vendor}</td>
                    <td className="px-6 py-4">{order.items}</td>
                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                    <td className="px-6 py-4"><span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">{order.payment}</span></td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold">{order.total}</td>
                    <td className="px-6 py-4 flex justify-end">
                      <button className="text-gray-400 hover:text-black transition-colors"><Eye size={18} /></button>
                    </td>
                  </tr>
                ))}
                {displayedOrders.length === 0 && (
                  <tr>
                    <td colSpan="9" className="px-6 py-8 text-center text-gray-500">No orders found matching "{searchTerms.orders}"</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div></div>
          {filteredOrders.length > limits.all && (
            <div className="flex justify-center">
              <button onClick={handleViewMore} className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                View More ({filteredOrders.length - limits.all})
              </button>
            </div>
          )}
        </div>
      )}

      {/* TRANSACTIONS TAB */}
      {activeTab === 'transactions' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
              <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Transaction ID</th>
                  <th className="px-6 py-4 font-medium">Order ID</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Vendor</th>
                  <th className="px-6 py-4 font-medium">Gross</th>
                  <th className="px-6 py-4 font-medium">Commission</th>
                  <th className="px-6 py-4 font-medium">Net</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {displayedTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-black">{txn.id}</td>
                    <td className="px-6 py-4 font-medium text-blue-600">{txn.orderId}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${txn.type === 'Sale' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {txn.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{txn.vendor}</td>
                    <td className="px-6 py-4 font-medium">{txn.amount}</td>
                    <td className="px-6 py-4 text-amber-600 font-medium">{txn.commission}</td>
                    <td className={`px-6 py-4 font-bold ${txn.net.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{txn.net}</td>
                    <td className="px-6 py-4 text-gray-500">{txn.date}</td>
                  </tr>
                ))}
                {displayedTransactions.length === 0 && (
                  <tr>
                    <td colSpan="8" className="px-6 py-8 text-center text-gray-500">No transactions found matching "{searchTerms.transactions}"</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div></div>
          {filteredTransactions.length > limits.transactions && (
            <div className="flex justify-center">
              <button onClick={handleViewMore} className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                View More ({filteredTransactions.length - limits.transactions})
              </button>
            </div>
          )}
        </div>
      )}

      {/* DISPUTES TAB */}
      {activeTab === 'disputes' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[800px]">
              <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Dispute</th>
                  <th className="px-6 py-4 font-medium">Order</th>
                  <th className="px-6 py-4 font-medium">Customer vs Vendor</th>
                  <th className="px-6 py-4 font-medium">Issue</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Age</th>
                  <th className="px-6 py-4 font-medium text-right">Resolve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {displayedDisputes.map((dispute) => (
                  <tr key={dispute.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-bold text-red-600 flex items-center gap-1.5">
                        <ShieldAlert size={16} /> {dispute.id}
                      </span>
                      <span className={`text-xs font-bold mt-1 inline-block px-2 py-0.5 rounded-full ${dispute.status === 'Escalated' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                        {dispute.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-blue-600">{dispute.orderId}</td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{dispute.customer}</span>
                      <span className="text-gray-400"> vs </span>
                      <span className="font-medium">{dispute.vendor}</span>
                    </td>
                    <td className="px-6 py-4 max-w-xs text-gray-600">{dispute.issue}</td>
                    <td className="px-6 py-4 font-bold">{dispute.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1 text-xs font-bold ${dispute.daysOpen > 7 ? 'text-red-600' : 'text-amber-600'}`}>
                        <Clock size={12} /> {dispute.daysOpen}d
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-2">
                      <button className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-red-200">
                        Refund Buyer
                      </button>
                      <button className="bg-gray-50 text-black hover:bg-gray-100 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-gray-200">
                        Favor Vendor
                      </button>
                    </td>
                  </tr>
                ))}
                {displayedDisputes.length === 0 && (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">No disputes found matching "{searchTerms.disputes}"</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div></div>
          {filteredDisputes.length > limits.disputes && (
            <div className="flex justify-center">
              <button onClick={handleViewMore} className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                View More ({filteredDisputes.length - limits.disputes})
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
