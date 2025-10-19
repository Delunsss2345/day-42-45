import { authSlice } from "@/features/auth";
import { productSlice } from "@/features/product";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REHYDRATE,
} from "redux-persist";
import { REGISTER } from "redux-persist/es/constants";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  blacklist: [authSlice.reducerPath, productSlice.reducerPath],
};

const authPersistConfig = {
  key: authSlice.reducerPath,
  storage: storage,
  blacklist: ["fetching"],
};

export const rootReducer = combineReducers({
  [productSlice.reducerPath]: productSlice.reducer,
  [authSlice.reducerPath]: persistReducer(authPersistConfig, authSlice.reducer),
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persist = persistStore(store);
setupListeners(store.dispatch);

export { persist, store };
