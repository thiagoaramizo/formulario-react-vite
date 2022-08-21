import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './listaSlice'
import sanfonaReducer from './sanfonaSlice'

export const store = configureStore({
    reducer: {
        lista: listaReducer,
        sanfona: sanfonaReducer,
    },
})