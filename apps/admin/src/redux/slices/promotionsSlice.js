import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  promotions: [
    { id: 'PROM-01', title: 'Summer Sale 2026', type: 'Hero Banner', status: 'Active', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80', discount: 'Up to 50% Off' },
    { id: 'PROM-02', title: 'Tech Week', type: 'Category Banner', status: 'Inactive', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80', discount: 'Free Shipping' },
  ]
};

export const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
});

export default promotionsSlice.reducer;
