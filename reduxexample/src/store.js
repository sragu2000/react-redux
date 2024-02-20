import { configureStore } from "@reduxjs/toolkit";
import customerReducers from "./slices/customerSlice"
const store = configureStore({
    devTools: true,
    reducer: {
        customersA: customerReducers
    }
})
export default store;