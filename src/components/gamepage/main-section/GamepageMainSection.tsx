import SidebarQuestionsLargeScreen from "../sidebar-questions-large-screen/SidebarQuestionsLargeScreen";
import QuestionsAndOptionsOfAnswers from "../question-and-options-of-answer/QuestionsAndOptionsOfAnswers";
import useChoosenQuestions from "../../../hooks/zustand/useChoosenQuestions";
import { useEffect } from "react";

const GamepageMainSection = () => {
  const choosenQuestions = useChoosenQuestions(
    (state) => state.choosenQuestionsAndAnswersData
  );
  const setChoosenQuestions = useChoosenQuestions(
    (state) => state.setChoosenQuestions
  );

  const setCurrentQuestion = useChoosenQuestions(
    (state) => state.setCurrentQuestion
  );

  useEffect(() => {
    setChoosenQuestions();
    setCurrentQuestion();
  }, []);
  return (
    <main>
      <section>
        <div className="bg-[#594ECA] px-5 py-16 lg:flex lg:justify-around">
          <div className="hidden lg:block lg:w-[25%]">
            <SidebarQuestionsLargeScreen data={choosenQuestions} />
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
