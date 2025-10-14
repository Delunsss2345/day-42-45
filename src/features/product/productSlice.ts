import { getList } from "@/services/product/product.service";
import type { ProductState } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
  list: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
      
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload.items;
      state.loading = false;
    });
    builder.addCase(getList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setList } = productSlice.actions;
export default productSlice.reducer;
