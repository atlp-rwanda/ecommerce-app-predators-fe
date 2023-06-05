import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:3000/api/';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: any, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}register`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (email: string, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}reset/password`, { email });
      
      // Store the token in local storage
      localStorage.setItem('token', response.data.token);
      
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (resetData: any, thunkAPI) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      
      // Make sure the token is available
      if (!token) {
        throw new Error('Token not found');
      }
      
      const response = await axios.put(`${API_URL}user/reset-password`, resetData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

