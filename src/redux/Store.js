import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
// import CartReducer 

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
}); 