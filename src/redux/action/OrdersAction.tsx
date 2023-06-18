import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = 'http://localhost:5000/api'

type order= {
  orderId:number
}


export const  OrdersAction = createAsyncThunk(
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
      const response = await axios.get(`${URL}/my/orders/`,config); 
      return response.data
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong!');
    }
  }
);


 
export const  getByIdOrdersAction = createAsyncThunk(
  "products/fetchOrdersById",
  async (orderId, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      
      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${URL}/status/${orderId}`,config); 
      return response.data

    } catch (error: any) { 
        return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);