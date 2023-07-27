import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts, productRemove } from '../action/ProductAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = 'success';
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.status = 'error';
      })
      .addCase(productRemove.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = '';
      })
      .addCase(productRemove.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = 'success';
        toast.success('Item have been deleted successfully');
        state.data = action.payload;
        state.error = '';
      })
      .addCase(productRemove.rejected, (state, action) => {
        state.loading = true;
        toast.error('Error deleting item');
        state.status = 'error';
        state.error = action.error.message || ' ';
      });
  },
});

export default productSlice.reducer;
