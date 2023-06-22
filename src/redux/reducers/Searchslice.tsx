import { createSlice } from '@reduxjs/toolkit';
import { searchProductsByFilter } from '../action/SearchAction';

export interface Product {
  id: string;
  name: string;

  // Add more properties as needed
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    products: [],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProductsByFilter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProductsByFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(searchProductsByFilter.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default searchSlice.reducer;
