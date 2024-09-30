import { useEffect, useState } from "react";
import useMultiplayer from "../useMultiplayer";

type markStatusType = "INITIAL" | "CORRECT_ANSWER" | "WRONG_ANSWER";
type submitAnswerType = () => void;

type useMarkStatusCustomHook2Type = (option: string) => {
  markStatus: markStatusType;
  submitAnswer: submitAnswerType;
};

const useMarkStatusCustomHook2: useMarkStatusCustomHook2Type = (option) => {
  const [markStatus, setMarkStatus] = useState("INITIAL" as markStatusType);
  const currentAnswerSubmitStatus = useMultiplayer(
    (state) => state.currentAnswerSubmitStatus
  );
  const currentQuestionData = useMultiplayer((state) => state.currentQuestion);

  const socket = useMultiplayer((state) => state.socket);
  const submitAnswer = () => {
    socket.emit("submitAnswer", { test: 7 });
  };
  const check = () => {
    const didUserSubmittedCorrectAnswerAndThisIsTheCorrectAnswer =
      currentAnswerSubmitStatus === "SUBMITTED_RIGHT_ANSWER" &&
      option === currentQuestionData?.correctAnswer;

    if (didUserSubmittedCorrectAnswerAndThisIsTheCorrectAnswer) {
      setMarkStatus("CORRECT_ANSWER");
    }
  };
  useEffect(() => {
    check();
  }, [currentAnswerSubmitStatus]);

  return { markStatus, submitAnswer };
};

export default useMarkStatusCustomHook2;
