import { create } from "zustand";
import questionsAndAnswers from "../../data/questions-and-answers/1";
import changeOrderOfArray from "../../functions/utils/changeOrderOfArray";
import addIndex from "../../functions/utils/addIndex";
import giveSingleQuestionAccordingToIndex from "../../functions/utils/giveQuestionAccordingToIndex";
import giveNextDisplayIndexData from "../../functions/utils/giveNextDisplayIndex";
// type choosenQuestionsDataType = {
//   question: string;
//   options: string[];
//   correctAnswer: string;
//   index: number;
// }[];
type useQuestions2Type = {
  choosenQuestions: singleQuestionDataType[];
  setQuestions: () => void;
  currentSingleQuestion: singleQuestionDataType | null;
  indexOfQuestionsToDisplay: {
    from: number;
    to: number;
  };
  moveToNextQuestion: () => void;
  questionOverStatus: "QUESTION_OVER" | "QUESTION_NOT_OVER";
  currentAnswerSubmitStatus: currentAnswerSubmitStatusType;
  setCurrentAnswerSubmitStatus: (status: currentAnswerSubmitStatusType) => void;
  removeQuestion: (questionData: singleQuestionDataType) => void;
  reset: () => void;
};

// const initialState = {
//   choosenQuestions: [],
//   currentSingleQuestion: null,
//   indexOfQuestionsToDisplay: {
//     from: 1,
//     to: 5,
//   },
//   questionOverStatus: "QUESTION_NOT_OVER",
//   currentAnswerSubmitStatus: "NOT_SUBMITTED",
// };

const useQuestions2 = create<useQuestions2Type>((set) => ({
  choosenQuestions: [],
  currentSingleQuestion: null,
  indexOfQuestionsToDisplay: {
    from: 1,
    to: 5,
  },
  questionOverStatus: "QUESTION_NOT_OVER",
  currentAnswerSubmitStatus: "NOT_SUBMITTED",
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

  moveToNextQuestion: () => {
    set((state) => {
      const currentSingleQuestionAR7 = state.currentSingleQuestion;

      if (
        currentSingleQuestionAR7 &&
        currentSingleQuestionAR7.index <
          state.choosenQuestions[state.choosenQuestions.length - 1].index
      ) {
        const currentSingleQuestionIndexAR7 = currentSingleQuestionAR7?.index;
        let nextSingleQuestionIndex = currentSingleQuestionIndexAR7 + 1;
        let newCurrentSingleQuestionAR7: any = null;
        for (let i = 0; i < state.choosenQuestions.length; i++) {
          newCurrentSingleQuestionAR7 = giveSingleQuestionAccordingToIndex(
            state.choosenQuestions,
            nextSingleQuestionIndex
          ) as singleQuestionDataType;
          if (!newCurrentSingleQuestionAR7) {
            nextSingleQuestionIndex++;
          } else {
            break;
          }
        }

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

  setCurrentAnswerSubmitStatus: (status) => {
    set((state) => {
      return { ...state, currentAnswerSubmitStatus: status };
    });
  },
  removeQuestion: (questionData) => {
    set((state) => {
      const newQuestionsData = state.choosenQuestions.filter(
        (data) => data !== questionData
      );
      // check if that the question we are currently removing is current quetion or not
      if (questionData !== state.currentSingleQuestion) {
        // const currentQuestionIndex = state.currentSingleQuestion
        //   ?.index as number;
        return { ...state, choosenQuestions: newQuestionsData };
      } else if (questionData === state.currentSingleQuestion) {
        const oldCurrentSingleQuestionIndex = state.currentSingleQuestion.index;
        const lastQuestionIndex =
          state.choosenQuestions[state.choosenQuestions.length - 1].index;
        if (oldCurrentSingleQuestionIndex >= lastQuestionIndex) {
          console.log("Question Over");
          return { ...state, questionOverStatus: "QUESTION_OVER" };
        } else if (oldCurrentSingleQuestionIndex < lastQuestionIndex) {
          // get the next question
          let nextCurrentQuestion = null as any;
          let newCurrentSingleQuestionIndex = oldCurrentSingleQuestionIndex + 1;
          for (let i = 0; i < state.choosenQuestions.length; i++) {
            nextCurrentQuestion = giveSingleQuestionAccordingToIndex(
              state.choosenQuestions,
              newCurrentSingleQuestionIndex
            );
            if (nextCurrentQuestion) {
              break;
            }
          }
          return {
            ...state,
            choosenQuestions: newQuestionsData,
            currentSingleQuestion: nextCurrentQuestion,
          };
        }
        return { ...state };
      } else {
        return { ...state };
      }
    });
  },
  reset: () => {
    set((state) => {
      return {
        ...state,
        choosenQuestions: [],
        currentSingleQuestion: null,
        indexOfQuestionsToDisplay: {
          from: 1,
          to: 5,
        },
        questionOverStatus: "QUESTION_NOT_OVER",
        currentAnswerSubmitStatus: "NOT_SUBMITTED",
      };
    });
  },
}));

export default useQuestions2;
