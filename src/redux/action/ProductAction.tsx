import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'; 

 export const fetchProducts = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    try {
      const response = await axios.get(
        'https://talented-wig-goat.cyclic.app/api/product'
      ); //URL HERE
      return response.data;
    } catch (error) {
      throw new Error('error'); //Something went wrong!
    }
  }
);
 
export const productRemove = createAsyncThunk(
  'products/productRemove',
  async ({data}: any, thunkAPI) => {
    try { 
          // Get the token from localStorage
      const token = localStorage.getItem('token'); 
    const response = await axios.delete(`https://talented-wig-goat.cyclic.app/api/product/${data.productId}`,{
      data,
       headers: {
          Authorization: `Bearer ${token}`,
        },
    });
      return response.data; 

      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: any, thunkAPI) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post("https://talented-wig-goat.cyclic.app/api/product", product, config);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)