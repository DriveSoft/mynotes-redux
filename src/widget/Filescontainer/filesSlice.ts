import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitialState = {
    activeFile: number | null   
}

const initialState: InitialState = {
    activeFile: null
}

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        activeFileChanged: (state, action: PayloadAction<number | null>) => {
            state.activeFile = action.payload    
        }    
    },    
});


export default filesSlice.reducer;
export const { activeFileChanged } = filesSlice.actions;
