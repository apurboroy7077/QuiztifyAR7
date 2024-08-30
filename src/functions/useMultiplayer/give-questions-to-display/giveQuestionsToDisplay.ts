type giveQuestionsToDisplayType = (
  currentQuestion: multiplayerSingleQuestionDataType | null,
  questions: multiplayerSingleQuestionDataType[],
  displayingQuestions: multiplayerSingleQuestionDataType[]
) => multiplayerSingleQuestionDataType[];

const giveQuestionsToDisplay: giveQuestionsToDisplayType = (
  currentQuestion: multiplayerSingleQuestionDataType | null,
  questions: multiplayerSingleQuestionDataType[],
  displayingQuestions: multiplayerSingleQuestionDataType[]
) => {
  let finalQuestionToDisplay = [] as multiplayerSingleQuestionDataType[];
  if (currentQuestion) {
    let currentQuestionIndex = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i] === currentQuestion) {
        currentQuestionIndex = i;
      }
    }
    if (currentQuestionIndex === 0) {
      finalQuestionToDisplay = questions.slice(0, 5);
    }
  }
  return finalQuestionToDisplay;
};

export default giveQuestionsToDisplay;
