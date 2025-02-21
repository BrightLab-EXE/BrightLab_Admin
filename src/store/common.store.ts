import { create } from "zustand";

export interface ICommonStore {
  tab: string;
  setTab: (value: string) => void;
}

const useCommonStore = create<ICommonStore>((set) => ({
  tab: "dashboard",
  setTab: (value: string) => set(() => ({ tab: value })),
}));

export default useCommonStore;
