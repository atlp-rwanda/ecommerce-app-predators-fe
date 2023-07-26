import { createSlice } from '@reduxjs/toolkit';
import { login } from '../action/authAction';
import { RootState } from '../store/Store';

interface authState {
  role: 2 | 1 | 0|null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: authState = {
  role: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.status = 'idle';
      state.role = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.role = action.payload;
        state.error = null;
        
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Login failed.';
      });
  },
});

export const selectRole = (state: RootState) => state.auth.role;
export const selectStatus = (state: RootState) => state.auth.status;
export const selectError = (state: RootState) => state.auth.error;

export const { reset } = authSlice.actions;

export default authSlice.reducer;
