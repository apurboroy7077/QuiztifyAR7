import React from "react";
import useSetupMultiplayer from "../../../hooks/setup-multiplayer/useSetupMultiplayer";

const SetupMultiplayerButtons = () => {
  const setSelectedOptions = useSetupMultiplayer(
    (state) => state.setSelectedOption
  );
  const handleClickOnCreateRoom = () => {
    setSelectedOptions("CREATE_ROOM");
  };
  const handleClickOnJoinRoom = () => {
    setSelectedOptions("JOIN_ROOM");
  };
  return (
    <>
      <div className="text-center">
        <button
          onClick={handleClickOnCreateRoom}
          className="text-[white] lg:text-xl  w-[13rem] lg:w-[20rem] py-3 lg:py-4 rounded-full active:scale-[0.95] hover:shadow-lg bg-[lawngreen]"
        >
          Create a Room
        </button>
      </div>
      <div className="text-center mt-5 lg:mt-10">
        <button
          onClick={handleClickOnJoinRoom}
          className="text-[white] lg:text-xl  w-[13rem] lg:w-[20rem] py-3 lg:py-4 rounded-full active:scale-[0.95] hover:shadow-lg bg-[#72716d]"
        >
          Join a Room
        </button>
      </div>
    </>
  );
};

export default SetupMultiplayerButtons;
