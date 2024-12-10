import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ICounter {
  number: number;
  increment: (value: number) => void;
  reset: () => void;
}

const useCounterStore = create<ICounter>((set) => ({
  number: 0,
  increment: (value: number) =>
    set((state) => {
      console.log(state.number);

      return { number: state.number + value };
    }),
  reset: () => set(() => ({ number: 0 })),
}));

export default useCounterStore;
