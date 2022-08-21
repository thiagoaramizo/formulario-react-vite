import { createSlice } from "@reduxjs/toolkit";
import ISanfona from "../interfaces/ISanfona";

export const sanfonaSlice = createSlice({
    name: 'sanfona',
    initialState: {
        value: [] as ISanfona[]
    },
    reducers: {
        addItem: ( state, action ) => {
            state.value = [ ...state.value, action.payload]
        }
    }
})

export const {addItem} = sanfonaSlice.actions

export default sanfonaSlice.reducer