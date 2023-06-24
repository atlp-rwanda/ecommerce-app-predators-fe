import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchProducts = createAsyncThunk(
  'products/search',
  async (searchTerm: string) => {
    try {
      const response = await axios.get(
        `https://talented-wig-goat.cyclic.app/api/products/search?keyword=${searchTerm}`
      );

      return response.data;
    } catch (error) {
      throw new Error('Error searching for products');
    }
  }
);
