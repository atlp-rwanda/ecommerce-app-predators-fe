import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice";
import UserReducer from "../reducers/UserSlice";
import ResetPasswordSlice from "../reducers/ResetPasswordSlice";
import UpdatePasswordSlice from "../reducers/UpdatePasswordSlice";
import addProductReducer from '../reducers/vendorSlice';
import OtpReducer from '../reducers/otpSlice';
import disableUserReducer from "../reducers/UserSlice"
import getAllUsersReducer from '../reducers/usersSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    user: OtpReducer,
    UserReducer,
    User: ResetPasswordSlice,
    addProduct: addProductReducer,
    Update: UpdatePasswordSlice,
    disableUser: disableUserReducer,
    getAllUsers: getAllUsersReducer,
  },
});
export default store;
