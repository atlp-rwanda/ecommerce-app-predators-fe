import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchProducts = createAsyncThunk(
  'products/searchProduct',
  async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://ecommerce-4aqm.onrender.com/api/products/search${searchTerm}`
      );

      return response.data;
    } catch (error) {
      throw new Error('An error occurred while searching for products.'); // Throw a more descriptive error message
    }
  }
);

// console.log('fixing')