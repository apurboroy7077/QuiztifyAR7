import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useQuestions2 from "../../../hooks/solo-gameplay/useQuestions2";
import useScoreInSoloGameplay from "../../../hooks/solo-gameplay/useScore/useScore";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";
type propsType = {
  option: string;
};
const mySwal = withReactContent(Swal);
type answerOfUserStatus = "NOT_ANSWERED" | "CORRECT_ANSWER" | "WRONG_ANSWER";
const MultiplayerSingleOption = (props: propsType) => {
  const { option } = props;
  const [answerOfUser, setAnswerOfUser] = useState(
    "NOT_ANSWERED" as answerOfUserStatus
  );
  const currentQuestionData = useMultiplayer((state) => state.currentQuestion);
  const moveToNextQuestion = useQuestions2((state) => state.moveToNextQuestion);
  const currentScore = useScoreInSoloGameplay((state) => state.currentScore);
  const popupQuestionOverMessage = () => {
    mySwal.fire({
      title: "Congratulations!",
      text: `Your Score is ${currentScore}!`,
      icon: "success",
    });
  };
  const currentAnswerSubmitStatus = useQuestions2(
    (state) => state.currentAnswerSubmitStatus
  );
  const setCurrentAnswerSubmitStatus = useQuestions2(
    (state) => state.setCurrentAnswerSubmitStatus
  );
  const increaseScore = useScoreInSoloGameplay((state) => state.increaseScore);
  const submitAnswer = () => {
    setCurrentAnswerSubmitStatus("SUBMITTED");
    if (option === currentQuestionData?.correctAnswer) {
      setAnswerOfUser("CORRECT_ANSWER");
      increaseScore();
    } else {
      setAnswerOfUser("WRONG_ANSWER");
    }
    setTimeout(() => {
      setCurrentAnswerSubmitStatus("NOT_SUBMITTED");
      moveToNextQuestion();
    }, 1000);
  };
  const questionOverStatus = useQuestions2((state) => state.questionOverStatus);
  const resetState = useQuestions2((state) => state.reset);
  const setQuestions = useQuestions2((state) => state.setQuestions);
  useEffect(() => {
    if (questionOverStatus === "QUESTION_OVER") {
      popupQuestionOverMessage();
      resetState();
      setQuestions();
    }
  }, [questionOverStatus]);

  return (
    <li>
      <div
        onClick={submitAnswer}
        className={`flex justify-between items-center bg-[#594ECA] px-5 py-3 lg:py-5 rounded lg:rounded-xl  cursor-pointer active:scale-[0.98] border-[3px] border-[#594ECA] 
        ${
          answerOfUser === "NOT_ANSWERED" &&
          currentAnswerSubmitStatus === "NOT_SUBMITTED"
            ? "hover:border-[white]"
            : ""
        }
       ${answerOfUser === "WRONG_ANSWER" ? "border-[#ff0000]" : ""}
       ${answerOfUser === "CORRECT_ANSWER" ? "border-[#7cfc00]" : ""}
       ${
         answerOfUser === "NOT_ANSWERED" &&
         currentAnswerSubmitStatus === "SUBMITTED" &&
         currentQuestionData?.correctAnswer === option
           ? "border-[#7cfc00]"
           : ""
       }
        
        
         `}
      >
        <div className="text-[white] lg:text-xl">{option}</div>
        <div>
          {answerOfUser === "NOT_ANSWERED" &&
            currentAnswerSubmitStatus === "NOT_SUBMITTED" && (
              <div className="bg-[#7062F4] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center"></div>
            )}
          {answerOfUser === "NOT_ANSWERED" &&
            currentAnswerSubmitStatus === "SUBMITTED" &&
            option !== currentQuestionData?.correctAnswer && (
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
          {answerOfUser === "NOT_ANSWERED" &&
            currentAnswerSubmitStatus === "SUBMITTED" &&
            option === currentQuestionData?.correctAnswer && (
              <div className="bg-[lawngreen] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center">
                <i className="fa-solid fa-check text-[white] text-xs lg:text-sm"></i>
              </div>
            )}
        </div>
      </div>
    </li>
  );
};

export default MultiplayerSingleOption;
