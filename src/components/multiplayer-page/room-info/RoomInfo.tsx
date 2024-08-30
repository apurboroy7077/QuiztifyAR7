import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

const RoomInfo = () => {
  const roomName = useMultiplayer((state) => state.roomName);
  const roomId = useMultiplayer((state) => state.roomId);
  const state = useMultiplayer((state) => state);

  return (
    <div>
      <div className="text-[white] text-lg font-medium opacity-[0.6]">
        Room Name: {roomName}
      </div>
      <div className="text-[white] text-lg font-medium opacity-[0.6]">
        Room Id: {roomId}
      </div>
    </div>
  );
};

export default RoomInfo;
