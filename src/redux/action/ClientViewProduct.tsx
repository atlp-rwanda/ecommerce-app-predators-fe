import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:5900/api';

export const fetchProductByIdClient = createAsyncThunk(
  'products/fetchProductClient',
  async(id:any,thunkAPI) =>{
    try {
       const response = await axios.get(
        `${URL}/view/${id}`);
      return response.data;
    } catch (error: any) { 
      return thunkAPI.rejectWithValue(error.response.data);
      
    }
  }
)