import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User;
  setUser(user: User): void;
}

const userInitialState: User = {
  name: "",
  email: "",
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: userInitialState,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
    }
  )
);
