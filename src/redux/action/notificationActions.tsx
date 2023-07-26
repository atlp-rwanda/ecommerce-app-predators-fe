/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = "https://ecommercepredators.onrender.com/api";


// Interface for a single notification
interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

// Interface for the response when fetching notifications
interface FetchNotificationsResponse {
  notifications: Notification[];
}

// Interface for the response when marking a notification as read
interface MarkNotificationAsReadResponse {
  notificationId: number;
}

// Interface for the response when deleting a notification
interface DeleteNotificationResponse {
  notificationId: number;
}

// Interface for the response when marking all notifications as read
interface MarkAllNotificationsAsReadResponse {
  notificationIds: number[];
}

// Thunk to fetch notifications from the API
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get<FetchNotificationsResponse>(
        `${API_URL}/notification`,
        config
      );

      return response.data.notifications;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Thunk to mark a notification as read
export const markNotificationAsRead = createAsyncThunk(
  'notifications/markNotificationAsRead',
  async (notificationId: number, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put<MarkNotificationAsReadResponse>(
        `${API_URL}/notification/${notificationId}`,
        {},
        config
      );

      console.log(response);
      return response.data.notificationId;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Thunk to delete a notification
export const deleteNotification = createAsyncThunk(
  'notifications/deleteNotification',
  async (notificationId: number, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete<DeleteNotificationResponse>(
        `${API_URL}/notification/${notificationId}`,
        config
      );

      return response.data.notificationId;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
// Thunk to mark all notifications as read
export const markAllNotificationsAsRead = createAsyncThunk(
  'notifications/markAllNotificationsAsRead',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put<MarkAllNotificationsAsReadResponse>(
        `${API_URL}/notification/mark-all-as-read`,
        {},
        config
      );

      return response;
    } catch (error: any) {
      console.log(error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(
          'Error marking all notifications as read'
        );
      }
    }
  }
);
