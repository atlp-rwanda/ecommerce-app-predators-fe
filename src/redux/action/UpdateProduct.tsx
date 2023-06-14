import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/';

// get product data from this API_URL

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id: any, thunkAPI) => {
    try {

      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${API_URL}product/${id}`,config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// update product data by Id from this API_URL

// export const updateProduct = createAsyncThunk(
//     'product/updateProduct',
//     async (product: any, thunkAPI) => {
//         try {
//             const response = await axios.put(`${API_URL}product/${product.id}`, product);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
