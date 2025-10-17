
"use client";

import { initiaValues } from "@/helpers/loginForm/LoginFormHelper"
import { validationSchema } from "@/helpers/loginForm/LoginFormHelper"
import { loginValues } from "@/types/loginForm"
import { useFormik } from "formik"
import CustomFormInput from "../customComponents/Input"
import { useMutation } from "@tanstack/react-query"
import { LoginService } from "@/services/auth.service"
import { useUserStore } from "@/config/zustand/userStore"
import { useRouter } from "next/navigation";



export default function LoginForm() {
const setName=useUserStore((state)=>state.setName)
const setLogin=useUserStore((state)=>state.setLogin)
const router = useRouter();

 const { mutate, isPending } = useMutation({
  mutationKey: ["login"],
  mutationFn: LoginService,
onSuccess: (data) => {
    const token = data?.data?.token;
setLogin(token)
router.push('/');
}
});



    const formik = useFormik<loginValues>({
        initialValues: initiaValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setName(values.userName)
             mutate(values)
        }
    })

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6"
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">Login</h2>

                <CustomFormInput name="email" label="Email" type="email" formik={formik} />
                <CustomFormInput name="password" label="password" type="password" formik={formik} />
                <CustomFormInput name="userName" label="userName" type="text" formik={formik} />

                <button
                    type="submit"
                    disabled={isPending}
                    className={`w-full py-2 rounded-md text-white font-medium ${isPending
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {isPending ? "Logging in..." : "Login"}
                </button>
            </form>
        </>
    )
}