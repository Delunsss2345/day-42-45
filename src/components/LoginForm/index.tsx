import * as authService from "@/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  LoginSchema,
  type LoginSchemaType,
} from "../../interfaces/login.interface";

import { useFetchFormCurrentUser } from "@/pages/Auth/hooks/useFetchFormCurrentUser";
import FormItem from "../FormItem";
const LoginForm = () => {
  const {
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
  } = useFetchFormCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
  });

  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath, { replace: true });
    }
  }, [currentUser, navigate, params]);

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    setLoading(true);
    setError(undefined);
    setSuccess(undefined);

    try {
      const { access_token, refresh_token } = await authService.login(data);

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      setSuccess("Đăng nhập thành công!");
      dispatch(authService.getCurrentUser());
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log("Lỗi không xác định");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px] m-auto mt-8  gap-2"
    >
      <FormItem
        id="email"
        register={register}
        errors={errors}
        placeholder="Email"
      />
      <FormItem
        id="password"
        register={register}
        errors={errors}
        placeholder="Password"
        type="password"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition
    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
      >
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>
      {error && <p className="text-rose-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}
    </form>
  );
};

export default LoginForm;
