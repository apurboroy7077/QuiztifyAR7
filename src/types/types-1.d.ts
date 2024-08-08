type unprocessedSingleQuestionDataType = {
  question: string;
  options: string[];
  correctAnswer: string;
  imageSrc?: string;
};

type singleQuestionDataType = {
  question: string;
  options: string[];
  correctAnswer: string;
  index: number;
  imageSrc?: string;
};
type displayQuestionIndexDataType = {
  from: number;
  to: number;
};
type currentAnswerSubmitStatusType = "SUBMITTED" | "NOT_SUBMITTED";
