import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const customerSlice = createSlice({
    name: "customerActions",
    initialState: initialState,
    reducers: { // handles state changes
        addCustomer(state, action) {
            state.push(action.payload);
        },
        deleteCustomer(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index)=>index !== deleteIndex)
        }
    }
})

// exporting action creators
export const { addCustomer, deleteCustomer } = customerSlice.actions
// exporting reducers
export default customerSlice.reducer;