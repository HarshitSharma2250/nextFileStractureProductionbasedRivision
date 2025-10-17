"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/config/zustand/userStore";
import { REDIRECTS } from "@/config/routes/routes";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const token= useUserStore((state) => state.login);
  const role= useUserStore((state) => state.role);

  const router = useRouter();






  useEffect(() => {
    if (!token) router.replace(REDIRECTS.LOGIN);
    else if (role !== "admin") router.replace(REDIRECTS.HOME);
  }, [token, role, router]);

  if (!token || role !== "admin") return null;

  return <>{children}</>;
}
