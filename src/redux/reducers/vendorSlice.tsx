import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addProduct } from "../action/ProductAction";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  status: '',
  loading: false,
};

const addProdictSlice = createSlice({
    name: "product/addProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
                state.status = "pending";
            })
            .addCase(addProduct.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "success";
                state.data = action.payload;
                toast.success(`${action.payload.data.message}`);
            })
            .addCase(addProduct.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "error";
                toast.error(`${action.payload.data.message}`);
            });
    }
})


export default addProdictSlice.reducer
