import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addReview } from "../action/reviewAction";
import { toast } from "react-toastify";

const initialState = {
    data: [],
    status: "",
    loading: false,
}

const addReviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addReview.pending, (state) => {
                state.loading = true;
                state.status = "pending";
            })
            .addCase(addReview.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "success";
                state.data = action.payload;
                toast.error(`${action.payload.data.message}`);
            })
            .addCase(addReview.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "error";
                toast.error(`${action.payload.data.message}`);
            });
    }
})


export default addReviewSlice.reducer
