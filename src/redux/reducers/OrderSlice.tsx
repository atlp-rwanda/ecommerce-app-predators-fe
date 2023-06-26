import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getOrder } from "../action/reviewAction";
import { toast } from "react-toastify";

const initialState = {
    data: [],
    status: "",
    loading: false,
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrder.pending, (state) => {
                state.loading = true;
                state.status = "pending";
            })
            .addCase(getOrder.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "success";
                state.data = action.payload;
                toast.error(`${action.payload.data.message}`);
            })
            .addCase(getOrder.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "error";
                toast.error(`${action.payload.data.message}`);
            });
    }
})

export default orderSlice.reducer;