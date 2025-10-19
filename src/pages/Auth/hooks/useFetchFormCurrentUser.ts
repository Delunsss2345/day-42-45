import { useCurrentUser } from "@/features/auth/hook";
import type { AppDispatch } from "@/types/store.type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";

export const useFetchFormCurrentUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const currentUser = useCurrentUser();

  return {
    dispatch,
    navigate,
    params,
    loading,
    setLoading,
    error,
    setError,
    success,
    setSuccess,
    currentUser,
  };
};
