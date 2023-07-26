import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../action/disableAction';

const getAllUsersSlice = createSlice({
  name: 'getAllUsers',
  initialState: {
    data: [],
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.status = 'Loading...';
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'Success';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
        state.status = 'Failed';
        state.error = null;
      });
  },
});
export default getAllUsersSlice.reducer;
