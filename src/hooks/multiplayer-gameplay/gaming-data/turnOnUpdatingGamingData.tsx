import React, { useEffect } from "react";
import useMultiplayer from "../useMultiplayer";

const turnOnUpdatingGamingData = () => {
  const socketAR7 = useMultiplayer((state) => state.socket);
  const updateGameData = useMultiplayer((state) => state.updateGameData);
  const roomId = useMultiplayer((state) => state.roomId);
  const setGameData = (data: any) => {
    updateGameData(data);
  };
  const playerId = useMultiplayer((state) => state.playerId);
  useEffect(() => {
    socketAR7?.on("clientSideGameDataReceiver", setGameData);

    const sendingRequestOfGettingDataInterval = setInterval(() => {
      const dataForServer = {
        roomId: roomId,
        timeStamp: Date.now(),
        playerId: playerId,
      };
      socketAR7?.emit("signalToSendGamingData", dataForServer);
    }, 1000);
    return () => {
      socketAR7?.off("clientSideGameDataReceiver", setGameData);
      clearInterval(sendingRequestOfGettingDataInterval);
    };
  }, [socketAR7]);
};

export default turnOnUpdatingGamingData;
