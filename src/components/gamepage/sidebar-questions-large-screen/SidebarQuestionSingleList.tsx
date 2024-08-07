import useQuestions, {
  currentSingleQuestionType,
} from "../../../hooks/zustand/useQuestion";

type propsType = {
  data: currentSingleQuestionType;
};

const SidebarQuestionSingleList = (props: propsType) => {
  const { data } = props;
  const currentQuestion = useQuestions((state) => state.currentSingleQuestion);
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
          <button className="active:scale-[0.95]">
            <i className="fa-solid fa-xmark text-[white]"></i>{" "}
          </button>
        </div>
      </div>
    </li>
  );
};

export default SidebarQuestionSingleList;
