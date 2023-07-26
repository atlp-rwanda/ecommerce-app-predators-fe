import { createSlice } from '@reduxjs/toolkit';
import { fetchProductById } from '../action/ProductAction';

export interface Product {
  product: any;
  data: any;
  map(arg0: (product: Product) => void): import('react').ReactNode;
  id: number;
  name: string;
  description: string;
  category_id: number;
  price: string;
  picture_urls: string[];
  instock: number;
  expiryDate: string;
  available: boolean;
  vendor_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductState {
  products: any;
  data: Product[];
  status: string;
  loading: boolean;
  error: string | null;
  pagination: number;
  selectedProduct: Product | null; // Add selectedProduct property
}

const initialState: ProductState = {
  data: [],
  status: '',
  loading: false,
  error: null,
  pagination: 5,
  selectedProduct: null,
  products: undefined,
};

const productCollectionSlice = createSlice({
  name: 'CollectionProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'success';
        state.data = action.payload;
        state.error = null;
        /*     console.log('#####################:', state.data); */
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.loading = false;
        state.status = 'error';
      });
  },
});

export default productCollectionSlice.reducer;

// console.log('fixing')
