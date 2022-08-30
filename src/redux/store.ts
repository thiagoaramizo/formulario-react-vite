import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './listaSlice'
import sanfonaReducer from './sanfonaSlice'
import documentoReducer from './documentoSlice'

export const store = configureStore({
    reducer: {
        lista: listaReducer,
        sanfona: sanfonaReducer,
        documento: documentoReducer,
    },
})