import { getCurrentUser } from "@/services/auth";
import type { AppDispatch, RootStateReduce } from "@/types/store.type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFetchCurrentUser = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
};

export const useCurrentUser = () => {
  const currentUser = useSelector(
    (state: RootStateReduce) => state.auth.currentUser
  );
  return currentUser;
};
