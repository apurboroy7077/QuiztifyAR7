import useSetupMultiplayer from "../../../hooks/setup-multiplayer/useSetupMultiplayer";
import SetupMultiplayerButtons from "../buttons/SetupMultiplayerButtons";
import CreateRoom from "../create-room/CreateRoom";
import JoinRoom from "../join-room/JoinRoom";

const MultiplayerSetupMain = () => {
  const selectedOption = useSetupMultiplayer((state) => state.selectedOption);
  return (
    <main>
      <section>
        <div className="bg-[#594ECA] px-5 h-[70vh] flex items-center justify-center">
          <div>
            {selectedOption === "NOT_SELECTED" && <SetupMultiplayerButtons />}
            {selectedOption === "CREATE_ROOM" && <CreateRoom />}
            {selectedOption === "JOIN_ROOM" && <JoinRoom />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MultiplayerSetupMain;
