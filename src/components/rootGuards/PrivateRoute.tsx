"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/config/zustand/userStore";
import { REDIRECTS } from "@/config/routes/routes";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = useUserStore((state) => state.login);
  const router = useRouter();




  useEffect(() => {
    if (!token) router.replace(REDIRECTS.LOGIN);
  }, [token, router]);

  if (!token) return null; // prevents flicker

  return <>{children}</>;
}

