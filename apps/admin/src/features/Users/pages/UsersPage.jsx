import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersBuyersSearch, setUsersVendorsSearch } from '../../../redux/slices/searchSlice';
import { Search, Ban, AlertTriangle, UserCheck, Eye, Shield, Mail } from 'lucide-react';

const UsersPage = () => {
  const [activeTab, setActiveTab] = useState('buyers');
  const dispatch = useDispatch();
  const searchTerms = useSelector(state => state.search);
  const { users, vendorAccounts } = useSelector(state => state.users);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    if (activeTab === 'buyers') dispatch(setUsersBuyersSearch(val));
    else if (activeTab === 'vendors') dispatch(setUsersVendorsSearch(val));
  };

  const currentSearchTerm = activeTab === 'buyers' 
    ? searchTerms.usersBuyers 
    : searchTerms.usersVendors;

  const filteredUsers = users.filter(u => 
    u.id.toLowerCase().includes(searchTerms.usersBuyers.toLowerCase()) ||
    u.name.toLowerCase().includes(searchTerms.usersBuyers.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerms.usersBuyers.toLowerCase())
  );

  const filteredVendorAccounts = vendorAccounts.filter(v => 
    v.id.toLowerCase().includes(searchTerms.usersVendors.toLowerCase()) ||
    v.name.toLowerCase().includes(searchTerms.usersVendors.toLowerCase()) ||
    v.email.toLowerCase().includes(searchTerms.usersVendors.toLowerCase()) ||
    v.owner.toLowerCase().includes(searchTerms.usersVendors.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black">Account Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all buyer and vendor accounts. Ban, warn, or verify users.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={currentSearchTerm}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all w-full sm:w-72" 
          />
        </div>
      </div>

      <div className="flex gap-6 border-b border-gray-200">
        <button onClick={() => setActiveTab('buyers')} className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'buyers' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          Buyer Accounts
        </button>
        <button onClick={() => setActiveTab('vendors')} className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'vendors' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          Vendor Accounts
        </button>
      </div>

      {/* BUYERS TAB */}
      {activeTab === 'buyers' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
            <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Orders</th>
                <th className="px-6 py-4 font-medium">Total Spent</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium">Last Login</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-bold text-black block">{user.name}</span>
                    <span className="text-gray-400 text-xs">{user.email}</span>
                  </td>
                  <td className="px-6 py-4 font-medium">{user.orders}</td>
                  <td className="px-6 py-4 font-bold text-green-600">{user.spent}</td>
                  <td className="px-6 py-4 text-gray-500">{user.joined}</td>
                  <td className="px-6 py-4 text-gray-500">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 
                      user.status === 'Verified' ? 'bg-blue-100 text-blue-700' :
                      user.status === 'Warned' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-1.5">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View Profile"><Eye size={18} /></button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors" title="Verify User"><UserCheck size={18} /></button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors" title="Warn User"><AlertTriangle size={18} /></button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Ban User"><Ban size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      )}

      {/* VENDOR ACCOUNTS TAB */}
      {activeTab === 'vendors' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
            <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Owner / Email</th>
                <th className="px-6 py-4 font-medium">Products</th>
                <th className="px-6 py-4 font-medium">Disputes</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredVendorAccounts.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-bold text-black block">{vendor.name}</span>
                    <span className="text-gray-400 text-xs">{vendor.id} • Joined {vendor.joined}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium block">{vendor.owner}</span>
                    <span className="text-gray-400 text-xs">{vendor.email}</span>
                  </td>
                  <td className="px-6 py-4">{vendor.products}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${vendor.disputes > 3 ? 'text-red-600' : 'text-gray-500'}`}>{vendor.disputes}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      vendor.status === 'Active' ? 'bg-green-100 text-green-700' : 
                      vendor.status === 'Suspended' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-1.5">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View"><Eye size={18} /></button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors" title="Verify"><UserCheck size={18} /></button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors" title="Warn"><AlertTriangle size={18} /></button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Ban"><Ban size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      )}
    </div>
  );
};

export default UsersPage;
