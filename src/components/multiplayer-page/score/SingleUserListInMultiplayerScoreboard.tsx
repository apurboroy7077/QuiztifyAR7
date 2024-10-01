import { useMemo } from "react";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

type propsType = {
  userData: multiplayerSingleUserInfoType;
};
type markStatus = "INITIAL" | "CORRECT_ANSWER" | "WRONG_ANSWER";
const SingleUserListInMultiplayerScoreboard = (props: propsType) => {
  const { name } = props.userData;
  const userData: any = props.userData;
  const currentQuestionData = useMultiplayer((state) => state.currentQuestion);
  let dataOfLastQuestionAnswered: any;
  const answeredQuestionOfTheUser = userData.answeredQuestion;
  let markStatus: markStatus = "INITIAL";
  if (answeredQuestionOfTheUser.length > 0) {
    dataOfLastQuestionAnswered =
      answeredQuestionOfTheUser[answeredQuestionOfTheUser.length - 1];
    const userAlreadyAnsweredThisQuestion =
      dataOfLastQuestionAnswered.question === currentQuestionData?.question;
    if (userAlreadyAnsweredThisQuestion) {
      const isAnswerOfUserOfCurrentQuestionCorrect =
        dataOfLastQuestionAnswered.correctAnswer ===
        dataOfLastQuestionAnswered.answerOfUser;
      if (isAnswerOfUserOfCurrentQuestionCorrect) {
        markStatus = "CORRECT_ANSWER";
      } else {
        markStatus = "WRONG_ANSWER";
      }
    }
  }

  let finalName: string;
  if (name.length > 5) {
    finalName = name.substring(0, 4);
  } else {
    finalName = name;
  }
  const playerId = useMultiplayer((state) => state.playerId);
  const usersData = useMultiplayer((state) => state.usersInfo);
  let playerScore = 0;
  const initializePlayerScore = () => {
    for (let i = 0; i < usersData.length; i++) {
      const singleUserData = usersData[i];
      if (singleUserData.id === playerId) {
        playerScore = singleUserData.score;
      }
    }
  };
  initializePlayerScore();

  const code = useMemo(() => {
    return (
      <li>
        <div
          className={`w-[4rem] lg:w-[6rem] h-[4rem] lg:h-[6rem] relative rounded overflow-hidden cursor-pointer hover:translate-y-[-0.7rem] duration-700 ${
            markStatus === "CORRECT_ANSWER"
              ? "border-[#7CFC00] border-[3px] animate-bounce"
              : ""
          }
          ${
            markStatus === "WRONG_ANSWER"
              ? "border-[#FF0000] border-[3px] animate-pulse"
              : ""
          }
          
          
          `}
        >
          <img
            src="/images/2/bill-gates.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="text-xs absolute bottom-0 right-0 bg-[black] bg-opacity-[0.6] px-1 lg:px-3 lg:py-1 w-full text-center">
            {finalName}: {playerScore}
          </div>
        </div>
      </li>
    );
  }, [markStatus, finalName, playerScore]);

  return code;
};

export default SingleUserListInMultiplayerScoreboard;
