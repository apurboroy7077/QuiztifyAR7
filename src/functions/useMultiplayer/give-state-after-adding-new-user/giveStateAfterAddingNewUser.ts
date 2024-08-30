type functionType = (
  newUserData: multiplayerSingleUserInfoType,
  state: useMultiplayerZustandStateType
) => useMultiplayerZustandStateType;

const giveStateAfterAddingNewUser: functionType = (newUserData, state) => {
  const newUserInfo = [...state.usersInfo, newUserData];
  const newState: useMultiplayerZustandStateType = {
    ...state,
    usersInfo: newUserInfo,
  };
  return newState;
};

export default giveStateAfterAddingNewUser;
