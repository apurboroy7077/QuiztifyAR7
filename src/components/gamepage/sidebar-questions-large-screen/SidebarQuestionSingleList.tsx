import { currentSingleQuestionType } from "../../../hooks/zustand/useQuestion";
import useQuestions2 from "../../../hooks/zustand/useQuestions2";

type propsType = {
  data: currentSingleQuestionType;
};

const SidebarQuestionSingleList = (props: propsType) => {
  const { data } = props;
  const currentQuestion = useQuestions2((state) => state.currentSingleQuestion);
  const removeQuestion = useQuestions2((state) => state.removeQuestion);
  const handleRemoveQuestion = () => {
    const currentQuestionAR7 = data as singleQuestionDataType;
    removeQuestion(currentQuestionAR7);
  };
  return (
    <li>
      <div
        className={`bg-[#6054D7] px-5 py-5 rounded-lg relative hover:bg-[#7062F4] hover:shadow-lg cursor-pointer ${
          currentQuestion?.question === data?.question
            ? "bg-[#7062F4] shadow-lg"
            : ""
        }`}
      >
        <div className="text-[white] font-medium">Question {data?.index}</div>
        <div className="text-[white] mt-2 lg:text-xl">{data?.question}</div>
        <div className="absolute top-2 right-2">
          <button
            onClick={handleRemoveQuestion}
            className="active:scale-[0.95]"
          >
            <i className="fa-solid fa-xmark text-[white]"></i>{" "}
          </button>
        </div>
      </div>
    </li>
  );
};

export default SidebarQuestionSingleList;
