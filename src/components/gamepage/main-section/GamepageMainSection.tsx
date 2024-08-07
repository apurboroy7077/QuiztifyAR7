import SidebarQuestionsLargeScreen from "../sidebar-questions-large-screen/SidebarQuestionsLargeScreen";
import QuestionsAndOptionsOfAnswers from "../question-and-options-of-answer/QuestionsAndOptionsOfAnswers";

import { useEffect } from "react";
import useQuestions from "../../../hooks/zustand/useQuestion";

const GamepageMainSection = () => {
  // NEW ONES--------------------------------------------------

  const setCurrentQuestionsData = useQuestions(
    (state) => state.setCurrentQuestionsData
  );
  useEffect(() => {
    // setChoosenQuestions();
    // setCurrentQuestion();
    setCurrentQuestionsData();
  }, []);
  return (
    <main>
      <section>
        <div className="bg-[#594ECA] px-5 py-16 lg:flex lg:justify-around">
          <div className="hidden lg:block lg:w-[25%]">
            <SidebarQuestionsLargeScreen />
          </div>
          <div className="lg:w-[65%]">
            <QuestionsAndOptionsOfAnswers />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GamepageMainSection;
