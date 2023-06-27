import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetAllNotifications = async () => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `https://ecommercepredators.onrender.com/api/notification`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

export const ToastNotificationAction = createAsyncThunk(
  'toastNotification/notification',
  async (_,thunkAPI) => {
    try {
      const notifications = await GetAllNotifications();
      const totalNotifications = notifications.length;
      return totalNotifications;
    } catch (error: any) { 
        return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const DisplayNotificationAction = createAsyncThunk(
  'Notification/diplaynotification',
  async (_,thunkAPI) => {
    try {
      const notifications = await GetAllNotifications();  
      return notifications.notifications;
    } catch (error: any) { 
        return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);