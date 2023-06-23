import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchCriteria } from '../searchCriterira/SearchCriteria';
export const searchProductsByFilter = createAsyncThunk(
  'products/searchByFilter',
  async (searchCriteria: SearchCriteria) => {
    try {
      let url = `https://ecommercepredators.onrender.com/api/products/search?`;

      if (searchCriteria.name) {
        url += `name=${searchCriteria.name}&limit=10`;
      }

      if (searchCriteria.price) {
        url += `price=${searchCriteria.price}&limit=10`;
      }

      if (searchCriteria.keyword) {
        url += `keyword=${searchCriteria.keyword}&limit=10`;
      }

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error searching for products');
    }
  }
);
