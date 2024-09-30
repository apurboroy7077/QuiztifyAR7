import { useState } from "react";
import useMultiplayer from "../useMultiplayer";
import { failureMessageAR7 } from "../../../functions/utils/sweetAlertMessage";

type markStatusType = "INITIAL" | "CORRECT_ANSWER" | "WRONG_ANSWER";
type submitAnswerType = (submittedAnswer: string) => void;

type useThisOptionMarkStatusCustomHookType = (option: string) => {
  markStatus: markStatusType;
  submitAnswer: submitAnswerType;
};

const useThisOptionMarkStatusCustomHook: useThisOptionMarkStatusCustomHookType =
  (option) => {
    const [markStatus, setMarkStatus] = useState("INITIAL" as markStatusType);
    const gameRunningStatus = useMultiplayer(
      (state) => state.gameRunningStatus
    );
    const currentQuestionData = useMultiplayer(
      (state) => state.currentQuestion
    );

    const setCurrentAnswerSubmitStatus = useMultiplayer(
      (state) => state.setCurrentAnswerSubmitStatusType
    );
    const submitAnswer = () => {
      const isGameRunning = gameRunningStatus === "RUNNING";
      const didSubmittedRightAnswerAndThisIsTheCorrectAnswer =
        option === currentQuestionData?.correctAnswer;
      const didSubmittedWrongAnswer =
        option !== currentQuestionData?.correctAnswer;
      if (!isGameRunning) {
        failureMessageAR7("Game Not Started", "Please Start the Game to Play!");
      } else if (didSubmittedRightAnswerAndThisIsTheCorrectAnswer) {
        setMarkStatus("CORRECT_ANSWER");
        setCurrentAnswerSubmitStatus("SUBMITTED_RIGHT_ANSWER");
      } else if (didSubmittedWrongAnswer) {
        setMarkStatus("WRONG_ANSWER");
      }
    };
    console.log(markStatus);
    return { markStatus, submitAnswer };
  };

export default useThisOptionMarkStatusCustomHook;
