import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCarts,
  deleteCart,
  deleteAllCarts,
  updateCartQuantity,
} from '../action/cartAction';

interface cart {
  id: number;
  price: string;
  quantity: number;
  subtotal: string;
  imageSrc: string;
  name: string;
  color: string;
  size: number;
}

interface CartState {
  carts: cart[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  carts: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCarts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCarts.fulfilled, (state, action) => {
      state.carts = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllCarts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(deleteCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCart.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(deleteAllCarts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteAllCarts.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteAllCarts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(updateCartQuantity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCartQuantity.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateCartQuantity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default cartSlice.reducer;
