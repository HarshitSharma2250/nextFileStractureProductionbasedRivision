"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "./layout/Breadcrumbs";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Routes that shouldn't show Header/Footer
  const hideOnRoutes = ["/login", "/register", "/forgot-password"];
  const hideLayout = hideOnRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <Breadcrumbs />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
