import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISidebarButtonId } from "../../shared/ui/Sidebar"

type InitialState = {
    activeSidebarMenuButton: ISidebarButtonId    
}

const initialState: InitialState = {
    activeSidebarMenuButton: 'FILES'
}

const sidebarMenuSlice = createSlice({
    name: 'sidebarMenu',
    initialState,
    reducers: {
        changed: (state, action: PayloadAction<ISidebarButtonId>) => {
            state.activeSidebarMenuButton = action.payload
        },
        clicked: (state, action: PayloadAction<ISidebarButtonId>) => {
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
