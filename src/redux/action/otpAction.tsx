import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'https://talented-wig-goat.cyclic.app/auth/';

export const otpVerifyUser = createAsyncThunk(
  'user/verifyOTP',
  async (OtpDigit: unknown, thunkAPI) => {
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
        `${API_URL}otp/verify`,
        OtpDigit,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// console.log('fixing')