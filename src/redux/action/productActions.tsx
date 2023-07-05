import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { RootState } from "../store/productStore";

export const  fetchProductsCollection = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      
      // Set the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`https://ecommerce-4aqm.onrender.com/api/vendor/collection`,config);
      //console.log("Fetched products:", response.data.data.products);
      return response.data
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  }
);
