import { RemoveToken } from "@/helpers/shared";
import Link from "next/link";

export default function Header(){



    return(
         <header className="w-full bg-gray-900 text-white py-4 shadow-md">
      <nav className="flex mx-auto justify-between items-center px-3">
       
          <p><Link href="/">Home</Link></p>
          <nav className="flex gap-4">
            <p><Link href="/about">About</Link></p>
          <p><Link href="/blog">Blog</Link></p>
          <p><Link href="/contact">Contact</Link></p>
           <p><Link href="/product">product</Link></p>
           <p><Link href="/dashbaord">dahsboard</Link></p>
           <p><Link href="/login" onClick={()=>RemoveToken()}>logout</Link></p>
          </nav>
       
      </nav>
    </header>
    )
}