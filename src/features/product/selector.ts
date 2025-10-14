import type { RootStateReduce } from "@/types/store.type";

export const selectLoading = (state: RootStateReduce) => state.product.loading;
export const selectProduct = (state: RootStateReduce) => state.product.list;
