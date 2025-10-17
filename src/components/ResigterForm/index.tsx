import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormItem from "../FormItem";
import {
  RegisterSchema,
  type RegisterSchemaType,
} from "../interfaces/register.interface"; // 👉 import schema đăng ký

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    setError("");
    setSuccess("");
    console.log(data);
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
        disabled={isPending}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        Đăng ký
      </button>

      {error && <p className="text-rose-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}
    </form>
  );
};

export default RegisterForm;
