import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setRoles } from '../action/AdminAction';

const setRoleSlice = createSlice({
  name: 'Admin',
  initialState: {
    data: null,
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setRoles.pending, (state) => {
        state.loading = true;
        state.status = 'Loading';
        state.error = null;
      })
      .addCase(setRoles.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = 'User Assigned Role Successfully!';
        state.data = action.payload;
        state.error = null;
        toast.success('User Assigned Role Successfully!');
      })
      .addCase(setRoles.rejected, (state) => {
        state.loading = false;
        state.status = 'Role Assignment Unsuccessfully!';
        state.error = null;
        toast.error('Role Assignment Unsuccessful!');
      });
  },
});
export default setRoleSlice.reducer;
