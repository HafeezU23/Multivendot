import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByDate } from '../../../redux/slices/dashboardSlice';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { 
  DollarSign, Users, Store, TrendingUp, TrendingDown, 
  ShoppingBag, Package, ArrowUpRight, ArrowDownRight, CalendarDays,
  UserMinus, Crown, Percent 
} from 'lucide-react';

const COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

// --- COMPONENTS ---
const StatCard = ({ title, value, icon, trend, trendLabel, iconBg }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-3">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg || 'bg-blue-50 text-blue-600'}`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
        trend.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'
      }`}>
        {trend.startsWith('+') ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {trend}
      </div>
    </div>
    <h3 className="text-gray-500 text-xs font-medium mb-0.5">{title}</h3>
    <p className="text-2xl font-black text-black">{value}</p>
    {trendLabel && <p className="text-gray-400 text-xs mt-1">{trendLabel}</p>}
  </div>
);

const DashboardPage = () => {
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-07-31');
  const dispatch = useDispatch();
  
  const { summaryStats, revenueData, vendorData, categoryBreakdown, topProducts, topVendors } = useSelector(state => state.dashboard);

  const handleApplyFilters = () => {
    dispatch(filterByDate({ startDate, endDate }));
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header + Date Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black mb-1">Platform Analytics</h1>
          <p className="text-gray-500 text-sm">Real-time overview of your marketplace performance.</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 shadow-sm overflow-x-auto">
          <CalendarDays size={18} className="text-blue-600 shrink-0" />
          <input 
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-sm font-medium text-black outline-none bg-transparent min-w-[120px]"
          />
          <span className="text-gray-300 shrink-0">→</span>
          <input 
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-sm font-medium text-black outline-none bg-transparent min-w-[120px]"
          />
          <button 
            onClick={handleApplyFilters}
            className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors shrink-0"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Row 1: Key Stat Cards (GMV, Active Vendors, Total Orders, Commission, Churn, Users) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard title="GMV (Total Sales)" value={summaryStats.gmv} icon={<DollarSign size={20} />} trend={summaryStats.gmvTrend} trendLabel="vs last period" iconBg="bg-blue-50 text-blue-600" />
        <StatCard title="Active Vendors" value={summaryStats.activeVendors} icon={<Store size={20} />} trend={summaryStats.activeVendorsTrend} trendLabel="vs last period" iconBg="bg-purple-50 text-purple-600" />
        <StatCard title="Total Orders" value={summaryStats.totalOrders} icon={<ShoppingBag size={20} />} trend={summaryStats.totalOrdersTrend} trendLabel="Across all vendors" iconBg="bg-green-50 text-green-600" />
        <StatCard title="Commission Earned" value={summaryStats.commission} icon={<Percent size={20} />} trend={summaryStats.commissionTrend} trendLabel="avg rate" iconBg="bg-amber-50 text-amber-600" />
        <StatCard title="Vendor Churn" value={summaryStats.churn} icon={<UserMinus size={20} />} trend={summaryStats.churnTrend} trendLabel="Vendors left" iconBg="bg-red-50 text-red-500" />
        <StatCard title="Total Users" value={summaryStats.users} icon={<Users size={20} />} trend={summaryStats.usersTrend} trendLabel="Buyers registered" iconBg="bg-cyan-50 text-cyan-600" />
      </div>

      {/* Row 2: GMV + Commission Revenue Chart (main) + Category Breakdown Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">GMV & Commission Revenue</h2>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-blue-600 rounded-full"></span> GMV</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-cyan-400 rounded-full"></span> Commission</span>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGMV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCommission" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} cursor={{stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '4 4'}} />
                <Area type="monotone" dataKey="gmv" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGMV)" />
                <Area type="monotone" dataKey="commission" stroke="#22D3EE" strokeWidth={2.5} fillOpacity={1} fill="url(#colorCommission)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold mb-6">Sales by Category</h2>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryBreakdown} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                  {categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {categoryBreakdown.map((cat, i) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: COLORS[i]}}></span>
                  {cat.name}
                </span>
                <span className="font-bold">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Vendor Activity (new vs churned) + Orders Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Vendor Growth vs Churn</h2>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> New Vendors</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-red-400 rounded-full"></span> Churned</span>
            </div>
          </div>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vendorData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="newVendors" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="churned" fill="#F87171" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold mb-6">Orders Trend</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} cursor={{stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '4 4'}} />
                <Line type="monotone" dataKey="orders" stroke="#2563EB" strokeWidth={3} dot={{fill: '#2563EB', r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 4: Top Products + Top Vendors Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 lg:p-6 pb-3 lg:pb-4 flex items-center justify-between">
            <h2 className="text-base lg:text-lg font-bold flex items-center gap-2"><Package size={20} className="text-blue-600" /> Top Selling Products</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[500px]">
              <thead className="bg-gray-50 text-gray-500 border-y border-gray-100">
                <tr>
                  <th className="px-4 lg:px-6 py-3 font-medium">#</th>
                  <th className="px-4 lg:px-6 py-3 font-medium">Product</th>
                  <th className="px-4 lg:px-6 py-3 font-medium">Vendor</th>
                  <th className="px-4 lg:px-6 py-3 font-medium text-right">Sales</th>
                  <th className="px-4 lg:px-6 py-3 font-medium text-right">Units</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topProducts.map((p) => (
                  <tr key={p.rank} className="hover:bg-gray-50">
                    <td className="px-4 lg:px-6 py-3">
                      <span className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold ${
                        p.rank <= 3 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>{p.rank}</span>
                    </td>
                    <td className="px-4 lg:px-6 py-3 font-bold text-black">{p.name}</td>
                    <td className="px-4 lg:px-6 py-3 text-gray-500">{p.vendor}</td>
                    <td className="px-4 lg:px-6 py-3 text-right font-bold text-green-600">{p.sales}</td>
                    <td className="px-4 lg:px-6 py-3 text-right text-gray-500">{p.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 lg:p-6 pb-3 lg:pb-4 flex items-center justify-between">
            <h2 className="text-base lg:text-lg font-bold flex items-center gap-2"><Crown size={20} className="text-amber-500" /> Top Performing Vendors</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[500px]">
              <thead className="bg-gray-50 text-gray-500 border-y border-gray-100">
                <tr>
                  <th className="px-4 lg:px-6 py-3 font-medium">#</th>
                  <th className="px-4 lg:px-6 py-3 font-medium">Vendor</th>
                  <th className="px-4 lg:px-6 py-3 font-medium">Products</th>
                  <th className="px-4 lg:px-6 py-3 font-medium text-right">GMV</th>
                  <th className="px-4 lg:px-6 py-3 font-medium text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topVendors.map((v) => (
                  <tr key={v.rank} className="hover:bg-gray-50">
                    <td className="px-4 lg:px-6 py-3">
                      <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold bg-amber-100 text-amber-700">{v.rank}</span>
                    </td>
                    <td className="px-4 lg:px-6 py-3 font-bold text-black">{v.name}</td>
                    <td className="px-4 lg:px-6 py-3 text-gray-500">{v.products} listings</td>
                    <td className="px-4 lg:px-6 py-3 text-right font-bold text-green-600">{v.gmv}</td>
                    <td className="px-4 lg:px-6 py-3 text-right">
                      <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded-md text-xs">⭐ {v.rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
