/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

type Item = {
  productId: number;
  reason: string;
};
type ProductData = {
  data: Item;
};
export const fetchProducts = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    try {
      const response = await axios.get(
        'https://ecommerce-4aqm.onrender.com/api/Product'
      ); //URL HERE
      return response.data;
    } catch (error) {
      throw new Error('error'); // Something went wrong!
    }
  }
);

export const productRemove = createAsyncThunk(
  'products/productRemove',
  async ({ data }: ProductData, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `https://ecommercepredators.onrender.com/api/product/${data.productId}`,
        {
          data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product: any, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        'https://ecommercepredators.onrender.com/api/product',
        product,
        config
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
 
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: any, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
       
      
      const response = await axios.get(`https://ecommercepredators.onrender.com/api/product/${id}`, config);
      return response.data;
      //console.log(data)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)
