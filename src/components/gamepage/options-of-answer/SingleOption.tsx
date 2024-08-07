import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useQuestions2 from "../../../hooks/zustand/useQuestions2";
type propsType = {
  option: string;
};
const mySwal = withReactContent(Swal);
type answerOfUserStatus = "NOT_ANSWERED" | "CORRECT_ANSWER" | "WRONG_ANSWER";
const SingleOption = (props: propsType) => {
  const { option } = props;
  const [answerOfUser, setAnswerOfUser] = useState(
    "NOT_ANSWERED" as answerOfUserStatus
  );
  const currentQuestionData = useQuestions2(
    (state) => state.currentSingleQuestion
  );
  const moveToNextQuestion = useQuestions2((state) => state.moveToNextQuestion);

  const popupQuestionOverMessage = () => {
    mySwal.fire({
      title: "Congratulations!",
      text: "You Completed all the Questions!",
      icon: "success",
    });
  };
  const submitAnswer = () => {
    if (option === currentQuestionData?.correctAnswer) {
      setAnswerOfUser("CORRECT_ANSWER");
    } else {
      setAnswerOfUser("WRONG_ANSWER");
    }
    setTimeout(() => {
      moveToNextQuestion();
    }, 1000);
  };
  const questionOverStatus = useQuestions2((state) => state.questionOverStatus);
  useEffect(() => {
    if (questionOverStatus === "QUESTION_OVER") {
      popupQuestionOverMessage();
    }
  }, [questionOverStatus]);

  return (
    <li>
      <div
        onClick={submitAnswer}
        className={`flex justify-between items-center bg-[#594ECA] px-5 py-3 lg:py-5 rounded lg:rounded-xl border-[3px]   cursor-pointer active:scale-[0.98]
        ${
          answerOfUser === "NOT_ANSWERED"
            ? "hover:border-[white] border-[transparent]"
            : ""
        }
         ${answerOfUser === "CORRECT_ANSWER" ? "border-[lawngreen]" : ""}
         ${answerOfUser === "WRONG_ANSWER" ? "border-[red]" : ""}
        
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
