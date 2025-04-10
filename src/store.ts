import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices.tsx"
import { apiSlices } from "./services/api.ts"

export const store = configureStore({
    reducer: {
        [apiSlices.reducerPath]: apiSlices.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlices.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


