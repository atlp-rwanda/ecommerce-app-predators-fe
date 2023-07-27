import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProductById } from '../action/UpdateProduct';

const getProductByIdSlice = createSlice({
  name: 'getProductById',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(
        getProductById.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.status = 'Product retrieved successful!';
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(getProductById.rejected, (state) => {
        state.loading = false;
        state.status = 'Product retrievefailed. Please try again.';
        state.error = null;
      });
  },
});
export default getProductByIdSlice.reducer;
