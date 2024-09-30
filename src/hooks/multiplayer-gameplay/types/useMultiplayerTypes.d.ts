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
type currentAnswerSubmitStatusType =
  | "NOT_SUBMITTED"
  | "SUBMITTED"
  | "SUBMITTED_RIGHT_ANSWER"
  | "SUBMITTED_WRONG_ANSWER";
type useMultiplayerZustandStateType = {
  playerName: string;
  playerId: string;
  setPlayerName: (playerName: string) => void;
  setPlayerId: (playerId: string) => void;
  roomId: string;
  roomName: string;
  countDownTimerTime: undefined | number;
  gameRunningStatus: "RUNNING" | "NOT_RUNNING";
  currentAnswerSubmitStatus: currentAnswerSubmitStatusType;
  setCurrentAnswerSubmitStatusType: (
    submissionStatus: currentAnswerSubmitStatusType
  ) => void;
  submitCurrentQuestion: (option: string) => void;
  submitAnswerOfCurrentQuestion2: (answer: string) => void;
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
