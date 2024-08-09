import { create } from "zustand";
type useWrongRightType = {
  submittedAnswer: string;
  rightAnswer: string;
  setRightAnswer: (rightAnswer: string) => void;
  setSubmittedAnswer: (submittedAnswer: string) => void;
};

const useWrongRight = create<useWrongRightType>((set) => ({
  submittedAnswer: "",
  rightAnswer: "",
  setSubmittedAnswer: (submittedAnswerAR7) => {
    set((state) => {
      return { ...state, submittedAnswer: submittedAnswerAR7 };
    });
  },
  setRightAnswer: (rightAnswerAr7) => {
    set((state) => {
      return { ...state, rightAnswer: rightAnswerAr7 };
    });
  },
}));
export default useWrongRight;
