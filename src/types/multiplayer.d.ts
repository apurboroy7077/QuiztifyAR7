type multiplayerSingleUserDataType = {
  name: string;
  id: string;
  score: number;
};

type multiplayerGameDataReceivedFromServer = {
  roomId: string;
  currentQuestionData: multiplayerSingleQuestionDataType;
  allQuestions: multiplayerSingleQuestionDataType[];
  usersData: multiplayerSingleUserDataType[];
};
