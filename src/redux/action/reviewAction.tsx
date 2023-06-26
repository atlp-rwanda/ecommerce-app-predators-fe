import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ReviewData {
    product_id: number;
    rating: number;
    feedback: string;
}

interface OrderData {
    id: number;
    status: string;
    message: string;
    product_id: number;
}


export const getOrder = createAsyncThunk(
    'review',
    async ({ id }: OrderData, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.get(
                `https://ecommercepredators.onrender.com/api/status/${id}`,
                config
            );
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const addReview = createAsyncThunk(
    'review',
    async ({ product_id, rating, feedback }: ReviewData, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post(
                `https://ecommercepredators.onrender.com/api/review/${product_id}`,
                { rating, feedback },
                config
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);