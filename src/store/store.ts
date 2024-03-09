import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/Auth/authSlice";
import { apiMoviesSlice } from "./reducers/Movies/api/apiMoviesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiMoviesSlice.reducerPath]:
      apiMoviesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiMoviesSlice.middleware
    ),
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;
