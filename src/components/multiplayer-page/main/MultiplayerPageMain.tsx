// this is solo gameplay page

import MultiplayerSidebarQuestionsLargeScreen from "../sidebar-questions-large-screen/MultiplayerSidebarQuestionsLargeScreen";
import MultiplayerGamePlayScoreboard from "../score/MultiplayerGamePlayScoreboard";
import MultiplayerQuestionsAndOptionsOfAnswers from "../question-and-options-of-answer/MultiplayerQuestionsAndOptionsOfAnswers";
import RoomInfo from "../room-info/RoomInfo";
// import GameOnOffButtons from "../game-on-off-button/GameOnOffButtons";

import mainCustomHookOfMultiplayerPage from "../../../hooks/multiplayer-gameplay/main-custom-hook/mainCustomHookOfMultiplayerPage";

const MultiplayerPageMain = () => {
  mainCustomHookOfMultiplayerPage();

  return (
    <main>
      <section>
        <div className="bg-[#594ECA] px-5 py-7 lg:py-16 lg:flex lg:justify-around">
          <div className="hidden lg:block lg:w-[25%]">
            <MultiplayerSidebarQuestionsLargeScreen />
          </div>
          <div className="lg:w-[65%]">
            <RoomInfo />
            {/* <GameOnOffButtons /> */}
            <MultiplayerGamePlayScoreboard />
            <MultiplayerQuestionsAndOptionsOfAnswers />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MultiplayerPageMain;
