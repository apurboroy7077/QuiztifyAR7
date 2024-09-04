// import { Socket } from "socket.io-client";

type multiplayerSingleUserInfoType = {
  name: string;
  id: string;
  score: number;
};
type multiplayerSingleQuestionDataType = {
  question: string;
  options: string[];
  correctAnswer: string;
  imageSrc?: string | undefined;
};
type useMultiplayerZustandStateType = {
  playerName: string;
  playerId: string;
  setPlayerName: (playerName: string) => void;
  setPlayerId: (playerId: string) => void;
  roomId: string;
  roomName: string;
  countDownTimerTime: undefined | number;
  gameRunningStatus: "RUNNING" | "NOT_RUNNING";
  currentQuestion: multiplayerSingleQuestionDataType | null;
  choosenQuestions: multiplayerSingleQuestionDataType[];
  usersInfo: multiplayerSingleUserInfoType[];
  setRoomId: (roomId: string) => void;
  setRoomName: (roomName: string) => void;
  addUser: (userInfo: multiplayerSingleUserInfoType) => void;
  socket: null | typeof Socket;
  turnOnSocket: () => void;
  turnOffSocket: () => void;
  updateGameData: (data: multiplayerGameDataReceivedFromServer) => void;
};
