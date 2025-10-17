import { GetToken, RemoveToken } from "@/helpers/shared";
import axios from "axios";



export const axiosInstance=axios.create({
    baseURL:`https://fakestoreapi.com`
})

//request
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=GetToken()

   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
      (error) => Promise.reject(error)
)

//response
axiosInstance.interceptors.response.use(
    (response)=>response.data,
    (error)=>{
           const status = error?.response?.status;
        const message = error?.response?.data?.message || "Error Making Api Request"

        if (status === 403 || message.toLowerCase() === "invalid or expired token") {
            RemoveToken();
           
        }
    }
)