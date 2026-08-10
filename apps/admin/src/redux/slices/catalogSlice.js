import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 'CAT-1', name: 'Electronics', subCategories: ['Phones', 'Laptops', 'Accessories'], productCount: 1450 },
    { id: 'CAT-2', name: 'Fashion & Apparel', subCategories: ['Men', 'Women', 'Kids'], productCount: 3200 },
    { id: 'CAT-3', name: 'Home & Kitchen', subCategories: ['Furniture', 'Decor', 'Appliances'], productCount: 890 },
  ],
  flaggedProducts: [
    { id: 'PROD-909', name: 'Counterfeit Rolex', vendor: 'ShadyWatches', reason: 'Suspected Counterfeit', dateFlagged: '2026-08-09' },
    { id: 'PROD-102', name: 'Hazardous Laser Pointer', vendor: 'Gadget World', reason: 'Safety Violation', dateFlagged: '2026-08-10' },
    { id: 'PROD-103', name: 'Fake Nike', vendor: 'SneakerHead', reason: 'Fake Product', dateFlagged: '2026-08-11' },
    { id: 'PROD-104', name: 'Fake Chanel', vendor: 'ChanelReseller', reason: 'Fake Product', dateFlagged: '2026-08-12' },
    { id: 'PROD-105', name: 'Fake Gucci', vendor: 'GucciReseller', reason: 'Fake Product', dateFlagged: '2026-08-13' },
  ],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
});

export default catalogSlice.reducer;
