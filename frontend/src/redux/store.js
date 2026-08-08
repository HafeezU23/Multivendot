import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import orderReducer from './orderSlice';
import vendorReducer from './vendorSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    orders: orderReducer,
    vendors: vendorReducer,
  },
});
