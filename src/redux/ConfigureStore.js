import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
// import { baseApi } from "../api/baseApi";
import { apiSlice } from "../api/apiSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { persistConfig } from "./persist";
import persistStore from "redux-persist/es/persistStore";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = {
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
