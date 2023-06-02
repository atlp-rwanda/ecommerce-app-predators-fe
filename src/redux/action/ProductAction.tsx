import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    try {
      const response = await axios.get("https://talented-wig-goat.cyclic.app/api/product"); //URL HERE
      return response.data;
    } catch (error) {
      throw new Error('error'); //Something went wrong!
    }
  }
);
 