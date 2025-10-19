import { useFetchFormCurrentUser } from "@/pages/Auth/hooks/useFetchFormCurrentUser";
import * as authService from "@/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  RegisterSchema,
  type RegisterSchemaType,
} from "../../interfaces/register.interface";
import FormItem from "../FormItem";
const RegisterForm = () => {
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
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
  });
  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath, { replace: true });
    }
  }, [currentUser, navigate, params]);

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    setLoading(true);
    setError(undefined);
    setSuccess(undefined);
    try {
      const { access_token, refresh_token } = await authService.register(data);

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      setSuccess("Đăng ký thành công");
      dispatch(authService.getCurrentUser());
      console.log(currentUser);
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log("Lỗi không xác định");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px] m-auto mt-8 gap-2"
    >
      <FormItem
        id="firstName"
        register={register}
        errors={errors}
        placeholder="First name"
      />
      <FormItem
        id="lastName"
        register={register}
        errors={errors}
        placeholder="Last name"
      />
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
      <FormItem
        id="password_confirmation"
        register={register}
        errors={errors}
        placeholder="Confirm password"
        type="password"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition
    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
      >
        {loading ? "Đang đăng ký..." : "Đăng ký"}
      </button>

      {error && <p className="text-rose-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}
    </form>
  );
};

export default RegisterForm;
