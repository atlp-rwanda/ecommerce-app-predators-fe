  import { createAsyncThunk } from '@reduxjs/toolkit';
  import authService from '../../services/authService';

  export interface Credentials {
    email: string | null;
    password: string | null;
  }

  export const login = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials, thunkAPI) => {
      try {
        return await authService.login(credentials);
      } catch (error: any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log('Error:', message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
