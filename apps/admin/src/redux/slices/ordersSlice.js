import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    { id: 'ORD-8902', customer: 'John Doe', vendor: 'TechHaven', items: 2, total: '$1,299.00', status: 'Delivered', date: '2026-08-09', payment: 'Stripe' },
    { id: 'ORD-8903', customer: 'Alice Smith', vendor: 'Organic Beauty', items: 3, total: '$45.50', status: 'Processing', date: '2026-08-10', payment: 'PayPal' },
    { id: 'ORD-8904', customer: 'Bob Johnson', vendor: 'Fresh Kicks', items: 1, total: '$189.99', status: 'Shipped', date: '2026-08-10', payment: 'Stripe' },
    { id: 'ORD-8905', customer: 'Sara Lee', vendor: 'GlowUp Beauty', items: 4, total: '$76.20', status: 'Pending', date: '2026-08-10', payment: 'COD' },
    { id: 'ORD-8906', customer: 'Mike Chen', vendor: 'EcoLiving', items: 1, total: '$249.00', status: 'Cancelled', date: '2026-08-08', payment: 'Stripe' },
    { id: 'ORD-8907', customer: 'Emily Clark', vendor: 'Gadget World', items: 2, total: '$599.00', status: 'Delivered', date: '2026-08-07', payment: 'PayPal' },
    { id: 'ORD-8908', customer: 'David Kim', vendor: 'TechHaven', items: 1, total: '$899.00', status: 'Processing', date: '2026-08-11', payment: 'Stripe' },
    { id: 'ORD-8909', customer: 'Sophia Turner', vendor: 'Organic Beauty', items: 5, total: '$120.00', status: 'Shipped', date: '2026-08-09', payment: 'Credit Card' },
    { id: 'ORD-8910', customer: 'Lucas Green', vendor: 'Fresh Kicks', items: 2, total: '$250.00', status: 'Pending', date: '2026-08-11', payment: 'Stripe' },
    { id: 'ORD-8911', customer: 'Mia Wong', vendor: 'GlowUp Beauty', items: 3, total: '$95.50', status: 'Delivered', date: '2026-08-06', payment: 'PayPal' },
    { id: 'ORD-8912', customer: 'Ethan Hunt', vendor: 'Gadget World', items: 1, total: '$150.00', status: 'Shipped', date: '2026-08-05', payment: 'Stripe' },
    { id: 'ORD-8913', customer: 'Julia Roberts', vendor: 'TechHaven', items: 2, total: '$450.00', status: 'Processing', date: '2026-08-12', payment: 'PayPal' },
  ],
  disputes: [
    { id: 'DSP-042', orderId: 'ORD-8810', customer: 'Bob Wilson', vendor: 'Gadget World', issue: 'Item never arrived', amount: '$349.00', daysOpen: 5, status: 'Open' },
    { id: 'DSP-043', orderId: 'ORD-8790', customer: 'Nina Patel', vendor: 'Fresh Kicks', issue: 'Wrong size delivered, vendor unresponsive', amount: '$189.99', daysOpen: 3, status: 'Open' },
    { id: 'DSP-040', orderId: 'ORD-8650', customer: 'Jake Miller', vendor: 'TechHaven', issue: 'Product defective on arrival', amount: '$599.00', daysOpen: 12, status: 'Escalated' },
    { id: 'DSP-044', orderId: 'ORD-8902', customer: 'John Doe', vendor: 'TechHaven', issue: 'Box was damaged', amount: '$1,299.00', daysOpen: 2, status: 'Open' },
    { id: 'DSP-045', orderId: 'ORD-8855', customer: 'Emma Watson', vendor: 'Organic Beauty', issue: 'Allergic reaction to cream', amount: '$45.00', daysOpen: 8, status: 'Escalated' },
    { id: 'DSP-046', orderId: 'ORD-8899', customer: 'Chris Evans', vendor: 'EcoLiving', issue: 'Missing parts', amount: '$120.00', daysOpen: 1, status: 'Open' },
    { id: 'DSP-047', orderId: 'ORD-8822', customer: 'Olivia Brown', vendor: 'Fresh Kicks', issue: 'Fake product', amount: '$200.00', daysOpen: 15, status: 'Escalated' },
    { id: 'DSP-048', orderId: 'ORD-8877', customer: 'Liam Smith', vendor: 'Gadget World', issue: 'Stopped working after 2 days', amount: '$450.00', daysOpen: 4, status: 'Open' },
    { id: 'DSP-049', orderId: 'ORD-8811', customer: 'Ava Taylor', vendor: 'TechHaven', issue: 'Wrong color sent', amount: '$899.00', daysOpen: 6, status: 'Open' },
    { id: 'DSP-050', orderId: 'ORD-8833', customer: 'Noah White', vendor: 'GlowUp Beauty', issue: 'Expired product', amount: '$65.00', daysOpen: 10, status: 'Escalated' },
    { id: 'DSP-051', orderId: 'ORD-8912', customer: 'Ethan Hunt', vendor: 'Gadget World', issue: 'Item never arrived', amount: '$150.00', daysOpen: 2, status: 'Open' },
    { id: 'DSP-052', orderId: 'ORD-8913', customer: 'Julia Roberts', vendor: 'TechHaven', issue: 'Defective item', amount: '$450.00', daysOpen: 1, status: 'Open' },
  ],
  transactions: [
    { id: 'TXN-5501', orderId: 'ORD-8902', type: 'Sale', vendor: 'TechHaven', amount: '$1,299.00', commission: '$194.85', net: '$1,104.15', date: '2026-08-09' },
    { id: 'TXN-5502', orderId: 'ORD-8903', type: 'Sale', vendor: 'Organic Beauty', amount: '$45.50', commission: '$6.82', net: '$38.68', date: '2026-08-10' },
    { id: 'TXN-5503', orderId: 'DSP-040', type: 'Refund', vendor: 'TechHaven', amount: '-$599.00', commission: '$0.00', net: '-$599.00', date: '2026-08-08' },
    { id: 'TXN-5504', orderId: 'ORD-8904', type: 'Sale', vendor: 'Fresh Kicks', amount: '$189.99', commission: '$28.50', net: '$161.49', date: '2026-08-10' },
    { id: 'TXN-5505', orderId: 'ORD-8905', type: 'Sale', vendor: 'GlowUp Beauty', amount: '$76.20', commission: '$11.43', net: '$64.77', date: '2026-08-10' },
    { id: 'TXN-5506', orderId: 'DSP-042', type: 'Refund', vendor: 'Gadget World', amount: '-$349.00', commission: '$0.00', net: '-$349.00', date: '2026-08-07' },
    { id: 'TXN-5507', orderId: 'ORD-8907', type: 'Sale', vendor: 'Gadget World', amount: '$599.00', commission: '$89.85', net: '$509.15', date: '2026-08-07' },
    { id: 'TXN-5508', orderId: 'ORD-8908', type: 'Sale', vendor: 'TechHaven', amount: '$899.00', commission: '$134.85', net: '$764.15', date: '2026-08-11' },
    { id: 'TXN-5509', orderId: 'ORD-8909', type: 'Sale', vendor: 'Organic Beauty', amount: '$120.00', commission: '$18.00', net: '$102.00', date: '2026-08-09' },
    { id: 'TXN-5510', orderId: 'ORD-8910', type: 'Sale', vendor: 'Fresh Kicks', amount: '$250.00', commission: '$37.50', net: '$212.50', date: '2026-08-11' },
    { id: 'TXN-5511', orderId: 'ORD-8912', type: 'Sale', vendor: 'Gadget World', amount: '$150.00', commission: '$22.50', net: '$127.50', date: '2026-08-05' },
    { id: 'TXN-5512', orderId: 'ORD-8913', type: 'Sale', vendor: 'TechHaven', amount: '$450.00', commission: '$67.50', net: '$382.50', date: '2026-08-12' },
  ]
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
});

export default ordersSlice.reducer;
