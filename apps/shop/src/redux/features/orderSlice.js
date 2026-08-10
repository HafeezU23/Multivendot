import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  notifications: [
    { id: 'welcome', message: 'Welcome to Shop.co!', read: false, date: new Date().toISOString() }
  ],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const { items, shippingAddress, paymentInfo, total } = action.payload;
      
      // Group items by vendor
      const itemsByVendor = items.reduce((acc, item) => {
        const vendorId = item.product.vendor.vendorId;
        if (!acc[vendorId]) {
          acc[vendorId] = {
            vendor: item.product.vendor,
            items: [],
            status: 'Placed',
          };
        }
        acc[vendorId].items.push(item);
        return acc;
      }, {});

      const newOrder = {
        id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        date: new Date().toISOString(),
        itemsByVendor,
        shippingAddress,
        paymentInfo,
        total,
      };

      state.orders.unshift(newOrder);

      // Add a notification for the new order
      state.notifications.unshift({
        id: `notif-${Date.now()}`,
        message: `Order ${newOrder.id} has been placed successfully!`,
        read: false,
        date: new Date().toISOString(),
      });
    },
    
    advanceOrderStatus: (state, action) => {
      const { orderId, vendorId } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      
      if (order && order.itemsByVendor[vendorId]) {
        const currentStatus = order.itemsByVendor[vendorId].status;
        let nextStatus = currentStatus;
        
        switch(currentStatus) {
          case 'Placed': nextStatus = 'Packed'; break;
          case 'Packed': nextStatus = 'Shipped'; break;
          case 'Shipped': nextStatus = 'Delivered'; break;
          default: break;
        }

        if (nextStatus !== currentStatus) {
          order.itemsByVendor[vendorId].status = nextStatus;
          
          // Add notification
          state.notifications.unshift({
            id: `notif-${Date.now()}`,
            message: `Update on Order ${orderId}: Items from ${order.itemsByVendor[vendorId].vendor.storeName} are now ${nextStatus}.`,
            read: false,
            date: new Date().toISOString(),
          });
        }
      }
    },

    markNotificationsRead: (state) => {
      state.notifications.forEach(n => n.read = true);
    },

    clearNotifications: (state) => {
      state.notifications = [];
    }
  },
});

export const { placeOrder, advanceOrderStatus, markNotificationsRead, clearNotifications } = orderSlice.actions;

export const selectOrders = (state) => state.orders.orders;
export const selectOrderById = (state, orderId) => state.orders.orders.find(o => o.id === orderId);
export const selectNotifications = (state) => state.orders.notifications;
export const selectUnreadNotificationsCount = (state) => state.orders.notifications.filter(n => !n.read).length;

export default orderSlice.reducer;
