import { ApiUrls } from "@/api/ApiUrls";
import { axiosInstance } from "@/api/axiosInstance";
import { Methods } from "@/api/Methods";


export function allProductsService() {
    const res = axiosInstance[Methods.GET](ApiUrls.products)
    return res;
}