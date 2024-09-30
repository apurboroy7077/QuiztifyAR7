import { Socket, io } from "socket.io-client";
import { SOCKET_ADDRESS } from "../../../data/routes-addresses/addresses";

type giveStateAfterTryingToOnSocketType = (
  state: useMultiplayerZustandStateType
) => Promise<useMultiplayerZustandStateType>;

const giveStateAfterTryingToOnSocket: giveStateAfterTryingToOnSocketType = (
  state
) => {
  return new Promise((resolve, reject) => {
    try {
      const mySocket: Socket = io(SOCKET_ADDRESS, {
        reconnection: true,
        reconnectionAttempts: 3,
      });
      mySocket.on("connect", () => {
        const newState: useMultiplayerZustandStateType = {
          ...state,
          socket: mySocket,
        };
        resolve(newState);
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default giveStateAfterTryingToOnSocket;
