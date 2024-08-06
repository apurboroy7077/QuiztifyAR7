import { create } from "zustand";

type useQuestionType = {};

const useQuestion = create<useQuestionType>((set) => ({
  screenSize: "SMALL_SCREEN",
}));

export default useQuestion;
