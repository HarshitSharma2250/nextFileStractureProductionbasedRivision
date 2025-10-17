import { ApiUrls } from "@/api/ApiUrls";
import { Methods } from "@/api/Methods";
import { loginValues } from "@/types/loginForm";
import axios from "axios";

export function LoginService(payload:loginValues) {
    const url = `https://reqres.in/${ApiUrls.login}`
    const res = axios[Methods.POST](url, payload, {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })

    return res;
}