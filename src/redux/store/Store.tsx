import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice";

const store = configureStore({
    reducer: {
        products: productReducer,


    }, 

}); 
export default store;