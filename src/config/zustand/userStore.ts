import { AuthStore, UserActions } from "@/types/loginForm";
import { create ,StateCreator} from "zustand";
import { persist, devtools } from "zustand/middleware";


// 🧱 1️⃣ What is StateCreator?


// 🧱 3️⃣ Store: merge both slices + persist + devtools
export const useUserStore = create()(persist((set, get) => ({
  loading: false,
  error: null,
  name: "",
  login: null, // ✅ added since you're using it in logout & persist
  role:'user',

  actions: {
    setName:(name)=>{set({name}) },
        setLogin:(login)=>{set({login}) },

  logoutUser: () => {
    set({ login: null, name: "", error: null });
  },
  
  // 🔹 Clear error only
  clearError: () => {
    set({ error: null });
  },
  }
}), {name: "auth-user"}));

