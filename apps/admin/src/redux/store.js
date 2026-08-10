import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import catalogReducer from './slices/catalogSlice';
import dashboardReducer from './slices/dashboardSlice';
import ordersReducer from './slices/ordersSlice';
import promotionsReducer from './slices/promotionsSlice';
import reviewsReducer from './slices/reviewsSlice';
import usersReducer from './slices/usersSlice';
import vendorsReducer from './slices/vendorsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    catalog: catalogReducer,
    dashboard: dashboardReducer,
    orders: ordersReducer,
    promotions: promotionsReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    vendors: vendorsReducer,
  },
});
