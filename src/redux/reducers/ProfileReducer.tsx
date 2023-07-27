import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfile, getProfile } from '../action/profileAction';
import { toast } from 'react-toastify';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: [],
        status: "",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.status = "pending";
            })
            .addCase(updateProfile.fulfilled, (state) => {
                state.loading = false;
                state.status = "success";
                toast.success(`User updated Successfully!`);
            })
            .addCase(updateProfile.rejected, (state) => {
                state.loading = false;
                state.status = 'error';
                toast.error(`Failed to update the user`);
            })
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.status = "pending";
            })
            .addCase(getProfile.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(getProfile.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.status = 'error';
                toast.error(`${action.payload.data.message}`);
            })
    }
})

export default profileSlice.reducer;
