import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/ProductSlice';
import addProductReducer from '../reducers/vendorSlice';
import UserReducer from "../reducers/UserSlice";
import ResetPasswordSlice from "../reducers/ResetPasswordSlice";
import UpdatePasswordSlice from "../reducers/UpdatePasswordSlice";
import OtpReducer from '../reducers/otpSlice';
import cartReducer from '../reducers/CartReducer';


const store = configureStore({
  reducer: {
    products: productReducer,
    user: OtpReducer,
    UserReducer,
    addProduct: addProductReducer,
        User: ResetPasswordSlice,
        Update: UpdatePasswordSlice,
        cart: cartReducer,
        
        
  },
});
export default store;
