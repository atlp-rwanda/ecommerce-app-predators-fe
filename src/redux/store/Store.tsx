import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '../reducers/ProductSlice';
import UserReducer from '../reducers/UserSlice';
import otpReducer from '../reducers/otpSlice';
import searchReducer from '../reducers/Searchslice';
const rootReducer = combineReducers({
  products: productReducer,
  user: UserReducer,
  otp: otpReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>; // Export RootState type

export default store;
