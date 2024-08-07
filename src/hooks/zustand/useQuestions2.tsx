import { create } from "zustand";

type useQuestions2Type = {
  setQuestions: () => void;
};

const useQuestions2 = create<useQuestions2Type>(() => ({
  setQuestions: () => {},
}));

export default useQuestions2;
