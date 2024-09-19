import { create } from "zustand";

type User = {
  name: string;
  avatar: string;
};
type Store = {
  user: User | null;
};

type StoreActions = {
  setUser: (user: User) => void;
  deleteUser: () => void;
};

const useStore = create<Store & StoreActions>((set) => ({
  user: null,
  deleteUser: () => set({ user: null }),
  setUser: (newUser) => set({ user: newUser }),
}));

export { useStore };
