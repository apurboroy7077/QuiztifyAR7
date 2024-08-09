import { create } from "zustand";
import questionsAndAnswers from "../../data/questions-and-answers/1";
type currentQuestionsDataType = {
  question: string;
  options: string[];
  correctAnswer: string;
  index: number;
}[];

type currentSingleQuestionType = null | currentQuestionsDataType[number];
type useQuestionType = {
  currentQuestionsData: currentQuestionsDataType;
  setCurrentQuestionsData: () => void;
  currentSingleQuestion: currentSingleQuestionType;
  moveToNextQuestion: () => void;
  oldAlreadyAskedQuestionsData: currentQuestionsDataType;
  currentQuestionDisplayIndex: number;
  questionOverStatus: boolean;
};

const useQuestions = create<useQuestionType>((set) => ({
  currentQuestionsData: [],

  setCurrentQuestionsData: () => {
    const myQuestions = [] as any;
    for (let i = 0; i < 10; i++) {
      const indexAR7 = Math.floor(Math.random() * questionsAndAnswers.length);
      const singleQuestion = questionsAndAnswers[indexAR7];
      let isDuplicate = false;
      for (let i = 0; i < myQuestions.length; i++) {
        const singleChoosenQuestion = myQuestions[i];
        if (singleChoosenQuestion === singleQuestion) {
          isDuplicate = true;
        }
      }
      if (isDuplicate === false) {
        myQuestions.push(singleQuestion);
      }
      if (myQuestions.length > 4) {
        break;
      }
    }
    // ADD INDEX
    for (let i = 0; i < myQuestions.length; i++) {
      const choosenSingleQuestion = myQuestions[i];
      const indexAR7 = i + 1;
      choosenSingleQuestion.index = indexAR7;
    }
    set((state) => {
      return {
        ...state,
        currentQuestionsData: myQuestions,
        currentSingleQuestion: myQuestions[0], //initialize current single question for the first time.
      };
    });
  },
  currentSingleQuestion: null,
  moveToNextQuestion: () => {
    set((state) => {
      const currentSingleQuestionData = state.currentSingleQuestion;
      const currentQuestionsData = state.currentQuestionsData;
      const currentSingleQuestionIndex = currentSingleQuestionData?.index;

      let newCurrentSingleQuestion = null as any;

      if (currentSingleQuestionIndex) {
        if (currentSingleQuestionIndex < currentQuestionsData?.length) {
          const newSingleQuestionIndex = currentSingleQuestionIndex + 1;
          for (let i = 0; i < currentQuestionsData.length; i++) {
            const questionData = currentQuestionsData[i];
            if (questionData.index === newSingleQuestionIndex) {
              newCurrentSingleQuestion = questionData;
            }
          }
          return {
            ...state,
            currentSingleQuestion: newCurrentSingleQuestion,
            currentQuestionDisplayIndex: state.currentQuestionDisplayIndex + 1,
          };
        } else if (
          currentSingleQuestionIndex >= currentQuestionsData?.length &&
          state.currentQuestionDisplayIndex >= 5
        ) {
          // Add new questions if current questions gets ended

          const newQuestionsData = [] as any;
          for (let i = 0; i < 100; i++) {
            const newSingleQuestion = questionsAndAnswers[i];
            // check if this question is already asked
            let isThisQuestionAlreadyAsked = false;
            for (let i = 0; i < currentQuestionsData.length; i++) {
              const oldSingleQuestion = currentQuestionsData[i];
              if (oldSingleQuestion === newSingleQuestion) {
                isThisQuestionAlreadyAsked = true;
              }
            }
            for (
              let i = 0;
              i < state.oldAlreadyAskedQuestionsData.length;
              i++
            ) {
              const oldSingleQuestion = state.oldAlreadyAskedQuestionsData[i];
              if (oldSingleQuestion === newSingleQuestion) {
                isThisQuestionAlreadyAsked = true;
              }
            }

            if (isThisQuestionAlreadyAsked === false && newSingleQuestion) {
              newQuestionsData.push(newSingleQuestion);
            }
            if (newQuestionsData.length >= 5) {
              break;
            }
          }

          // Add index to new question
          let indexStartingpoint = currentSingleQuestionIndex + 1;
          for (let i = 0; i < newQuestionsData.length; i++) {
            newQuestionsData[i].index = indexStartingpoint;
            indexStartingpoint++;
          }
          const newOldAlreadyAskedQuestions = [
            ...state.oldAlreadyAskedQuestionsData,
            ...currentQuestionsData,
          ];

          return {
            ...state,
            currentSingleQuestion: newQuestionsData[0] as any,
            currentQuestionsData: newQuestionsData,
            currentQuestionDisplayIndex: 1,
            oldAlreadyAskedQuestionsData: newOldAlreadyAskedQuestions,
          };
        } else {
          const newSingleQuestionIndex = currentSingleQuestionIndex + 1;
          for (let i = 0; i < currentQuestionsData.length; i++) {
            const questionData = currentQuestionsData[i];
            if (questionData.index === newSingleQuestionIndex) {
              newCurrentSingleQuestion = questionData;
            }
          }
          let isQuestionOver = false;
          if (newSingleQuestionIndex > questionsAndAnswers.length) {
            isQuestionOver = true;
          }
          if (isQuestionOver === false) {
            return {
              ...state,
              currentSingleQuestion: newCurrentSingleQuestion,
              currentQuestionDisplayIndex:
                state.currentQuestionDisplayIndex + 1,
            };
          } else {
            return {
              ...state,
              questionOverStatus: true,
            };
          }
        }
      } else {
        return { ...state };
      }
    });
  },
  oldAlreadyAskedQuestionsData: [],
  currentQuestionDisplayIndex: 1,
  questionOverStatus: false,
}));

export default useQuestions;
export type { currentSingleQuestionType };
