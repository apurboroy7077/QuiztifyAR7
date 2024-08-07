import ar7Id from "../../../utils/unique-id/ar7Id";

import SidebarQuestionSingleList from "./SidebarQuestionSingleList";

import useQuestions2 from "../../../hooks/zustand/useQuestions2";
import giveQuestionsAccordingToIndex from "../../../functions/utils/giveQuestionsAccordingToIndex";

const SidebarQuestionsLargeScreen = () => {
  const choosenQuestions = useQuestions2((state) => state.choosenQuestions);
  const indexOfQuestionsToDisplay = useQuestions2(
    (state) => state.indexOfQuestionsToDisplay
  );
  const questionToDisplay = giveQuestionsAccordingToIndex(
    choosenQuestions,
    indexOfQuestionsToDisplay
  );

  return (
    <>
      <ul className="flex flex-col gap-5">
        {questionToDisplay?.map((questionData: any) => {
          return (
            <SidebarQuestionSingleList key={ar7Id()} data={questionData} />
          );
        })}
      </ul>
    </>
  );
};

export default SidebarQuestionsLargeScreen;
