import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './listaSlice'

export const store = configureStore({
    reducer: {
        lista: listaReducer,
    },
})