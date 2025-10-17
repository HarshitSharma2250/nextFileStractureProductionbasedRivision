'use client'
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"



export default function SingleProductLayout({children}:{children: React.ReactNode}){
    const[count,setcount]=useState(2)
    const router=useRouter()


function handleClick(){
    router.back()
}
if(count==2){
    throw new Error("error getting")
}  // error will handle through global layout 

    return (
        <>
        {children}
        <h1>this is common root layout for product id</h1>
        <button>{count}</button>
        <button onClick={handleClick} className="cursor-pointer rounded-2xl bg-green-800 px-2 py-1">go to prevous </button>
        </>
    )
}