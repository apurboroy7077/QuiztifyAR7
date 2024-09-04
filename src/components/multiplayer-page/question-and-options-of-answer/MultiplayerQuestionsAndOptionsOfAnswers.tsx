import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";
import useQuestions2 from "../../../hooks/solo-gameplay/useQuestions2";
import MultiplayerPageCountdownTimer from "../count-down-timer/MultiplayerPageCountdownTimer";
import OptionsOfAnswer from "../options-of-answer/MultiplayerOptionsOfAnswer";

const MultiplayerQuestionsAndOptionsOfAnswers = () => {
  const currentSingleQuestion = useMultiplayer(
    (state) => state.currentQuestion
  );
  const countDownTimerTime = useMultiplayer(
    (state) => state.countDownTimerTime
  );
  return (
    <div className="bg-[#7062F4] px-5 lg:px-10 py-5 lg:py-10 rounded-lg lg:rounded-3xl shadow-lg">
      <div className="bg-[#594ECA] px-3 py-3 lg:py-6 rounded-lg text-[white] text-center font-medium lg:text-3xl">
        {currentSingleQuestion?.question}
      </div>
      {countDownTimerTime !== undefined && <MultiplayerPageCountdownTimer />}
      <div className="mt-5 lg:mt-10 flex items-center justify-center h-[9rem] md:h-[15rem] px-5">
        {currentSingleQuestion?.imageSrc && (
          <img
            src={currentSingleQuestion.imageSrc}
            alt=""
            className=" max-h-full object-cover object-center"
          />
        )}
        {!currentSingleQuestion?.imageSrc && (
          <img
            src="/images/1/carodpati-1.avif"
            alt=""
            className=" max-h-full object-cover object-center"
          />
        )}
      </div>
      <OptionsOfAnswer />
    </div>
  );
};

export default MultiplayerQuestionsAndOptionsOfAnswers;
