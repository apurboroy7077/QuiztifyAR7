import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NORMAL_SERVER_ADDRESS } from "../../../data/routes-addresses/addresses";
import axios from "axios";
import { successMessageAR7 } from "../../../functions/utils/sweetAlertMessage";

import { getDataFromLocalStorage } from "../../../functions/localstorage/get-data-from-localstorage/getDataFromLocalStorage";
import { saveDataToLocalStorage } from "../../../functions/localstorage/save-data-to-local-storage/saveDataToLocalStorage";

type joinRequestStatusType =
  | "NOT_STARTED"
  | "JOINING"
  | "JOIN_FAILED"
  | "JOIN_SUCCESS";

const JoinRoom = () => {
  const navigate = useNavigate();
  const [joinRequestStatus, setJoinRequestStatus] = useState(
    "NOT_STARTED" as joinRequestStatusType
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataAR7 = new FormData(e.currentTarget);
    const roomId = formDataAR7.get("roomId");
    const playerName = formDataAR7.get("playerName");
    const dataForServer = { roomId: roomId, playerName: playerName };

    setJoinRequestStatus("JOINING");

    axios
      .post(`${NORMAL_SERVER_ADDRESS}/join-room`, dataForServer)
      .then((response) => {
        setTimeout(() => {
          console.log(response);
          const { playerId, playerName, roomId, roomName } = response.data;
          console.log(playerId, playerName, roomId, roomName);
          const localStorageData: any = getDataFromLocalStorage();
          localStorageData.roomId = roomId;
          localStorageData.playerId = playerId;
          localStorageData.roomName = roomName;
          saveDataToLocalStorage(localStorageData);
          setJoinRequestStatus("JOIN_SUCCESS");
          successMessageAR7("Joined Successful", "Redirecting to Game...");
          setTimeout(() => {
            navigate("/multiplayer-game");
          }, 2000);
        }, 0);
      })
      .catch((error) => {
        setJoinRequestStatus("JOIN_FAILED");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* <div className="text-center text-[white] font-medium text-lg lg:text-2xl">
        Enter Room ID
      </div> */}
      <div className="mt-5 lg:mt-7 text-center">
        <input
          type="text"
          name="roomId"
          className="bg-[transparent] border-[2px] py-2 lg:py-4 rounded outline-none px-2 text-center text-white lg:w-[30rem] lg:text-lg  focus:shadow-lg"
          placeholder="Room ID"
        />
      </div>
      <div className="mt-5 lg:mt-7 text-center">
        <input
          type="text"
          name="playerName"
          className="bg-[transparent] border-[2px] py-2 lg:py-4 rounded outline-none px-2 text-center text-white lg:w-[30rem] lg:text-lg  focus:shadow-lg"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="text-center mt-7 lg:mt-10">
        {joinRequestStatus === "NOT_STARTED" && (
          <button
            type="submit"
            className="bg-[lawngreen] w-[7rem] lg:w-[10rem] py-2 rounded active:scale-[0.95] hover:shadow-lg lg:text-lg text-[white]"
          >
            Join
          </button>
        )}
        {joinRequestStatus === "JOINING" && (
          <button
            type="button"
            className="bg-[lawngreen] w-[8rem] lg:w-[10rem] py-2 rounded active:scale-[0.95] hover:shadow-lg lg:text-lg text-[white]"
          >
            Joining <i className="fa-solid fa-spinner animate-spin ml-1"></i>
          </button>
        )}
        {joinRequestStatus === "JOIN_FAILED" && (
          <button
            type="submit"
            className="bg-[red] w-[12rem] lg:w-[14rem] py-2 rounded active:scale-[0.95] hover:shadow-lg lg:text-lg text-[white]"
          >
            Failed! Try Again{" "}
            <i className="fa-solid fa-warning animate-pulse ml-1"></i>
          </button>
        )}
      </div>
    </form>
  );
};

export default JoinRoom;
