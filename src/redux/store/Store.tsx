import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from "../reducers/ProductSlice";
import UserReducer from "../reducers/UserSlice";
import ResetPasswordSlice from "../reducers/ResetPasswordSlice";
import UpdatePasswordSlice from "../reducers/UpdatePasswordSlice";
import addProductReducer from '../reducers/vendorSlice';
import OtpReducer from '../reducers/otpSlice';
import disableUserReducer from "../reducers/UserSlice"
import getAllUsersReducer from '../reducers/usersSlice'
import popupReducer from '../reducers/PasswordExpirationReduce';
import updateProduct from '../reducers/UpdateProdSlice';
import getProductByIdSlice from '../reducers/GetProdSlice';
import profileReducer from '../reducers/ProfileReducer';
import productCollectionReducer from '../reducers/productReducer'
import SetRolesSlice from "../reducers/SetRolesSlice";
import NotificationReducer from '../reducers/NotificationReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    user: OtpReducer,
    UserReducer,
    User: ResetPasswordSlice,
    Update: UpdatePasswordSlice,
    disableUser: disableUserReducer,
    getAllUsers: getAllUsersReducer,
    addProduct: addProductReducer,
    passwordExpiration: popupReducer,
    CollectionProducts: productCollectionReducer,
    product: updateProduct,
    getProductById: getProductByIdSlice,
    updateProfile: profileReducer,
    Admin: SetRolesSlice,
    notifications:NotificationReducer
  },
   middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
