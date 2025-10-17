import { cn } from "@/lib/utils";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  id: string;
  type?: string;
  disable?: boolean;
  placeholder: string;
  label?: string;
  inputClassName?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors; // FieldErrors<T mặc định là { [key: string]: any }> dùng để bắt lỗi
}

const FormItem = <T extends FieldValues>({
  id,
  type,
  disable,
  placeholder,
  label,
  inputClassName,
  register,
  errors,
}: FormFieldProps<T>) => {
  const message = errors[id] && (errors[id]?.message as string);
  return (
    <div>
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        id={id}
        disabled={disable}
        type={type}
        {...register(id as Path<T>)}
        className={cn(
          "w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 disabled:opacity-70 disabled:cursor-not-allowed border-slate-300 dark:border-slate-700",
          errors[id] && "border-rose-400",
          inputClassName
        )}
        placeholder={placeholder}
      />
      {message && <span className="text-sm text-rose-400 ">{message}</span>}
    </div>
  );
};

export default FormItem;
