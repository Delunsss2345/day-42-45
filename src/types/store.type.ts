import type { rootReducer, store } from "@/store/store";

export type RootStateReduce = ReturnType<typeof rootReducer>; //Type rootReducer
export type AppDispatch = typeof store.dispatch;
