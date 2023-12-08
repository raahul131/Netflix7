import * as yup from "yup";

// min 5 character, 1 uppercase, 1 lowercase 1 numeric value
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const SignUpSchema = yup.object({
  name: yup.string().min(4).max(20).required("Required"),
  email: yup.string().email("Enter valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Enter a strong password" })
    .required("Required"),
});

export const SignInSchema = yup.object({
  email: yup.string().email("Enter valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Enter a strong password" })
    .required("Required"),
});
