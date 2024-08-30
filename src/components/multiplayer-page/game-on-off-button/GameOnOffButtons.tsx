import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

const GameOnOffButtons = () => {
  const socketAR7 = useMultiplayer((state) => state.socket);

  const roomId = useMultiplayer((state) => state.roomId);
  const handleClickOnStartGameButton = () => {
    socketAR7.emit("startGame", roomId);
  };

  return (
    <div className="mt-3">
      <button
        onClick={handleClickOnStartGameButton}
        className="bg-[lawngreen] text-[white] text-sm lg:text-base px-2 lg:px-5 py-1 rounded active:scale-[0.97] hover:shadow-md"
      >
        Start Game
      </button>
    </div>
  );
};

export default GameOnOffButtons;
