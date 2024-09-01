import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

const GameOnOffButtons = () => {
  const socketAR7 = useMultiplayer((state) => state.socket);
  const roomId = useMultiplayer((state) => state.roomId);
  const playerId = useMultiplayer((state) => state.playerId);
  const gameRunningStatus = useMultiplayer((state) => state.gameRunningStatus);
  const handleClickOnStartGameButton = () => {
    const dataForServer = { roomId, playerId };
    socketAR7.emit("startGame", dataForServer);
  };
  const handleClickOnStopGameButton = () => {
    const dataForServer = { roomId, playerId };
    socketAR7.emit("stopGame", dataForServer);
  };

  return (
    <div className="mt-3">
      {gameRunningStatus === "NOT_RUNNING" && (
        <button
          onClick={handleClickOnStartGameButton}
          className="bg-[lawngreen] text-[white] text-sm lg:text-base px-2 lg:px-5 py-1 rounded active:scale-[0.97] hover:shadow-md"
        >
          Start Game
        </button>
      )}
      {gameRunningStatus === "RUNNING" && (
        <button
          onClick={handleClickOnStopGameButton}
          className="bg-[red] text-[white] text-sm lg:text-base px-2 lg:px-5 py-1 rounded active:scale-[0.97] hover:shadow-md"
        >
          Stop Game
        </button>
      )}
    </div>
  );
};

export default GameOnOffButtons;
