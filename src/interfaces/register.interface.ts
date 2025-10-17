import * as yup from "yup";

export const RegisterSchema = yup.object({
  firstName: yup
    .string()
    .required("Trường first name là bắt buộc")
    .min(2, "First name phải có ít nhất 2 ký tự"),

  lastName: yup
    .string()
    .required("Trường last name là bắt buộc")
    .min(2, "Last name phải có ít nhất 2 ký tự"),

  email: yup
    .string()
    .email("Email sai định dạng")
    .required("Trường email là bắt buộc"),

  password: yup
    .string()
    .min(6, "Mật khẩu tối thiểu 6 ký tự")
    .required("Trường password là bắt buộc"),

  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu nhập lại không khớp")
    .required("Trường xác nhận mật khẩu là bắt buộc"),
});

export type RegisterSchemaType = yup.InferType<typeof RegisterSchema>;
