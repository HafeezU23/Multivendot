import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Store just the product IDs in the wishlist
  itemIds: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const productId = action.payload;
      if (state.itemIds.includes(productId)) {
        state.itemIds = state.itemIds.filter(id => id !== productId);
      } else {
        state.itemIds.push(productId);
      }
    }
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.itemIds;

export default wishlistSlice.reducer;
