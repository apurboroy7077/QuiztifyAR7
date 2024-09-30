import { useMemo } from "react";
import singleOptionCustomHook from "../../../hooks/multiplayer-gameplay/single-option-custom-hook/singleOptionCustomHook";

type propsType = {
  option: string;
};

const MultiplayerSingleOption = (props: propsType) => {
  const { option } = props;
  const { submitAnswer, markStatus } = singleOptionCustomHook(option);

  // Memoize the content to re-render only when markStatus changes
  const memoizedOptionContent = useMemo(() => {
    return (
      <li>
        <div
          onClick={submitAnswer}
          className={`flex justify-between items-center bg-[#594ECA] px-5 py-3 lg:py-5 rounded lg:rounded-xl  cursor-pointer active:scale-[0.98] border-[3px] border-[#594ECA] 
        ${markStatus === "INITIAL" ? "hover:border-[white]" : ""}
       ${markStatus === "WRONG_ANSWER" ? "border-[#ff0000]" : ""}
       ${markStatus === "CORRECT_ANSWER" ? "border-[#7cfc00]" : ""}
         `}
        >
          <div className="text-[white] lg:text-xl">{option}</div>
          <div>
            {markStatus === "INITIAL" && (
              <div className="bg-[#7062F4] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center"></div>
            )}

            {markStatus === "CORRECT_ANSWER" && (
              <div className="bg-[lawngreen] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center">
                <i className="fa-solid fa-check text-[white] text-xs lg:text-sm"></i>
              </div>
            )}
            {markStatus === "WRONG_ANSWER" && (
              <div className="bg-[red] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center">
                <i className="fa-solid fa-xmark text-[white] text-xs lg:text-sm"></i>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }, [markStatus]); // Memoize the JSX based on `markStatus`, `submitAnswer`, and `option`

  return memoizedOptionContent;
};

export default MultiplayerSingleOption;
