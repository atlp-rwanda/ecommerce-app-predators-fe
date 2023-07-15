import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'https://ecommercepredators.onrender.com/api';

// Get Products in User Wishlist

export const getWishlist = createAsyncThunk(
  'product/getWishlist',
  async (_, thunkAPI) => {
    try {
      // Get Token from localStorage

      const token = localStorage.getItem('token');

      // set the headers

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`${API_URL}/wishlist`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFromWishlist = createAsyncThunk(
  'product/deletefromwishlist',
  async (productId: number, thunkAPI) => {
    try {
      // Get Token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete(
        `${API_URL}/wishlist/${productId}`,
        config
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishList = createAsyncThunk(
  'product/addToWishlist',
  async (productId: number, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make your API call or perform any other async logic here
      const response = await axios.post(
        'https://ecommercepredators.onrender.com/api/wishlist',
        { productId },
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
