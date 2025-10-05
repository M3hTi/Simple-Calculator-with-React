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
        const tokens = state.display.split(/([+\-x%])/).filter(token => token !== '');
        console.log(
          "%c🔍 DEBUG: my tokens are:",
          "color: #8B5CF6; font-weight: bold",
          tokens
        );
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
