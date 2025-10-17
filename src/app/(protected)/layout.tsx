// "use client";

import PrivateRoute from "@/components/rootGuards/PrivateRoute";
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
console.log("childeren",children)


  return <PrivateRoute>{children}</PrivateRoute>;
}
