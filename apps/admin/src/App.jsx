import React from 'react';
import { Routes, Route } from 'react-router';
import AdminLayout from './layouts/AdminLayout';

import DashboardPage from './features/Dashboard/pages/DashboardPage';
import VendorsPage from './features/Vendors/pages/VendorsPage';
import UsersPage from './features/Users/pages/UsersPage';
import OrdersPage from './features/Orders/pages/OrdersPage';
import CatalogPage from './features/Catalog/pages/CatalogPage';
import PromotionsPage from './features/Promotions/pages/PromotionsPage';
import ReviewsPage from './features/Reviews/pages/ReviewsPage';
import SettingsPage from './features/Settings/pages/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="vendors" element={<VendorsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="promotions" element={<PromotionsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
