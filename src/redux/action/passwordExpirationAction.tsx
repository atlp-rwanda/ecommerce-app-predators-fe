
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const passwordExpirationAction = createAsyncThunk(
  'api/usersRestrict',

  async (_, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      };

      const response = await axios.get(
        'https://ecommercepredators.onrender.com/api/usersRestrict',
        config
      ); //URL HERE
      // console.log('response from backend', response.data);

      return response.data;
    } catch (error: any) {
      console.log('login error:', error.response.data.message);
      // alert(error.response.data.message)
      return rejectWithValue(error.response.data.message);
      // throw error;
    }
  }
);
