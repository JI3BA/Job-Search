import { configureStore } from "@reduxjs/toolkit";
import { authorization } from "./authorization/authorization";
import { vacancy } from "./vacancy/vacancy";

export const store = configureStore({
    reducer: {
        [authorization.reducerPath]: authorization.reducer,
        [vacancy.reducerPath]: vacancy.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authorization.middleware, vacancy.middleware)
})