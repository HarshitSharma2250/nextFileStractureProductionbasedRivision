"use client";
import PublicRoute from "@/components/rootGuards/PublicRoute";



export default function AuthLayout({ children }: { children: React.ReactNode }) {

  return <PublicRoute>{children}</PublicRoute>;
}
