import { configureStore } from '@reduxjs/toolkit';
import sidebarMenuReducer from '../features/sidebarMenu/sidebarMenuSlice';
import { filesReducer } from '../widget/Filescontainer';
import { filesAPIReducer } from '../shared/api'
//import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        sidebarMenu: sidebarMenuReducer,
        files: filesReducer,
        filesApi: filesAPIReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch