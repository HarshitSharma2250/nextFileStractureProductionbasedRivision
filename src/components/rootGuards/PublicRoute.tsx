"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/config/zustand/userStore";
import { REDIRECTS } from "@/config/routes/routes";

export default function PublicRoute({ children }: { children: React.ReactNode }) {
  const token = useUserStore((state) => state.login);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace(REDIRECTS.HOME);
    }
  }, [token, router]); // 👈 runs only when token changes


  // if (!token) return null;
  return <>{children}</>;
}

