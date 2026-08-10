import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  applications: [
    { id: 'APP-001', name: 'TechHaven Electronics', owner: 'Sarah Connor', email: 'sarah@techhaven.com', date: '2026-08-10', status: 'Pending', category: 'Electronics', documents: 3 },
    { id: 'APP-002', name: 'Organic Beauty Co', owner: 'Emma Watson', email: 'emma@organicbeauty.com', date: '2026-08-09', status: 'Pending', category: 'Beauty', documents: 2 },
    { id: 'APP-003', name: 'Urban Threads', owner: 'Jake Miller', email: 'jake@urbanthreads.com', date: '2026-08-08', status: 'Pending', category: 'Fashion', documents: 4 },
    { id: 'APP-004', name: 'PetPals Store', owner: 'Lisa Park', email: 'lisa@petpals.com', date: '2026-08-07', status: 'Pending', category: 'Pets', documents: 2 },
  ],
  activeVendors: [
    { id: 'V-100', name: 'Gadget World', owner: 'Mike Chen', email: 'mike@gadgetworld.com', revenue: '$45,320', products: 89, joined: '2025-03-14', status: 'Active', rating: 4.8 },
    { id: 'V-101', name: 'Fresh Kicks', owner: 'Tom Harris', email: 'tom@freshkicks.com', revenue: '$29,450', products: 42, joined: '2025-06-01', status: 'Warned', rating: 3.9 },
    { id: 'V-102', name: 'GlowUp Beauty', owner: 'Amy Rose', email: 'amy@glowup.com', revenue: '$38,100', products: 64, joined: '2025-01-20', status: 'Active', rating: 4.7 },
    { id: 'V-103', name: 'EcoLiving', owner: 'Dan Green', email: 'dan@ecoliving.com', revenue: '$18,200', products: 31, joined: '2025-08-05', status: 'Suspended', rating: 2.1 },
  ],
  payouts: [
    { id: 'PAY-882', vendor: 'Gadget World', amount: '$4,500.00', commission: '$675.00', net: '$3,825.00', status: 'Pending', dueDate: '2026-08-15', period: 'Jul 1 - Jul 31' },
    { id: 'PAY-883', vendor: 'GlowUp Beauty', amount: '$3,810.00', commission: '$571.50', net: '$3,238.50', status: 'Pending', dueDate: '2026-08-15', period: 'Jul 1 - Jul 31' },
    { id: 'PAY-884', vendor: 'Fresh Kicks', amount: '$2,945.00', commission: '$441.75', net: '$2,503.25', status: 'Processing', dueDate: '2026-08-15', period: 'Jul 1 - Jul 31' },
    { id: 'PAY-880', vendor: 'Gadget World', amount: '$5,120.00', commission: '$768.00', net: '$4,352.00', status: 'Completed', dueDate: '2026-07-15', period: 'Jun 1 - Jun 30' },
  ]
};

export const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
});

export default vendorsSlice.reducer;
