import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { disableAccount } from '../action/disableAction';

const disableUserSlice = createSlice({
  name: 'disableUser',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(disableAccount.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(disableAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'Account disabled successfully!';
        state.data = action.payload;
        state.error = null;
        toast.success('Account disabled successfully!');
      })
      .addCase(disableAccount.rejected, (state) => {
        state.loading = false;
        state.status = 'Account disable failed. Please try again.';
        state.error = null;
        toast.error('Account disable failed. Please try again.');
      });
  },
});
export default disableUserSlice.reducer;
