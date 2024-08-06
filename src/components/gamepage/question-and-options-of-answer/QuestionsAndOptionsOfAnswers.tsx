import useChoosenQuestions from "../../../hooks/zustand/useChoosenQuestions";
import OptionsOfAnswer from "../options-of-answer/OptionsOfAnswer";

const QuestionsAndOptionsOfAnswers = () => {
  const currentQuestion = useChoosenQuestions((state) => state.currentQuestion);
  const { question } = currentQuestion;
  return (
    <div className="bg-[#7062F4] px-5 lg:px-10 py-5 lg:py-10 rounded-lg lg:rounded-3xl shadow-lg">
      <div className="bg-[#594ECA] px-3 py-3 lg:py-6 rounded-lg text-[white] text-center font-medium lg:text-3xl">
        {question}
      </div>
      <div className="mt-5 lg:mt-10 flex items-center justify-center">
        <img src="/images/1/carodpati-1.avif" alt="" className="w-[70%]" />
      </div>
      <OptionsOfAnswer />
    </div>
  );
};

export default QuestionsAndOptionsOfAnswers;
