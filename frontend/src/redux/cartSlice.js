import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, selectedColor, selectedSize } = action.payload;
      
      // Generate a unique ID for the cart item based on product + selected variants
      const cartItemId = `${product.id}-${selectedColor || 'none'}-${selectedSize || 'none'}`;
      
      const existingItem = state.items.find(item => item.cartItemId === cartItemId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          cartItemId,
          product,
          quantity,
          selectedColor,
          selectedSize,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.cartItemId !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { cartItemId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.cartItemId === cartItemId);
      if (existingItem) {
        existingItem.quantity = Math.max(1, quantity);
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalItems = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = (state) => state.cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

export default cartSlice.reducer;
