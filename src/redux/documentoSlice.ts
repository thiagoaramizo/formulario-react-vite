import { createSlice } from "@reduxjs/toolkit";
import IBloco from "../interfaces/IBloco";

export const documentoSlice = createSlice({
    name: 'documento',
    initialState: {
        id: '1',
        titulo: 'Titulo do documento',
        blocos: <IBloco[]>[]
    },
    reducers: {
        addBloco: ( state, action ) => {
            state.blocos = [ ...state.blocos, action.payload]
        }
    }
})

export const {addBloco} = documentoSlice.actions

export default documentoSlice.reducer