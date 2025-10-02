import { create } from "zustand";

const useCalculator = create((set) => {
  return {
    display: "",
    result: 0,

    appendToDisplay: (value) => {
      set((state) => {
        return {
          ...state,
          display: state.display + value,
        };
      });
    },
  };
});

export default useCalculator;
