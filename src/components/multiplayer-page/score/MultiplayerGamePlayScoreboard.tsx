import { useMemo } from "react";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

import ar7Id from "../../../utils/unique-id/ar7Id";
import SingleUserListInMultiplayerScoreboard from "./SingleUserListInMultiplayerScoreboard";

const MultiplayerGamePlayScoreboard = () => {
  const usersInfo = useMultiplayer((state) => state.usersInfo);
  const addUser = useMultiplayer((state) => state.addUser);
  const testAddUser = () => {
    addUser({ name: "Haaland", id: ar7Id(), score: 0 });
  };
  const usersList = useMemo(() => {
    return (
      <>
        {usersInfo.length > 0 &&
          usersInfo.map((data) => {
            return (
              <SingleUserListInMultiplayerScoreboard
                key={ar7Id()}
                userData={data}
              />
            );
          })}
      </>
    );
  }, [usersInfo]);

  return (
    <ul className="text-[white] text-center mb-3 text-lg font-bold opacity-[0.7] flex justify-end gap-5 flex-wrap px-5">
      <button onClick={testAddUser} className="active:scale-[0.9]">
        Add User
      </button>
      {usersList}
      {usersInfo.length < 1 && (
        <div>
          Loading<i className="fa-solid fa-spinner fa-spin ml-2"></i>
        </div>
      )}
    </ul>
  );
};

export default MultiplayerGamePlayScoreboard;
