import { create } from "zustand";
import giveStateAfterAddingNewUser from "../../functions/useMultiplayer/give-state-after-adding-new-user/giveStateAfterAddingNewUser";
import giveStateAfterTryingToOnSocket from "../../functions/useMultiplayer/socket/giveStateAfterTryingToOnSocket";
import { getDataFromLocalStorage } from "../../functions/localstorage/get-data-from-localstorage/getDataFromLocalStorage";

const useMultiplayer = create<useMultiplayerZustandStateType>((set, get) => ({
  playerName: "",
  playerId: "",
  roomId: "",
  roomName: "",
  gameRunningStatus: "NOT_RUNNING",
  currentQuestion: null,
  choosenQuestions: [],
  countDownTimerTime: undefined,

  usersInfo: [
    // { name: "Apurbo Roy", id: "ar7", score: 0 },
    // { name: "Liam", id: "liam10", score: 10 },
    // { name: "Richard", id: "342", score: 5 },
  ],

  socket: null,
  currentAnswerSubmitStatus: "NOT_SUBMITTED",

  setCurrentAnswerSubmitStatusType: (submissionStatus) => {
    set((state) => ({ ...state, currentAnswerSubmitStatus: submissionStatus }));
  },
  submitCurrentQuestion: (answer) => {
    set((state) => {
      const correctAnswer = state.currentQuestion?.correctAnswer;
      let currentAnswerSubmitStatus: currentAnswerSubmitStatusType;
      if (correctAnswer === answer) {
        currentAnswerSubmitStatus = "SUBMITTED_RIGHT_ANSWER";
      } else {
        currentAnswerSubmitStatus = "SUBMITTED_WRONG_ANSWER";
      }
      return { ...state, currentAnswerSubmitStatus: currentAnswerSubmitStatus };
    });
  },
  submitAnswerOfCurrentQuestion2: (answer: string) => {
    console.log(answer);
  },
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
      const { gameRunningStatus = "NOT_RUNNING" } = data;
      const { countDownTimerTime = undefined } = data;
      set((state) => {
        // let currentAnswerSubmitStatus = state.currentAnswerSubmitStatus;
        const savedData = getDataFromLocalStorage();
        const { roomId, answeredQuestion } = savedData;
        let isCurrentQuestionAlreadyAnswered = false;
        let answerSubmitStatus = state.currentAnswerSubmitStatus;
        for (let i = 0; i < answeredQuestion.length; i++) {
          const singleAnsweredQuestionData = answeredQuestion[i];
          const askedQuestion = singleAnsweredQuestionData.question;
          const roomIdOfAskedQuestion = singleAnsweredQuestionData.roomId;

          if (
            currentQuestionData.question === askedQuestion &&
            roomIdOfAskedQuestion === roomId
          ) {
            isCurrentQuestionAlreadyAnswered = true;
          }
        }
        if (!isCurrentQuestionAlreadyAnswered) {
          answerSubmitStatus = "NOT_SUBMITTED";
        }
        return {
          ...state,
          currentQuestion: currentQuestionData,
          choosenQuestions: allQuestions,
          usersInfo: usersData,
          gameRunningStatus: gameRunningStatus,
          countDownTimerTime: countDownTimerTime,
          currentAnswerSubmitStatus: answerSubmitStatus,
        };
      });
    } else {
      console.log("No Data Exists Of this Room");
    }
  },
}));

export default useMultiplayer;
