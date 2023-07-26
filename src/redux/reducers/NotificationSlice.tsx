import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNotifications,
  markNotificationAsRead,
  deleteNotification,
  markAllNotificationsAsRead,
} from "../action/notificationActions";

// Interface for a single notification
interface Notification {
  id: number;
  message: string;
  timestamp: Date;
  is_read: boolean;
}

// Interface for the notification state
interface NotificationState {
  Notifications: Notification[];
  loading: boolean;
  error: string | null;
}

const initialState: NotificationState = {
  Notifications: [],
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {}, // No additional reducers defined here
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        // Set loading state to true and clear any previous errors
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        // Set loading state to false, clear any previous errors, and update the notifications
        state.loading = false;
        state.error = null;
        state.Notifications = action.payload as unknown as Notification[];
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        // Set loading state to false and update the error message
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(markAllNotificationsAsRead.fulfilled, (state) => {
        // Mark all notifications as read
        if (Array.isArray(state.Notifications)) {
          state.Notifications.forEach((n) => (n.is_read = true));
        }
        console.log("markAllNotificationsAsRead.fulfilled", state.Notifications);
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        // Mark a specific notification as read
        const notificationId = action.payload;
        if (Array.isArray(state.Notifications)) {
          const notificationIndex = state.Notifications.findIndex((n) => n.id === notificationId);
          if (notificationIndex !== -1) {
            state.Notifications[notificationIndex].is_read = true;
          }
        }
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        // Delete a specific notification
        const notificationId = action.payload;
        state.Notifications = Array.isArray(state.Notifications)
          ? state.Notifications.filter((n) => n.id !== notificationId)
          : [];
      });
  },
});

export default notificationSlice.reducer;
