import {configureStore} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import StyleSlice from "./styleSlice";

export const store= configureStore({
    reducer: {
        usersSlice: usersSlice,
        styleSlice: StyleSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch