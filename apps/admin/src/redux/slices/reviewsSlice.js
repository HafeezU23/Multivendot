import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [
    { id: 'REV-091', product: 'Wireless Earbuds', vendor: 'TechHaven', user: 'AngryShopper', rating: 1, text: 'This product is a complete scam! Do not buy! Fake!', date: '2026-08-10', flagCount: 3 },
    { id: 'REV-092', product: 'Organic Face Cream', vendor: 'GlowUp Beauty', user: 'SkinCareFan', rating: 2, text: 'Caused a horrible allergic reaction. Needs to be investigated.', date: '2026-08-09', flagCount: 1 },
  ]
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
});

export default reviewsSlice.reducer;
