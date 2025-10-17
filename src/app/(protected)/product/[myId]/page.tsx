
// this is how you set metadata for dynamic routes (only apply in server side not client)
import { Metadata } from "next";

export const generateMetadata=async({params,}:props):Promise<Metadata> =>{
    const id=(await params).myId;
    return {
        title:`product ${id}`
    }
}
//-------------------------------------------------

export default async function firstProduct({ params }: { params:{ myId: string }}){



const myId = (await params).myId;

    return (
        <h1>detail about product : {myId}</h1>
    )
}