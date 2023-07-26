//Admin should be able to disable an account for various reasons
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'https://ecommercepredators.onrender.com/api';

interface disableData {
    id: number;
    status: string;
    reason: string;
}
export const disableAccount = createAsyncThunk(
    'user/disableAccount',
    async ({ id, status, reason }: disableData, thunkAPI) => {
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
          `${API_URL}/disableUser/${id}`,
          { status, reason }, // Pass the status and reason in the request body
          config
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
// get all users
export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
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

            const response = await axios.get(`${API_URL}/users`, config);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
