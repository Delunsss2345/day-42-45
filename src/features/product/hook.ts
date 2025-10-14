import { selectProduct as selectProductsList } from "@/features/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList as getProductsList } from "@/services/product";
import type { AppDispatch } from "@/types/store.type";
export const useFetchProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);
};
export const useProducts = () => {
  const products = useSelector(selectProductsList);

  return products;
};
