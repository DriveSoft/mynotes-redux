import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { createDataTree } from './utils'
import { IFileAPI } from '../../shared/api'
import { IFileTree, IFileType } from "../../shared/types"
import { getFilesList, createFile } from '../../shared/api'
import { IFileAPICreate } from './files'

type InitialState = {
    fileItems: IFileTree[] 
    loading: boolean
    error: string 
}

const initialState: InitialState = {
    fileItems: [],
    loading: false,
    error: ''
}

// Generated pending, fulfilled and rejected action types
export const fetchFiles = createAsyncThunk('filesAPI/fetchFiles', () => {
    return getFilesList()
        .then(response => response.data)
});



export const createFileAPI = createAsyncThunk('filesAPI/createFile', async (fileObj: IFileAPICreate, thunkAPI) => {
    return createFile(fileObj)
        .then(response => response.data)
});

const filesSlice = createSlice({
    name: 'filesAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFiles.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchFiles.fulfilled, (state, action: PayloadAction<IFileAPI[]>) => {
            state.loading = false;
            console.log(action.payload)
            state.fileItems = createDataTree(action.payload)
            state.error = '';
        })
        builder.addCase(fetchFiles.rejected, (state, action) => {
            state.loading = false;
            state.fileItems = [];
            state.error = action.error.message || 'Something went wrong';
        })        
    }    
});


export default filesSlice.reducer;
//export const { loaded } = filesSlice.actions;
