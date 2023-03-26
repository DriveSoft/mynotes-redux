import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { dataTreeApiToNestedDataTree, createFileAndUpdateFileList } from '../libs/utils'
import { IFileTree, IFileType } from "../../../shared/types"
import { IFileAPI } from "../../../shared/api"

type InitialState = {
    fileItems: IFileTree[] 
}

const initialState: InitialState = {
    fileItems: [],
}

const filesbarSlice = createSlice({
    name: 'filesbar',
    initialState: initialState,
    reducers: {
        fileAdded: (state, action: PayloadAction<{id: number, fileName: string, type: IFileType, parentId: number}>) => {
            state.fileItems = createFileAndUpdateFileList(state.fileItems, action.payload.id, action.payload.parentId, action.payload.fileName, action.payload.type)    
        }
    },
    extraReducers: {
        ['filesAPI/fetchFiles/fulfilled']: (state, action: PayloadAction<IFileAPI[]>) => {
            state.fileItems = dataTreeApiToNestedDataTree(action.payload)
            //console.log('filesAPI/fetchFiles', action.payload)
        }
    }    
})

export default filesbarSlice.reducer
export const { fileAdded } = filesbarSlice.actions;