import MultiplayerSidebarQuestionSingleList from "./MultiplayerSidebarQuestionSingleList";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";
import { useEffect, useState } from "react";
import giveQuestionsToDisplay from "../../../functions/useMultiplayer/give-questions-to-display/giveQuestionsToDisplay";

const MultiplayerSidebarQuestionsLargeScreen = () => {
  const currentQuestion = useMultiplayer((state) => state.currentQuestion);
  const choosenQuestions = useMultiplayer((state) => state.choosenQuestions);
  const [questionsToDisplay, setQuestionsToDisplay] = useState(
    [] as multiplayerSingleQuestionDataType[]
  );
  useEffect(() => {
    const displayQuestionData = giveQuestionsToDisplay(
      currentQuestion,
      choosenQuestions,
      questionsToDisplay
    );
    setQuestionsToDisplay(displayQuestionData);
  }, [currentQuestion]);

  return (
    <>
      <ul className="flex flex-col gap-5">
        {questionsToDisplay?.map((questionData: any) => {
          return <MultiplayerSidebarQuestionSingleList data={questionData} />;
        })}
      </ul>
    </>
  );
};

export default MultiplayerSidebarQuestionsLargeScreen;
