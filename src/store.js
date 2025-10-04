import { create } from "zustand";
import { calculate, calculateParser } from "./utils/utils";

const useCalculator = create((set) => {
  return {
    display: "",
    result: 0,

    appendToDisplay: (value) => {
      set((state) => {
        return {
          ...state,
          display: state.display + value,
          result: 0,
        };
      });
    },

    clearDisplay: () => {
      set((state) => {
        return {
          ...state,
          display: "",
          result: 0,
        };
      });
    },

    calculate: () => {
      set((state) => {
        const tokens = state.display.split("");
        const element = calculateParser(tokens);
        const sum = calculate(element);
        return {
          ...state,
          display: "",
          result: sum,
        };
      });
    },
  };
});

export default useCalculator;
