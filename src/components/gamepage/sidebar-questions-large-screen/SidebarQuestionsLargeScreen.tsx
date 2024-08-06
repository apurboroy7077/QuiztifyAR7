import ar7Id from "../../../utils/unique-id/ar7Id";
import { questionsAndAnwersType } from "../../../data/questions-and-answers/1";
import useChoosenQuestions from "../../../hooks/zustand/useChoosenQuestions";
type propsType = {
  data: questionsAndAnwersType;
};
const SidebarQuestionsLargeScreen = (props: propsType) => {
  const { data } = props;
  const currentQuestion = useChoosenQuestions((state) => state.currentQuestion);

  return (
    <ul className="flex flex-col gap-5">
      {data?.map((questionData, index) => {
        const { question } = questionData;
        let isCurrentQuestion = false;
        if (currentQuestion.question === question) {
          isCurrentQuestion = true;
        }

        return (
          <li key={ar7Id()}>
            <div
              className={`bg-[#6054D7] px-5 py-5 rounded-lg relative hover:bg-[#7062F4] hover:shadow-lg cursor-pointer ${
                isCurrentQuestion ? "bg-[#7062F4] shadow-lg" : ""
              }`}
            >
              <div className="text-[white] font-medium">
                QUESTION {index + 1}
              </div>
              <div className="text-[white] mt-2 lg:text-xl">{question}</div>
              <div className="absolute top-2 right-2">
                <button className="active:scale-[0.95]">
                  <i className="fa-solid fa-xmark text-[white]"></i>{" "}
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarQuestionsLargeScreen;
