import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice";
import UserReducer from "../reducers/UserSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        user: UserReducer,
    }, 

}); 
export default store;