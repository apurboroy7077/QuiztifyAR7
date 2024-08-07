import ar7Id from "../../../utils/unique-id/ar7Id";

import SidebarQuestionSingleList from "./SidebarQuestionSingleList";
import useQuestions from "../../../hooks/zustand/useQuestion";

const SidebarQuestionsLargeScreen = () => {
  const currentQuestionsData = useQuestions(
    (state) => state.currentQuestionsData
  );

  return (
    <ul className="flex flex-col gap-5">
      {currentQuestionsData?.map((questionData) => {
        return <SidebarQuestionSingleList key={ar7Id()} data={questionData} />;
      })}
    </ul>
  );
};

export default SidebarQuestionsLargeScreen;
