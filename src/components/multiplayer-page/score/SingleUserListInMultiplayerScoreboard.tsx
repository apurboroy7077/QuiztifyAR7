import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

type propsType = {
  userData: multiplayerSingleUserInfoType;
};

const SingleUserListInMultiplayerScoreboard = (props: propsType) => {
  const { name } = props.userData;
  let finalName: string;
  if (name.length > 5) {
    finalName = name.substring(0, 4);
  } else {
    finalName = name;
  }
  const playerId = useMultiplayer((state) => state.playerId);
  const usersData = useMultiplayer((state) => state.usersInfo);
  let playerScore = 0;
  const initializePlayerScore = () => {
    for (let i = 0; i < usersData.length; i++) {
      const singleUserData = usersData[i];
      if (singleUserData.id === playerId) {
        playerScore = singleUserData.score;
      }
    }
  };
  initializePlayerScore();

  return (
    <li>
      <div className="w-[4rem] lg:w-[6rem] h-[4rem] lg:h-[6rem] relative rounded overflow-hidden cursor-pointer hover:translate-y-[-0.7rem] duration-700">
        <img
          src="/images/2/bill-gates.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="text-xs absolute bottom-0 right-0 bg-[black] bg-opacity-[0.6] px-1 lg:px-3 lg:py-1 w-full text-center">
          {finalName}: {playerScore}
        </div>
      </div>
    </li>
  );
};

export default SingleUserListInMultiplayerScoreboard;
