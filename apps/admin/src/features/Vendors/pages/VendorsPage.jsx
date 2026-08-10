import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVendorsApplicationsSearch, setVendorsActiveSearch, setVendorsPayoutsSearch } from '../../../redux/slices/searchSlice';
import { Search, CheckCircle, XCircle, MoreVertical, Ban, AlertTriangle, Eye, DollarSign, Clock, FileText } from 'lucide-react';

const VendorsPage = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const dispatch = useDispatch();
  const searchTerms = useSelector(state => state.search);
  const { applications, activeVendors, payouts } = useSelector(state => state.vendors);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    if (activeTab === 'applications') dispatch(setVendorsApplicationsSearch(val));
    else if (activeTab === 'active') dispatch(setVendorsActiveSearch(val));
    else if (activeTab === 'payouts') dispatch(setVendorsPayoutsSearch(val));
  };

  const currentSearchTerm = activeTab === 'applications'
    ? searchTerms.vendorsApplications 
    : activeTab === 'active' 
      ? searchTerms.vendorsActive 
      : searchTerms.vendorsPayouts;

  const filteredApplications = applications.filter(a => 
    a.id.toLowerCase().includes(searchTerms.vendorsApplications.toLowerCase()) ||
    a.name.toLowerCase().includes(searchTerms.vendorsApplications.toLowerCase()) ||
    a.owner.toLowerCase().includes(searchTerms.vendorsApplications.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerms.vendorsApplications.toLowerCase())
  );

  const filteredActiveVendors = activeVendors.filter(v => 
    v.id.toLowerCase().includes(searchTerms.vendorsActive.toLowerCase()) ||
    v.name.toLowerCase().includes(searchTerms.vendorsActive.toLowerCase()) ||
    v.owner.toLowerCase().includes(searchTerms.vendorsActive.toLowerCase()) ||
    v.email.toLowerCase().includes(searchTerms.vendorsActive.toLowerCase())
  );

  const filteredPayouts = payouts.filter(p => 
    p.vendor.toLowerCase().includes(searchTerms.vendorsPayouts.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerms.vendorsPayouts.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black">Vendor Management</h1>
          <p className="text-gray-500 text-sm mt-1">Approve applications, manage accounts, and process payouts.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search vendors..." 
              value={currentSearchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all w-full sm:w-auto" 
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 border-b border-gray-200 overflow-x-auto">
        <button onClick={() => setActiveTab('applications')} className={`pb-4 px-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'applications' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          Applications <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-bold">{applications.length}</span>
        </button>
        <button onClick={() => setActiveTab('active')} className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'active' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>Active Vendors</button>
        <button onClick={() => setActiveTab('payouts')} className={`pb-4 px-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'payouts' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}>
          Payouts <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold">3</span>
        </button>
      </div>

      {/* APPLICATIONS TAB */}
      {activeTab === 'applications' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
            <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Application</th>
                <th className="px-6 py-4 font-medium">Owner / Email</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Docs</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-bold text-black block">{app.name}</span>
                    <span className="text-gray-400 text-xs">{app.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium block">{app.owner}</span>
                    <span className="text-gray-400 text-xs">{app.email}</span>
                  </td>
                  <td className="px-6 py-4"><span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs font-medium">{app.category}</span></td>
                  <td className="px-6 py-4 text-gray-500">{app.date}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 text-blue-600 hover:underline text-xs font-medium"><FileText size={14} /> {app.documents} files</button>
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="flex items-center gap-1.5 text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-md font-medium transition-colors border border-transparent hover:border-green-200">
                      <CheckCircle size={16} /> Approve
                    </button>
                    <button className="flex items-center gap-1.5 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md font-medium transition-colors border border-transparent hover:border-red-200">
                      <XCircle size={16} /> Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      )}

      {/* ACTIVE VENDORS TAB */}
      {activeTab === 'active' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
            <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">GMV</th>
                <th className="px-6 py-4 font-medium">Products</th>
                <th className="px-6 py-4 font-medium">Rating</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredActiveVendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-bold text-black block">{vendor.name}</span>
                    <span className="text-gray-400 text-xs">{vendor.id} • Joined {vendor.joined}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium block">{vendor.owner}</span>
                    <span className="text-gray-400 text-xs">{vendor.email}</span>
                  </td>
                  <td className="px-6 py-4 text-green-600 font-bold">{vendor.revenue}</td>
                  <td className="px-6 py-4">{vendor.products}</td>
                  <td className="px-6 py-4">
                    <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded-md text-xs">⭐ {vendor.rating}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      vendor.status === 'Active' ? 'bg-green-100 text-green-700' : 
                      vendor.status === 'Warned' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-1.5">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View Details"><Eye size={18} /></button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors" title="Verify"><CheckCircle size={18} /></button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors" title="Warn Vendor"><AlertTriangle size={18} /></button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Suspend Vendor"><Ban size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      )}

      {/* PAYOUTS TAB */}
      {activeTab === 'payouts' && (
        <div className="space-y-6">
          {/* Payout Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-xs font-medium mb-1">Pending Payouts</p>
              <p className="text-2xl font-black text-black">$9,566.75</p>
              <p className="text-amber-600 text-xs font-bold mt-1 flex items-center gap-1"><Clock size={12} /> 3 payouts due</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-xs font-medium mb-1">Commission Withheld</p>
              <p className="text-2xl font-black text-black">$2,456.25</p>
              <p className="text-green-600 text-xs font-bold mt-1 flex items-center gap-1"><DollarSign size={12} /> Platform revenue</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-xs font-medium mb-1">Completed This Month</p>
              <p className="text-2xl font-black text-black">$4,352.00</p>
              <p className="text-gray-400 text-xs font-bold mt-1">1 payout processed</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
              <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Payout ID</th>
                  <th className="px-6 py-4 font-medium">Vendor</th>
                  <th className="px-6 py-4 font-medium">Period</th>
                  <th className="px-6 py-4 font-medium">Gross</th>
                  <th className="px-6 py-4 font-medium">Commission</th>
                  <th className="px-6 py-4 font-medium">Net Payout</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredPayouts.map((payout) => (
                  <tr key={payout.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-black">{payout.id}</td>
                    <td className="px-6 py-4 font-medium">{payout.vendor}</td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{payout.period}</td>
                    <td className="px-6 py-4">{payout.amount}</td>
                    <td className="px-6 py-4 text-red-500 font-medium">-{payout.commission}</td>
                    <td className="px-6 py-4 font-bold text-green-600">{payout.net}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        payout.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        payout.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {payout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {payout.status === 'Pending' && (
                        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium text-xs hover:bg-gray-800 transition-colors">
                          Process Payout
                        </button>
                      )}
                      {payout.status === 'Completed' && (
                        <span className="text-gray-400 text-xs">✓ Paid</span>
                      )}
                      {payout.status === 'Processing' && (
                        <span className="text-blue-500 text-xs font-medium flex items-center justify-end gap-1"><Clock size={12} /> In progress</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div></div>
        </div>
      )}
    </div>
  );
};

export default VendorsPage;
