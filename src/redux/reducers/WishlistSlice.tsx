import { createSlice } from '@reduxjs/toolkit';
import {
  getWishlist,
  deleteFromWishlist,
  addToWishList,
} from '../action/WishlistAction';
import { toast } from 'react-toastify';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
    loading: false,
    error: null,
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'Success';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getWishlist.rejected, (state) => {
        state.loading = true;
        state.status = 'Failed';
        state.error = null;
      })
      .addCase(deleteFromWishlist.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'success';
        state.data = action.payload;
        state.error = null;
        toast.success('Product Removed Successfully!');
      })
      .addCase(deleteFromWishlist.rejected, (state) => {
        state.loading = true;
        state.status = 'failed';
        state.error = null;
      })
      .addCase(addToWishList.pending, (state) => {
        state.loading = true;
        state.status = 'Loading';
        state.error = null;
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'success';
        state.data = action.payload;
        state.error = null;
        toast.success('Product Added Successfully!');
      })
      .addCase(addToWishList.rejected, (state) => {
        state.loading = true;
        state.status = 'failed';
        state.error = null;
      });
  },
});

export default wishlistSlice.reducer;
