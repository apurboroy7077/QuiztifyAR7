import { useEffect } from "react";
import useMultiplayer from "../useMultiplayer";

const turnOnUpdatingGamingData = () => {
  const socketAR7 = useMultiplayer((state) => state.socket);
  const updateGameData = useMultiplayer((state) => state.updateGameData);
  const roomId = useMultiplayer((state) => state.roomId);
  const setGameData = (data: any) => {
    updateGameData(data);
  };
  const turnOnDataReceiverOfClient = () => {
    socketAR7?.on("clientSideGameDataReceiver", setGameData);
  };
  const turnOffDataReceiverOfClient = () => {
    socketAR7?.off("clientSideGameDataReceiver", setGameData);
  };
  const sendRequestToGiveGameData = () => {
    const dataForServer = {
      roomId: roomId,
      timeStamp: Date.now(),
      playerId: playerId,
    };
    socketAR7?.emit("roomDataRequest", dataForServer);
  };

  const playerId = useMultiplayer((state) => state.playerId);
  useEffect(() => {
    turnOnDataReceiverOfClient();
    const sendingRequestOfGettingDataInterval = setInterval(() => {
      sendRequestToGiveGameData();
      console.log("hi");
    }, 2000);
    return () => {
      turnOffDataReceiverOfClient();
      clearInterval(sendingRequestOfGettingDataInterval);
    };
  }, [socketAR7]);
};

export default turnOnUpdatingGamingData;
