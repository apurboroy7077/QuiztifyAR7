import { useMemo } from "react";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

import ar7Id from "../../../utils/unique-id/ar7Id";
import SingleOption from "./MultiplayerSingleOption";

const MultiplayerOptionsOfAnswer = () => {
  const currentSingleQuestion = useMultiplayer(
    (state) => state.currentQuestion
  );

  const code = useMemo(() => {
    return (
      <ul className="mt-10 lg:mt-16 grid gap-4 lg:grid-cols-2">
        {currentSingleQuestion?.options?.map((optionToChoose) => {
          return <SingleOption key={ar7Id()} option={optionToChoose} />;
        })}
      </ul>
    );
  }, [currentSingleQuestion?.question]);
  return code;
};

export default MultiplayerOptionsOfAnswer;
