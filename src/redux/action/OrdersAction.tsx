import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = 'https://ecommercepredators.onrender.com/api/'

export const OrdersAction = createAsyncThunk(
  "products/fetchOrders",
  async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${URL}/my/orders/`, config);

      return response.data.data
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  }
);


export const getByIdOrdersAction = createAsyncThunk(
  "products/fetchOrdersById",
  async ({ orderId }: { orderId: number }, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${URL}/status/${orderId}`, config);

      return response.data;
    } catch (error: any) {

      throw new Error('Something went wrong!');
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
