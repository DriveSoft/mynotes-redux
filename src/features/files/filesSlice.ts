import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFileTree } from "../../types"

type InitialState = {
    fileItems: IFileTree[]    
}

const initialState: InitialState = {
    fileItems: [
        {
            id: 1,
            fileName: 'File1',            
        },
        {
            id: 2,
            fileName: 'Folder1',
            childNodes: [
                {
                    id: 3,
                    fileName: 'File2',
                }
            ]
        }
    ]
}

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        loaded: (state, action: PayloadAction<IFileTree[]>) => {
            state.fileItems = action.payload
        }       
    },
});


export default filesSlice.reducer;
export const { loaded } = filesSlice.actions;
