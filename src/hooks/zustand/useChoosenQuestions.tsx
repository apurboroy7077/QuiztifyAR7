import { create } from "zustand";
import questionsAndAnswers1, {
  questionsAndAnwersType,
} from "../../data/questions-and-answers/1";

type currentQuestionType = questionsAndAnwersType[number];
type isAnswerSubmittedType = "SUBMITTED" | "NOT_SUBMITTED";
type useChoosenQuestions = {
  choosenQuestionsAndAnswersData: questionsAndAnwersType;
  setChoosenQuestions: () => void;
  currentQuestion: currentQuestionType;
  setCurrentQuestion: () => void;
  isAnswerSubmitted: isAnswerSubmittedType;
  setIsAnswerSubmitted: (submitStatus: isAnswerSubmittedType) => void;
  // submittedAnswer: string;
  // setSubmittedAnswer: (submittedAnswer: string) => void;
};
const giveRandomQuestionsData = () => {
  const allQuestions = questionsAndAnswers1;
  const choosenQuestions = [] as questionsAndAnwersType;
  for (let i = 0; i < 10; i++) {
    const indexNumber = Math.floor(Math.random() * allQuestions.length);
    const theChoosenOne = allQuestions[indexNumber];
    let isDuplicate = false;
    // checking if duplicate
    for (let i = 0; i < choosenQuestions.length; i++) {
      const singleChoosedQuestion = choosenQuestions[i];
      if (theChoosenOne === singleChoosedQuestion) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      choosenQuestions.push(theChoosenOne);
    }
    if (choosenQuestions.length > 4) {
      break;
    }
  }
  return choosenQuestions;
};
const useChoosenQuestions = create<useChoosenQuestions>((set) => ({
  choosenQuestionsAndAnswersData: [],
  setChoosenQuestions: () => {
    const choosenQuestions = giveRandomQuestionsData();

    set((state) => {
      return {
        ...state,
        choosenQuestionsAndAnswersData: choosenQuestions,
      };
    });
  },
  currentQuestion: {} as currentQuestionType,
  setCurrentQuestion: () => {
    set((state) => {
      let myCurrentQuestion = state.currentQuestion;
      const choosenQuestions = state.choosenQuestionsAndAnswersData;
      let currentQuestionIndexInChoosenQuestion = null;
      // identify the current question's index in the choosen questions array-------
      for (let i = 0; i < choosenQuestions.length; i++) {
        const question = choosenQuestions[i];
        if (myCurrentQuestion === question) {
          currentQuestionIndexInChoosenQuestion = i;
        }
      }
      // if index not found, set the first question from the choosen question as the current question
      if (currentQuestionIndexInChoosenQuestion === null) {
        myCurrentQuestion = choosenQuestions[0];
      } else if (
        currentQuestionIndexInChoosenQuestion <
        state.choosenQuestionsAndAnswersData.length - 1
      ) {
        currentQuestionIndexInChoosenQuestion++;
        myCurrentQuestion =
          choosenQuestions[currentQuestionIndexInChoosenQuestion];
      } else {
        const newChoosenQuestions = giveRandomQuestionsData();
        const newCurrentQuestion = newChoosenQuestions[0];
        return {
          ...state,
          currentQuestion: newCurrentQuestion,
          choosenQuestionsAndAnswersData: newChoosenQuestions,
        };
      }

      return { ...state, currentQuestion: myCurrentQuestion };
    });
  },
  isAnswerSubmitted: "NOT_SUBMITTED",
  setIsAnswerSubmitted: (submitStatus) => {
    set((state) => {
      return {
        ...state,
        isAnswerSubmitted: submitStatus,
      };
    });
  },
}));

export default useChoosenQuestions;
