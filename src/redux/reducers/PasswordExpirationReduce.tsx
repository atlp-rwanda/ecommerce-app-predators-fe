import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { passwordExpirationAction } from '../action/passwordExpirationAction';

const passwordSlice = createSlice({
  name: 'passwordExpiration',
  initialState: {
    passwordExpiration: null,
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(passwordExpirationAction.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(
        passwordExpirationAction.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.status = 'success';
          state.passwordExpiration = action.payload;
          state.error = null;
        }
      )
      .addCase(passwordExpirationAction.rejected, (state) => {
        state.loading = false;
        state.status = 'error';
        return state;
      });
  },
});

export default passwordSlice.reducer;
