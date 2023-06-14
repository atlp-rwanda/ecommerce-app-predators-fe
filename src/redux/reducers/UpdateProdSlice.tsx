import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import {updateProduct} from '../action/UpdateProduct';
import { fetchProductById } from "../action/UpdateProduct";



const prodUpdateSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: "",
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(updateProduct.pending, (state) => {
            //     state.loading = true;
            //     state.status = "Loading...";
            //     state.error = null;
            // })
            // .addCase(updateProduct.fulfilled, (state, action: PayloadAction<any>) => {
            //     state.loading = false;
            //     state.status = "Product updated successful!";
            //     state.data = action.payload;
            //     state.error = null;
            //     toast.success("Product updated successful!");
            // })
            // .addCase(updateProduct.rejected, (state) => {
            //     state.loading = false;
            //     state.status = "Product update failed. Please try again.";
            //     state.error = null;
            //     toast.error("Product update failed. Please try again.");
            // })

            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.status = "Loading...";
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "Product retrieved successful!";
                state.data = action.payload;
                state.error = null;
                toast.success("Product retrieve successful!");
            })
            .addCase(fetchProductById.rejected, (state) => {
                state.loading = false;
                state.status = "Product retrievefailed. Please try again.";
                state.error = null;
                toast.error("Product retrieve failed. Please try again.");
            });
    }
});
export default prodUpdateSlice.reducer;