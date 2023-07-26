import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'https://ecommercepredators.onrender.com/api';

export const getHomeProducts = createAsyncThunk(
    "landing/products",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL}/product`);
            return response.data.data;
        }
        catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)
