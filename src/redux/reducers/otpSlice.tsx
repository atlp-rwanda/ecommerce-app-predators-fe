import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { otpVerifyUser } from '../action/otpAction';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(otpVerifyUser.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(otpVerifyUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'Verification successful!';
        state.data = action.payload;
        state.error = null;
        toast.success('Verification successful!');
        window.location.href = '/';
      })
      .addCase(otpVerifyUser.rejected, (state) => {
        state.loading = false;
        state.status = 'Verification failed. Please try again.';
        state.error = null;
        toast.error('Verification failed. Please try again.');
      });
  },
});
export default userSlice.reducer;
