import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../action/ProductAction";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = "success";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
