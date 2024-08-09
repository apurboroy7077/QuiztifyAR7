import { create } from "zustand";
const useScoreInSoloGameplay = create<useScoreInSoloGameplayType>((set) => ({
  currentScore: 0,
  increaseScore: () => {
    set((state) => {
      const currentScore = state.currentScore;
      const newScore = currentScore + 5;

      return { ...state, currentScore: newScore };
    });
  },
}));
export default useScoreInSoloGameplay;
