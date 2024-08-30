import { create } from "zustand";

const useSetupMultiplayer = create<useSetupMultiplayerType>((set) => ({
  selectedOption: "NOT_SELECTED",
  setSelectedOption: (option) => {
    set((state) => {
      return {
        ...state,
        selectedOption: option,
      };
    });
  },
}));

export default useSetupMultiplayer;
