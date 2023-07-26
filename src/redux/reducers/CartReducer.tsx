import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../components/ProductListing';

interface CartState {
  items: Product[];
  error: string | null;
}

const initialState: CartState = {
  items: [],
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartSuccess(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
      state.error = null;
    },
    addToCartFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { addToCartSuccess, addToCartFailure } = cartSlice.actions;

export default cartSlice.reducer;
