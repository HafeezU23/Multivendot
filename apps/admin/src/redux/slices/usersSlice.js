import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 'USR-891', name: 'Michael Scott', email: 'mscott@dundermifflin.com', role: 'Buyer', orders: 24, spent: '$3,450', status: 'Active', joined: '2025-01-12', lastLogin: '2026-08-10' },
    { id: 'USR-892', name: 'Dwight Schrute', email: 'dschrute@dundermifflin.com', role: 'Buyer', orders: 56, spent: '$8,920', status: 'Warned', joined: '2025-02-14', lastLogin: '2026-08-09' },
    { id: 'USR-893', name: 'Creed Bratton', email: 'cbratton@unknown.com', role: 'Buyer', orders: 2, spent: '$45', status: 'Banned', joined: '2025-03-01', lastLogin: '2025-04-01' },
    { id: 'USR-894', name: 'Pam Beesly', email: 'pbeesly@dundermifflin.com', role: 'Buyer', orders: 18, spent: '$2,100', status: 'Active', joined: '2025-04-22', lastLogin: '2026-08-10' },
    { id: 'USR-895', name: 'Jim Halpert', email: 'jhalpert@dundermifflin.com', role: 'Buyer', orders: 31, spent: '$4,560', status: 'Verified', joined: '2025-01-05', lastLogin: '2026-08-10' },
  ],
  vendorAccounts: [
    { id: 'V-100', name: 'Gadget World', owner: 'Mike Chen', email: 'mike@gadgetworld.com', status: 'Active', products: 89, disputes: 1, joined: '2025-03-14' },
    { id: 'V-103', name: 'EcoLiving', owner: 'Dan Green', email: 'dan@ecoliving.com', status: 'Suspended', products: 31, disputes: 4, joined: '2025-08-05' },
    { id: 'V-104', name: 'ShadyWatches', owner: 'Unknown', email: 'contact@shadywatches.com', status: 'Banned', products: 0, disputes: 12, joined: '2026-01-10' },
  ]
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
