import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: '',
  transactions: '',
  disputes: '',
  vendorsApplications: '',
  vendorsActive: '',
  vendorsPayouts: '',
  usersBuyers: '',
  usersVendors: '',
  reviews: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setOrdersSearch: (state, action) => { state.orders = action.payload; },
    setTransactionsSearch: (state, action) => { state.transactions = action.payload; },
    setDisputesSearch: (state, action) => { state.disputes = action.payload; },
    setVendorsApplicationsSearch: (state, action) => { state.vendorsApplications = action.payload; },
    setVendorsActiveSearch: (state, action) => { state.vendorsActive = action.payload; },
    setVendorsPayoutsSearch: (state, action) => { state.vendorsPayouts = action.payload; },
    setUsersBuyersSearch: (state, action) => { state.usersBuyers = action.payload; },
    setUsersVendorsSearch: (state, action) => { state.usersVendors = action.payload; },
    setReviewsSearch: (state, action) => { state.reviews = action.payload; },
  },
});

export const { 
  setOrdersSearch, setTransactionsSearch, setDisputesSearch,
  setVendorsApplicationsSearch, setVendorsActiveSearch, setVendorsPayoutsSearch,
  setUsersBuyersSearch, setUsersVendorsSearch, setReviewsSearch
} = searchSlice.actions;

export default searchSlice.reducer;
