import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Email sai định dạng")
    .required("Trường email là bắt buộc"),
  password: yup
    .string()
    .min(6, "Mật khẩu tối thiếu 6 ký tự")
    .required("Trường password là bắt buộc"),
});

export type LoginSchemaType = yup.InferType<typeof LoginSchema>; // infer tạo ra type giống với object mẫu

