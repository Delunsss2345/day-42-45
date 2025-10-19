import { getCurrentUser } from "@/services/auth";
import type { InitStateAuth } from "@/types/auth.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitStateAuth = {
  currentUser: null,
  fetching: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.fetching = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.currentUser = null;
        state.fetching = false;
      });
  },
});

export const { setCurrentUser } = authSlice.actions;
export const { reducerPath } = authSlice;

export default authSlice;
