import { createSlice } from '@reduxjs/toolkit';
import {disableAccount} from '../action/disableAction'

interface User {
    id: number;
    name: string;
    email: string;
    status: string;
}

interface DisableUserState {
  data: User[
  ];
  status: string;
  loading: boolean;
  error: string | null;
}

const initialState: DisableUserState = {
  data: [],
  status: '',
  loading: false,
  error: null,
};

const disableUserSlice = createSlice({
  name: 'disableUser',
  initialState,
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
      })
      .addCase(disableAccount.rejected, (state) => {
        state.loading = false;
        state.status = 'Account disable failed. Please try again.';
        state.error = null;
      });
  },
});

export default disableUserSlice.reducer;
