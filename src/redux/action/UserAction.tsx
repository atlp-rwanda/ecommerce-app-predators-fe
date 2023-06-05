import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = 'https://talented-wig-goat.cyclic.app/api/';
// post userdata in this API_URL 
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

