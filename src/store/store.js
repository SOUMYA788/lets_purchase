import { configureStore } from "@reduxjs/toolkit";

import localStorageReducer from "./slices/localStorageSlice";
import authReducer from "./slices/authSlice";
import windowReducer from "./slices/windowSlice";

export const store = configureStore({
    reducer: { 
        localStorageReducer, 
        authReducer,
        windowReducer
    }

})