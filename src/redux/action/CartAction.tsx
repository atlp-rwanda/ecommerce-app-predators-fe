import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Item {
  product_id: number,
  quantity:number
}

export const addToCart = createAsyncThunk('cart/addToCart', async ({product_id,quantity}:Item ) => {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
      console.log(token)
    // Set the headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(product_id,quantity)
    // Make your API call or perform any other async logic here
    const response = await axios.post('https://talented-wig-goat.cyclic.app/api/cart', {product_id,quantity}, config);

    console.log(response)
    return response.data;
    
  } catch (error) {
    console.log(error)
    // Handle error scenarios here
    throw new Error('Failed to add item to cart');
    
  }
});