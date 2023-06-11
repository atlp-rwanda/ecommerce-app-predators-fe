import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/ProductSlice';
import UserReducer from '../reducers/UserSlice';
import OtpReducer from '../reducers/otpSlice';
const store = configureStore({
  reducer: {
    products: productReducer,
    user: OtpReducer,
    UserReducer,
  },
});
export default store;
