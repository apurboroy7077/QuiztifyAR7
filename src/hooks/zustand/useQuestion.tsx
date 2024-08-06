import { create } from "zustand";
import { questionsDataType } from "../../data/questions/1";

type useQuestionType = {
  questionsData: questionsDataType;
  setQuestionDataType: () => void;
};

const useQuestion = create<useQuestionType>((set) => ({
  questionsData: [],
  setQuestionDataType: () => {},
}));

export default useQuestion;
