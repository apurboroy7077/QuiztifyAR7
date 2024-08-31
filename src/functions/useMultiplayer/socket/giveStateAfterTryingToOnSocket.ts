import { Socket, io } from "socket.io-client";
import { SOCKET_ADDRESS } from "../../../data/routes-addresses/addresses";

type giveStateAfterTryingToOnSocketType = (
  state: useMultiplayerZustandStateType
) => Promise<useMultiplayerZustandStateType>;

const giveStateAfterTryingToOnSocket: giveStateAfterTryingToOnSocketType = (
  state
) => {
  return new Promise((resolve, reject) => {
    const mySocket: Socket = io(SOCKET_ADDRESS, { reconnection: false });
    mySocket.on("connect", () => {
      const newState: useMultiplayerZustandStateType = {
        ...state,
        socket: mySocket,
      };
      resolve(newState);
    });
  });
};

export default giveStateAfterTryingToOnSocket;
