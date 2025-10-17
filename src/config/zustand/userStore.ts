import { AuthStore, UserActions } from "@/types/loginForm";
import { create ,StateCreator} from "zustand";
import { persist, devtools } from "zustand/middleware";


// 🧱 1️⃣ What is StateCreator?

// In simple words:

// 🧠 StateCreator is a TypeScript helper type that describes the function you use to create a slice of your Zustand store.

// It ensures that whatever you return from your slice matches the shape of the store state (types, properties, and actions)

// 🧱 1️⃣ Slice: base state + simple setters
const createUserSlice: StateCreator<AuthStore> = (set) => ({
  loading: false,
  error: null,
  name: "",
  login: null, // ✅ added since you're using it in logout & persist
role:'user',


  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setName: (name) => set({ name }),
  setLogin:(login)=>set({login}),
  setRole: (role) => set({ role }),
});

// ⚙️ 3. Actions (async logic)
const createUserActions: StateCreator<UserActions> = (set, get) => ({
  // 🔹 Logout clears all user data
  logoutUser: () => {
    set({ login: null, name: "", error: null });
  },

  // 🔹 Clear error only
  clearError: () => {
    set({ error: null });
  },
});


// 🧱 3️⃣ Store: merge both slices + persist + devtools
export const useUserStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...createUserSlice(set, get, undefined),
        ...createUserActions(set, get),
      }),
      {
        name: "user-storage",
        partialize: (state) => ({
          login: state.login,
          name: state.name,
        }),
      }
    ),
    { name: "UserStore" }
  )
);

