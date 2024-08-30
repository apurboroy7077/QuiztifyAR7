import { create } from "zustand";
import giveStateAfterAddingNewUser from "../../functions/useMultiplayer/give-state-after-adding-new-user/giveStateAfterAddingNewUser";
import giveStateAfterTryingToOnSocket from "../../functions/useMultiplayer/socket/giveStateAfterTryingToOnSocket";

const useMultiplayer = create<useMultiplayerZustandStateType>((set, get) => ({
  playerName: "",
  playerId: "",

  roomId: "",
  roomName: "",
  currentQuestion: null,
  choosenQuestions: [],
  usersInfo: [
    { name: "Apurbo Roy", id: "ar7", score: 0 },
    { name: "Liam", id: "liam10", score: 10 },
    { name: "Richard", id: "342", score: 5 },
  ],
  socket: null,
  setPlayerName: (playerName) => {
    set((state) => ({ ...state, playerName: playerName }));
  },
  setPlayerId: (playerId) => {
    set((state) => ({ ...state, playerId: playerId }));
  },
  setRoomName: (roomName) => {
    set((state) => ({
      ...state,
      roomName: roomName,
    }));
  },
  setRoomId: (roomId) => {
    set((state) => ({
      ...state,
      roomId: roomId,
    }));
  },
  addUser: (userInfo) => {
    set((state) => {
      const newState = giveStateAfterAddingNewUser(userInfo, state);
      return newState;
    });
  },

  turnOnSocket: async () => {
    const oldState = get();
    const newState = await giveStateAfterTryingToOnSocket(oldState);
    set(() => {
      return newState;
    });
  },
  turnOffSocket: async () => {
    const socket = get().socket;
    socket?.disconnect();
  },
  updateGameData: (data) => {
    if (data) {
      const { currentQuestionData, allQuestions, usersData } = data;

      set((state) => ({
        ...state,
        currentQuestion: currentQuestionData,
        choosenQuestions: allQuestions,
        usersInfo: usersData,
      }));
    } else {
      console.log("No Data Exists Of this Room");
    }
  },
}));

export default useMultiplayer;
