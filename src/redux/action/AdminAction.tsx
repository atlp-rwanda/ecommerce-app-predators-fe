import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'https://ecommercepredators.onrender.com/api';

interface setData {
  id: number;
  setRole: number;
}

export const setRoles = createAsyncThunk(
  'admin/setRoles',
  async ({ id, setRole }: setData, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${API_URL}/setRole/${id}`,
        { setRole },
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
