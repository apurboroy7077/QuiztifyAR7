// this is solo gameplay page

import { useEffect } from "react";

import useQuestions2 from "../../../hooks/solo-gameplay/useQuestions2";

import MultiplayerSidebarQuestionsLargeScreen from "../sidebar-questions-large-screen/MultiplayerSidebarQuestionsLargeScreen";
import MultiplayerGamePlayScoreboard from "../score/MultiplayerGamePlayScoreboard";
import MultiplayerQuestionsAndOptionsOfAnswers from "../question-and-options-of-answer/MultiplayerQuestionsAndOptionsOfAnswers";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";
import turnOnLiveScore from "../../../hooks/multiplayer-gameplay/live-score/turnOnLiveScore";
import turnOnUpdatingGamingData from "../../../hooks/multiplayer-gameplay/gaming-data/turnOnUpdatingGamingData";
import RoomInfo from "../room-info/RoomInfo";
import GameOnOffButtons from "../game-on-off-button/GameOnOffButtons";
import checkIsEligibleToStayInThisPage from "../../../hooks/multiplayer-gameplay/check-is-eligible-to-stay-in-this-page/checkIsEligibleToStayInThisPage";

const MultiplayerPageMain = () => {
  // NEW ONES--------------------------------------------------
  const turnOnSocket = useMultiplayer((state) => state.turnOnSocket);
  const turnOffSocket = useMultiplayer((state) => state.turnOffSocket);

  turnOnUpdatingGamingData();
  checkIsEligibleToStayInThisPage();
  useEffect(() => {
    turnOnSocket();
    return () => {
      turnOffSocket();
    };
  }, []);

  return (
    <main>
      <section>
        <div className="bg-[#594ECA] px-5 py-7 lg:py-16 lg:flex lg:justify-around">
          <div className="hidden lg:block lg:w-[25%]">
            <MultiplayerSidebarQuestionsLargeScreen />
          </div>
          <div className="lg:w-[65%]">
            <RoomInfo />
            <GameOnOffButtons />
            <MultiplayerGamePlayScoreboard />
            <MultiplayerQuestionsAndOptionsOfAnswers />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MultiplayerPageMain;
