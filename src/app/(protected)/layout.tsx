// "use client";

import PrivateRoute from "@/components/rootGuards/PrivateRoute";


export const metadata={  // only can use serviser side nto client side
    title:"this is single link page"
}


export default function ProtectedLayout({ children }: { children: React.ReactNode }) {



  return <PrivateRoute>{children}</PrivateRoute>;
}
