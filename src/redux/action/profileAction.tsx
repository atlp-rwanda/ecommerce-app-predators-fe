import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://ecommercepredators.onrender.com';
// const API_URL = 'https://ecommercepredators.onrender.com';

interface profileData {
  name: string;
  email: string;
  gender: string;
  phone_number: string | null;
  country: string | null;
  province: string | null;
  district: string | null;
  sector: string | null;
  streetAddress: string | null;
  preferred_language: string | null;
  preferred_currency: string | null;
}

export const getProfile = createAsyncThunk(
  'user/profile',
  async (_, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${API_URL}/api/profile`, config);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/update',
  async (profile: profileData, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/api/profile`,
        profile,
        config
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
