import { create } from "zustand";

const useAnswerOfMultiplayer = create<useAnswerSubmitType>((set) => ({
  answerSubmitStatus: "NOT_ANSWERED",

  setAnswerSubmitStatus: (status) => {
    set((state) => ({ ...state, answerSubmitStatus: status }));
  },
  submitAnswer: () => {
    console.log("Submitted Answer");
  },
}));

export default useAnswerOfMultiplayer;
