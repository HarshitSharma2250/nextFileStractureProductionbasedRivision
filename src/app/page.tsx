'use client'

import { allProductsService } from "@/services/product.services"
import { useQuery } from "@tanstack/react-query"



export default function Home(){

const {data, isPending}=useQuery({
     queryKey: ['todos'], 
     queryFn: allProductsService 
})

console.log("check response for all products-----",data)

    return <h1> welcome to Home page </h1>
}

//allProductsService