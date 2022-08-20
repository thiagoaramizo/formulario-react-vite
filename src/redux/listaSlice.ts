import { createSlice } from "@reduxjs/toolkit";

export const listaSlice = createSlice({
    name: 'lista',
    initialState: {
        value: [] as string[]
    },
    reducers: {
        addLista: ( state, action ) => {
            state.value = [ ...state.value, action.payload]
        }
    }
})

export const {addLista} = listaSlice.actions

export default listaSlice.reducer