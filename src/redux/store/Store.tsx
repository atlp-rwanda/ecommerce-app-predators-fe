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
import imageSlice from '../reducers/imageSlice';
import authReducer from '../reducers/authSlice';
import chatReducer from '../reducers/chatSlice';
import cartReducer from '../reducers/CartReducer';
import CartCRUD from '../reducers/cartSlice';
import NotificationReducer from '../reducers/NotificationSlice';
import WishlistSlice from '../reducers/WishlistSlice';
import OrdersSlice from "../reducers/OrdersSlice"
import addReview from '../reducers/ReviewSlice';
import HomeProducts from '../reducers/homeProductSlice';


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
    imageStore: imageSlice,
    auth: authReducer,
    carts: CartCRUD,
    cart: cartReducer,    
    notification: NotificationReducer, 
    orders: OrdersSlice,
    review: addReview,
    wishlist: WishlistSlice,
    HomeProducts: HomeProducts,
        
  },
  middleware: [...getDefaultMiddleware(),thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
