import SidebarQuestionsLargeScreen from "../sidebar-questions-large-screen/SidebarQuestionsLargeScreen";
import QuestionsAndOptionsOfAnswers from "../question-and-options-of-answer/QuestionsAndOptionsOfAnswers";

import { useEffect } from "react";

import useQuestions2 from "../../../hooks/solo-gameplay/useQuestions2";
import SoloGamePlayScoreboard from "../score/SoloGamePlayScoreboard";

const GamepageMainSection = () => {
  // NEW ONES--------------------------------------------------
  const setQuestions = useQuestions2((state) => state.setQuestions);
  useEffect(() => {
    // setChoosenQuestions();
    // setCurrentQuestion();
    setQuestions();
  }, []);
  return (
    <main>
      <section>
        <div className="bg-[#594ECA] px-5 py-7 lg:py-16 lg:flex lg:justify-around">
          <div className="hidden lg:block lg:w-[25%]">
            <SidebarQuestionsLargeScreen />
          </div>
          <div className="lg:w-[65%]">
            <SoloGamePlayScoreboard />
            <QuestionsAndOptionsOfAnswers />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GamepageMainSection;
