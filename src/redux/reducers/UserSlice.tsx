import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { registerUser } from '../action/UserAction';

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
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = 'Registration successful!';
        state.data = action.payload;
        state.error = null;
        toast.success('Registration successful!');
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.status = 'Registration failed. Please try again.';
        state.error = null;
        toast.error('Registration failed. Please try again.');
      });
  },
});
export default userSlice.reducer;
