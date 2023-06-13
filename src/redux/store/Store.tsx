import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/ProductSlice';
import addProductReducer from '../reducers/vendorSlice';
import UserReducer from '../reducers/UserSlice';
import OtpReducer from '../reducers/otpSlice';
const store = configureStore({
  reducer: {
    products: productReducer,
    user: OtpReducer,
    UserReducer,
    addProduct: addProductReducer,
  },
});
export default store;
