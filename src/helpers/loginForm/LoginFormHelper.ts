import * as yup from "yup"
import { loginValues } from "@/types/loginForm";

export const initiaValues:loginValues ={
    email:"",
    userName:"",
    password:''
}


export const validationSchema: yup.ObjectSchema<loginValues> = yup.object({
  email: yup.string().email("Invalid email").required("Please enter email address"),
  userName: yup
    .string()
    .min(4, "Username must be longer than 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(4, "Password should be more than 3 characters")
    .required("Password is required"),
});
