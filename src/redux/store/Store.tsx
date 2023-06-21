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
import searchReducer from '../reducers/Searchslice';

import productCollectionReducer from '../reducers/productReducer'

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
    search: searchReducer,
    getProductById: getProductByIdSlice,
    updateProfile: profileReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
