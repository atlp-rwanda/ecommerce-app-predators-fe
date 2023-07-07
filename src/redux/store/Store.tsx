import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from '../reducers/ProductSlice';
import UserReducer from '../reducers/UserSlice';
import ResetPasswordSlice from '../reducers/ResetPasswordSlice';
import UpdatePasswordSlice from '../reducers/UpdatePasswordSlice';
import addProductReducer from '../reducers/vendorSlice';
import OtpReducer from '../reducers/otpSlice';
import disableUserReducer from '../reducers/UserSlice';
import getAllUsersReducer from '../reducers/usersSlice';
import popupReducer from '../reducers/PasswordExpirationReduce';
import updateProduct from '../reducers/UpdateProdSlice';
import getProductByIdSlice from '../reducers/GetProdSlice';
import profileReducer from '../reducers/ProfileReducer';
import productCollectionReducer from '../reducers/productReducer';
import SetRolesSlice from '../reducers/SetRolesSlice';
import searchReducer from '../reducers/Searchslice';
import authReducer from "../reducers/authSlice";
import chatReducer from '../reducers/chatSlice';
import cartReducer from '../reducers/CartReducer';
import notificationSlice from '../reducers/NotificationSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
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
    Admin: SetRolesSlice,
    auth: authReducer,
    cart: cartReducer,    
    notification: notificationSlice,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
