import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ReviewData {
    product_id: number;
    rating: number;
    feedback: string;
}


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
