type answerStatusInMultiplayer =
  | "NOT_ANSWERED"
  | "SUBMITTED_WRONG_ANSWER"
  | "SUBMITTED_CORRECT_ANSWER";

type useAnswerSubmitType = {
  answerSubmitStatus: answerStatusInMultiplayer;
  setAnswerSubmitStatus: (status: answerStatusInMultiplayer) => void;
  submitAnswer: (submittedAnswer: string) => void;
};
