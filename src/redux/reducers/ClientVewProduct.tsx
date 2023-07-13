import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProductByIdClient } from '../action/ClientViewProduct';

const getClientProductByIdSlice = createSlice({
  name: 'fetchProductByIdClient',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchProductByIdClient.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(
        fetchProductByIdClient.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.status = 'success';
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchProductByIdClient.rejected, (state) => {
        state.loading = false;
        state.status = 'fail';
        state.error = null;
      });
  },
});
export default getClientProductByIdSlice.reducer; 