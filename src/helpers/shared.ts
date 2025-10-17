import { useUserStore } from "@/config/zustand/userStore";
import { redirect } from "next/navigation";



export function GetToken(): string {
  try {
    const raw = localStorage.getItem("token");
    return raw ? JSON.parse(raw) : "";
  } catch {
    return "";
  }
}



export function RemoveToken(): string{
      localStorage.clear();
  const { logoutUser } = useUserStore.getState();   
  if(typeof logoutUser !== 'undefined' )
  {
    logoutUser();

  }
redirect("/login")
}