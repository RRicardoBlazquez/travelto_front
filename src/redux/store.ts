import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch