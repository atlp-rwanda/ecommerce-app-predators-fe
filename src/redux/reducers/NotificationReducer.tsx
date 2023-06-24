import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  ToastNotificationAction,
  DisplayNotificationAction,
} from '../action/NotificationAction';

const NotificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    data: null,
    status: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ToastNotificationAction.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        ToastNotificationAction.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.status = 'notification Request Successfully!';
          state.data = action.payload;
          state.error = null;

          // Display a toast notification
          toast.success('Notification Link sent to Your Email');
        }
      )
      .addCase(ToastNotificationAction.rejected, (state) => {
        state.loading = false;
        state.status = 'notification Request Unsuccessful!';
        state.error = null;

        // Display an error toast notification
        toast.error('Request to notification Unsuccessful, Try Again');
      })

      .addCase(DisplayNotificationAction.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        DisplayNotificationAction.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.status = 'notification Request Successfully!';
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(DisplayNotificationAction.rejected, (state) => {
        state.loading = false;
        state.status = 'notification Request Unsuccessful!';
        state.error = null;
      });
  },
});

export default NotificationSlice.reducer;
