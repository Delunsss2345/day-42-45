import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormItem from "../FormItem";
import {
  LoginSchema,
  type LoginSchemaType,
} from "../interfaces/login.interface";
const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    setError("");
    console.log(data);
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
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
