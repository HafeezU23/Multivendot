import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summaryStats: {
    gmv: "$736,670", gmvTrend: "+18.2%",
    activeVendors: "1,204", activeVendorsTrend: "+2.3%",
    totalOrders: "11,010", totalOrdersTrend: "+12.5%",
    commission: "$110,500", commissionTrend: "+15.1%",
    churn: "30", churnTrend: "-2.1%",
    users: "45,231", usersTrend: "+5.4%"
  },
  revenueData: [
    { name: 'Jan', gmv: 82400, commission: 12360, orders: 1240 },
    { name: 'Feb', gmv: 95300, commission: 14295, orders: 1410 },
    { name: 'Mar', gmv: 78000, commission: 11700, orders: 1180 },
    { name: 'Apr', gmv: 102780, commission: 15417, orders: 1520 },
    { name: 'May', gmv: 118900, commission: 17835, orders: 1790 },
    { name: 'Jun', gmv: 124390, commission: 18658, orders: 1860 },
    { name: 'Jul', gmv: 134900, commission: 20235, orders: 2010 },
  ],
  vendorData: [
    { name: 'Jan', newVendors: 24, churned: 3 },
    { name: 'Feb', newVendors: 18, churned: 5 },
    { name: 'Mar', newVendors: 32, churned: 2 },
    { name: 'Apr', newVendors: 28, churned: 7 },
    { name: 'May', newVendors: 45, churned: 4 },
    { name: 'Jun', newVendors: 38, churned: 6 },
    { name: 'Jul', newVendors: 41, churned: 3 },
  ],
  categoryBreakdown: [
    { name: 'Electronics', value: 35 },
    { name: 'Fashion', value: 25 },
    { name: 'Home & Kitchen', value: 20 },
    { name: 'Beauty', value: 12 },
    { name: 'Sports', value: 8 },
  ],
  topProducts: [
    { rank: 1, name: 'AirPods Pro Max', vendor: 'TechHaven', sales: '$23,450', units: 312 },
    { rank: 2, name: 'Organic Face Serum', vendor: 'GlowUp Beauty', sales: '$18,230', units: 1456 },
    { rank: 3, name: 'Running Shoes X1', vendor: 'Fresh Kicks', sales: '$15,890', units: 530 },
    { rank: 4, name: 'Smart Home Hub', vendor: 'Gadget World', sales: '$12,340', units: 205 },
    { rank: 5, name: 'Bamboo Desk Set', vendor: 'EcoLiving', sales: '$9,820', units: 410 },
  ],
  topVendors: [
    { rank: 1, name: 'TechHaven', gmv: '$45,320', products: 89, rating: 4.8 },
    { rank: 2, name: 'GlowUp Beauty', gmv: '$38,100', products: 64, rating: 4.7 },
    { rank: 3, name: 'Fresh Kicks', gmv: '$29,450', products: 42, rating: 4.6 },
  ]
};

const formatCurrency = (val) => `$${Math.round(val).toLocaleString()}`;
const formatNumber = (val) => Math.round(val).toLocaleString();
const formatTrend = (val) => `${val >= 0 ? '+' : ''}${val.toFixed(1)}%`;

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    filterByDate: (state, action) => {
      // Simulate data changing by applying a random multiplier based on date string lengths or just Math.random
      // We'll use a pseudo-random multiplier between 0.5 and 1.5 to make it visibly different
      const mult = 0.5 + Math.random(); 
      
      // Update Summary Stats
      state.summaryStats = {
        gmv: formatCurrency(736670 * mult), gmvTrend: formatTrend(18.2 * (Math.random() * 2 - 1)),
        activeVendors: formatNumber(1204 * mult), activeVendorsTrend: formatTrend(2.3 * (Math.random() * 2 - 1)),
        totalOrders: formatNumber(11010 * mult), totalOrdersTrend: formatTrend(12.5 * (Math.random() * 2 - 1)),
        commission: formatCurrency(110500 * mult), commissionTrend: formatTrend(15.1 * (Math.random() * 2 - 1)),
        churn: formatNumber(30 * mult), churnTrend: formatTrend(-2.1 * (Math.random() * 2 - 1)),
        users: formatNumber(45231 * mult), usersTrend: formatTrend(5.4 * (Math.random() * 2 - 1))
      };

      // Update Revenue Data
      state.revenueData = state.revenueData.map(d => ({
        ...d,
        gmv: Math.round(d.gmv * mult),
        commission: Math.round(d.commission * mult),
        orders: Math.round(d.orders * mult)
      }));

      // Update Vendor Data
      state.vendorData = state.vendorData.map(d => ({
        ...d,
        newVendors: Math.round(d.newVendors * mult),
        churned: Math.round(d.churned * mult)
      }));

      // Update Category Breakdown (distribute 100 randomly)
      let remaining = 100;
      state.categoryBreakdown = state.categoryBreakdown.map((d, i) => {
        if (i === state.categoryBreakdown.length - 1) return { ...d, value: remaining };
        const val = Math.floor(Math.random() * (remaining * 0.5)) + 5;
        remaining -= val;
        return { ...d, value: val };
      });
      
      // Update Top Products
      state.topProducts = state.topProducts.map(d => ({
        ...d,
        sales: formatCurrency(parseInt(d.sales.replace(/[^0-9.-]+/g,"")) * mult),
        units: Math.round(d.units * mult)
      }));

      // Update Top Vendors
      state.topVendors = state.topVendors.map(d => ({
        ...d,
        gmv: formatCurrency(parseInt(d.gmv.replace(/[^0-9.-]+/g,"")) * mult),
        products: Math.round(d.products * mult)
      }));
    }
  },
});

export const { filterByDate } = dashboardSlice.actions;
export default dashboardSlice.reducer;
