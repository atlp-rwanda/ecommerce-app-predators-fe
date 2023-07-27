import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getHomeProducts } from '../action/HomeProducts';

const getHomeProductSlice = createSlice({
  name: 'getHomeproducts',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getHomeProducts.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(
        getHomeProducts.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.status = 'Products retrieved successful!';
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(getHomeProducts.rejected, (state) => {
        state.loading = false;
        state.status = 'Product retrieve failed. Please try again.';
        state.error = null;
      });
  },
});
export default getHomeProductSlice.reducer;
