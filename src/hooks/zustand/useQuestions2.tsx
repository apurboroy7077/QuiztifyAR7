import { create } from "zustand";
import questionsAndAnswers from "../../data/questions-and-answers/1";
import changeOrderOfArray from "../../functions/utils/changeOrderOfArray";
import addIndex from "../../functions/utils/addIndex";
import giveSingleQuestionAccordingToIndex from "../../functions/utils/giveQuestionAccordingToIndex";
import giveNextDisplayIndexData from "../../functions/utils/giveNextDisplayIndex";
type choosenQuestionsDataType = {
  question: string;
  options: string[];
  correctAnswer: string;
  index: number;
}[];
type useQuestions2Type = {
  choosenQuestions: choosenQuestionsDataType;
  setQuestions: () => void;
  currentSingleQuestion: choosenQuestionsDataType[number] | null;
  indexOfQuestionsToDisplay: {
    from: number;
    to: number;
  };
  moveToNextQuestion: () => void;
  questionOverStatus: "QUESTION_OVER" | "QUESTION_NOT_OVER";
};

const useQuestions2 = create<useQuestions2Type>((set) => ({
  choosenQuestions: [],
  setQuestions: () => {
    set((state) => {
      let choosenQuetionsAR7 = changeOrderOfArray(questionsAndAnswers);
      choosenQuetionsAR7 = addIndex(choosenQuetionsAR7);

      return {
        ...state,
        choosenQuestions: choosenQuetionsAR7,
        currentSingleQuestion: choosenQuetionsAR7[0],
      };
    });
  },
  currentSingleQuestion: null,
  indexOfQuestionsToDisplay: {
    from: 1,
    to: 5,
  },
  moveToNextQuestion: () => {
    set((state) => {
      const currentSingleQuestionAR7 = state.currentSingleQuestion;
      if (
        currentSingleQuestionAR7 &&
        currentSingleQuestionAR7.index <
          state.choosenQuestions[state.choosenQuestions.length - 1].index
      ) {
        const currentSingleQuestionIndexAR7 = currentSingleQuestionAR7?.index;
        const nextSingleQuestionIndex = currentSingleQuestionIndexAR7 + 1;
        const newCurrentSingleQuestionAR7 = giveSingleQuestionAccordingToIndex(
          state.choosenQuestions,
          nextSingleQuestionIndex
        ) as singleQuestionDataType;

        if (
          newCurrentSingleQuestionAR7.index <=
            state.indexOfQuestionsToDisplay.to &&
          newCurrentSingleQuestionAR7.index <=
            state.choosenQuestions[state.choosenQuestions.length - 1].index
        ) {
          return {
            ...state,
            currentSingleQuestion: newCurrentSingleQuestionAR7,
          };
        } else if (
          newCurrentSingleQuestionAR7.index >
            state.indexOfQuestionsToDisplay.to &&
          newCurrentSingleQuestionAR7.index <=
            state.choosenQuestions[state.choosenQuestions.length - 1].index
        ) {
          const newIndexData = giveNextDisplayIndexData(
            state.indexOfQuestionsToDisplay
          );
          return {
            ...state,
            currentSingleQuestion: newCurrentSingleQuestionAR7,
            indexOfQuestionsToDisplay: newIndexData,
          };
        } else {
          return { ...state };
        }
      } else if (
        currentSingleQuestionAR7 &&
        currentSingleQuestionAR7.index >=
          state.choosenQuestions[state.choosenQuestions.length - 1].index
      ) {
        console.log("Question Over");
        return { ...state, questionOverStatus: "QUESTION_OVER" };
      } else {
        console.log(
          "How can we move to next question if current question not created?"
        );
        return {
          ...state,
        };
      }
    });
  },
  questionOverStatus: "QUESTION_NOT_OVER",
}));

export default useQuestions2;
