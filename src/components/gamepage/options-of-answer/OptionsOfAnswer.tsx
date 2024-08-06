import useChoosenQuestions from "../../../hooks/zustand/useChoosenQuestions";
import ar7Id from "../../../utils/unique-id/ar7Id";
import SingleOption from "./SingleOption";

const OptionsOfAnswer = () => {
  const currentQuestion = useChoosenQuestions((state) => state.currentQuestion);
  const { options } = currentQuestion;
  return (
    <ul className="mt-10 lg:mt-16 grid gap-4 lg:grid-cols-2">
      {options?.map((optionToChoose) => {
        return <SingleOption key={ar7Id()} option={optionToChoose} />;
      })}
    </ul>
  );
};

export default OptionsOfAnswer;
