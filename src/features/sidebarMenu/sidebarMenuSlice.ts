import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IButtonId } from "../../types"

type InitialState = {
    activeSidebarMenuButton: IButtonId    
}

const initialState: InitialState = {
    activeSidebarMenuButton: 'FILES'
}

const sidebarMenuSlice = createSlice({
    name: 'sidebarMenu',
    initialState,
    reducers: {
        changed: (state, action: PayloadAction<IButtonId>) => {
            state.activeSidebarMenuButton = action.payload
        },
        clicked: (state, action: PayloadAction<IButtonId>) => {
            if(state.activeSidebarMenuButton === action.payload && action.payload !== 'NONE') {
                state.activeSidebarMenuButton = 'NONE'
            } else {
                state.activeSidebarMenuButton = action.payload    
            }
            
        }        
    },
});


export default sidebarMenuSlice.reducer;
export const { changed, clicked } = sidebarMenuSlice.actions;
