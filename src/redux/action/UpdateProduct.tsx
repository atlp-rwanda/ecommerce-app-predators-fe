import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface UpdateData {
  id: number;
  name: string;
  description: string;
  price: number;
  picture_urls: string[];
  available: boolean;
  category_id: number;
  expiryDate: string;
  instock: number;
}

// Get product data by ID from the API_URL
export const getProductById = createAsyncThunk(
  'product/getProductById',
  async (id: number, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make the API request to fetch the product by ID
      const response = await axios.get(
        `https://ecommercepredators.onrender.com/api/product/${id}`,
        config
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update product data by ID using the API_URL
export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (
    {
      id,
      name,
      category_id,
      description,
      price,
      available,
      picture_urls,
      expiryDate,
      instock,
    }: UpdateData,
    thunkAPI
  ) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `https://ecommercepredators.onrender.com/api/product/${id}`,
        {
          name,
          description,
          price,
          available,
          category_id,
          picture_urls,
          expiryDate,
          instock,
        },
        config
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
