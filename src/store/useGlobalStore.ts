import create from "zustand";

interface GlobalStore {
  menuToggle: boolean;
  setMenuToggle: (payload: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
  menuToggle: false,
  setMenuToggle: (payload: boolean) =>
    set((state) => ({ menuToggle: payload })),
}));
