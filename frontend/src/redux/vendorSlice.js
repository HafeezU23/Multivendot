import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  followedVendors: [], // array of vendorIds
};

const vendorSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    toggleFollowVendor: (state, action) => {
      const vendorId = action.payload;
      if (state.followedVendors.includes(vendorId)) {
        state.followedVendors = state.followedVendors.filter(id => id !== vendorId);
      } else {
        state.followedVendors.push(vendorId);
      }
    }
  },
});

export const { toggleFollowVendor } = vendorSlice.actions;

export const selectFollowedVendors = (state) => state.vendors.followedVendors;

export default vendorSlice.reducer;
