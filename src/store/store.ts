import { productSlice } from "@/features/product";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [productSlice.reducerPath]: productSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});
// setupListeners(store.dispatch);

export { store };
