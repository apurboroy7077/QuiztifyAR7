import { useState } from "react";
import useChoosenQuestions from "../../../hooks/zustand/useChoosenQuestions";

type propsType = {
  option: string;
};
type answerOfUserStatus = "NOT_ANSWERED" | "CORRECT_ANSWER" | "WRONG_ANSWER";
const SingleOption = (props: propsType) => {
  const [answerOfUser, setAnswerOfUser] = useState(
    "NOT_ANSWERED" as answerOfUserStatus
  );
  const { option } = props;
  const currentQuestionData = useChoosenQuestions(
    (state) => state.currentQuestion
  );
  const moveToNextQuestion = useChoosenQuestions(
    (state) => state.setCurrentQuestion
  );
  const isAnswerSubmitted = useChoosenQuestions(
    (state) => state.isAnswerSubmitted
  );
  const setIsAnswerSubmitted = useChoosenQuestions(
    (state) => state.setIsAnswerSubmitted
  );
  const submitAnswer = () => {
    setIsAnswerSubmitted("SUBMITTED");
    if (option === currentQuestionData.correctAnswer) {
      setAnswerOfUser("CORRECT_ANSWER");
    } else {
      setAnswerOfUser("WRONG_ANSWER");
    }
    setTimeout(() => {
      setIsAnswerSubmitted("NOT_SUBMITTED");
      moveToNextQuestion();
    }, 1000);
  };

  return (
    <li>
      <div
        onClick={submitAnswer}
        className={`flex justify-between items-center bg-[#594ECA] px-5 py-3 lg:py-5 rounded lg:rounded-xl border-[3px] border-[transparent]  cursor-pointer active:scale-[0.98]
        ${answerOfUser === "NOT_ANSWERED" ? "hover:border-[white]" : ""}
         ${answerOfUser === "CORRECT_ANSWER" ? "border-[lawngreen]" : ""}
         ${answerOfUser === "WRONG_ANSWER" ? "border-[red]" : ""}
         ${
           answerOfUser === "WRONG_ANSWER" && isAnswerSubmitted === "SUBMITTED"
             ? "border-[red]"
             : ""
         }
         `}
      >
        <div className="text-[white] lg:text-xl">{option}</div>
        <div>
          {answerOfUser === "NOT_ANSWERED" && (
            <div className="bg-[#7062F4] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center"></div>
          )}
          {answerOfUser === "CORRECT_ANSWER" && (
            <div className="bg-[lawngreen] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center">
              <i className="fa-solid fa-check text-[white] text-xs lg:text-sm"></i>
            </div>
          )}
          {answerOfUser === "WRONG_ANSWER" && (
            <div className="bg-[red] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center">
              <i className="fa-solid fa-xmark text-[white] text-xs lg:text-sm"></i>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default SingleOption;
