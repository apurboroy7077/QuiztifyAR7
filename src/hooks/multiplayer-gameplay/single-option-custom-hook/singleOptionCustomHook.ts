import useMultiplayer from "../useMultiplayer";
import { getDataFromLocalStorage } from "../../../functions/localstorage/get-data-from-localstorage/getDataFromLocalStorage";
import { saveDataToLocalStorage } from "../../../functions/localstorage/save-data-to-local-storage/saveDataToLocalStorage";
const singleOptionCustomHook = (option: string) => {
  const currentAnswerSubmitStatus = useMultiplayer(
    (state) => state.currentAnswerSubmitStatus
  );
  const currentQuestionData = useMultiplayer((state) => state.currentQuestion);
  const submitAnswerOfCurrentQuestionToZustandState = useMultiplayer(
    (state) => state.submitCurrentQuestion
  );
  const mySocket = useMultiplayer((state) => state.socket);
  let markStatus: any = "INITIAL";

  const submitAnswer = () => {
    const localstorageData = getDataFromLocalStorage();
    const roomId = localstorageData.roomId;
    const playerId = localstorageData.playerId;
    let isQuestionAlreadyAnswered = false;
    if (localstorageData.answeredQuestion) {
      for (let i = 0; i < localstorageData.answeredQuestion.length; i++) {
        const alreadyAskedQuestionData = localstorageData.answeredQuestion[i];
        const alreadyAskedQuestion = alreadyAskedQuestionData.question;
        const idOfRoomInWhichTheQuestionWasAsked =
          alreadyAskedQuestionData.roomId;

        const currentQuestion = currentQuestionData?.question;
        if (
          alreadyAskedQuestion === currentQuestion &&
          idOfRoomInWhichTheQuestionWasAsked === roomId
        ) {
          isQuestionAlreadyAnswered = true;
        }
      }
    }
    if (isQuestionAlreadyAnswered) {
      return;
    }
    submitAnswerOfCurrentQuestionToZustandState(option);
    if (!localstorageData.answeredQuestion) {
      localstorageData.answeredQuestion = [];
    }
    const data = {
      roomId: roomId,
      question: currentQuestionData?.question,
      answeredQuestion: option,
    };
    localstorageData.answeredQuestion.push(data);
    const dataForServer = {
      playerId,
      roomId,
      questionData: currentQuestionData,
      answer: option,
    };
    saveDataToLocalStorage(localstorageData);
    mySocket.emit("submitAnswer", dataForServer);
  };
  const checkFunction = () => {
    const isAnswerSubmitted = currentAnswerSubmitStatus !== "NOT_SUBMITTED";
    const isSubmittedRightAnswerAndThisIsTheRightAnswer =
      currentAnswerSubmitStatus === "SUBMITTED_RIGHT_ANSWER" &&
      option === currentQuestionData?.correctAnswer;
    const isSubmittedWrongAnswerButThisIsTheRightAnswer =
      currentAnswerSubmitStatus === "SUBMITTED_WRONG_ANSWER" &&
      option === currentQuestionData?.correctAnswer;
    const isSubmittedWrongAnswerAndThisIsAWrongAnswer =
      currentAnswerSubmitStatus === "SUBMITTED_WRONG_ANSWER" &&
      option !== currentQuestionData?.correctAnswer;
    if (!isAnswerSubmitted) {
      markStatus = "INITIAL";
    } else if (isSubmittedRightAnswerAndThisIsTheRightAnswer) {
      markStatus = "CORRECT_ANSWER";
    } else if (isSubmittedWrongAnswerButThisIsTheRightAnswer) {
      markStatus = "CORRECT_ANSWER";
    } else if (isSubmittedWrongAnswerAndThisIsAWrongAnswer) {
      markStatus = "WRONG_ANSWER";
    }
  };
  // const checkIfThisQuestionAlreadyAskedOrNot = () => {
  //   const savedData = getDataFromLocalStorage();
  //   const answeredQuestions = savedData.answeredQuestions;
  //   console.log(answeredQuestions);
  // };

  checkFunction();

  const thingToReturn = { submitAnswer, markStatus };
  return thingToReturn;
};

export default singleOptionCustomHook;
