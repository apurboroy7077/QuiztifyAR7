import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MULTIPLAYER_GAME_PAGE_ADDRESS,
  NORMAL_SERVER_ADDRESS,
} from "../../../data/routes-addresses/addresses";
import axios from "axios";
import { successMessageAR7 } from "../../../functions/utils/sweetAlertMessage";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";
import giveRandomId from "../../../functions/utils/giveRandomId";
type creationRequestStatusType =
  | "NOT_STARTED"
  | "CREATING"
  | "CREATION_FAILED"
  | "CREATION_SUCCESS";
const CreateRoom = () => {
  const navigate = useNavigate();
  const [creationRequestStatus, setCreationRequestStatus] = useState(
    "NOT_STARTED" as creationRequestStatusType
  );
  const setRoomName = useMultiplayer((state) => state.setRoomName);
  const setRoomId = useMultiplayer((state) => state.setRoomId);
  const setPlayerId = useMultiplayer((state) => state.setPlayerId);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataAR7 = new FormData(e.currentTarget);
    const roomName = formDataAR7.get("roomName");
    const playerName = formDataAR7.get("playerName");

    const dataForServer = {
      roomName: roomName,
      playerName: playerName,
    };
    setCreationRequestStatus("CREATING");
    axios
      .post(`${NORMAL_SERVER_ADDRESS}/create-room`, dataForServer)
      .then((response) => {
        setTimeout(() => {
          console.log(response);
          const newRoomId = response.data.roomId;
          const newRoomName = response.data.roomName;
          const playerIdOfTheRoomCreator = response.data.playerId;

          setPlayerId(playerIdOfTheRoomCreator);
          setRoomId(newRoomId);
          setRoomName(newRoomName);
          const serverMessage = response.data.message;
          setCreationRequestStatus("CREATION_SUCCESS");
          successMessageAR7(serverMessage, "Redirecting to Game...");
          setTimeout(() => {
            navigate("/multiplayer-game");
          }, 2000);
        }, 0);
      })
      .catch((error) => {
        setCreationRequestStatus("CREATION_FAILED");
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mt-5 lg:mt-7 text-center">
        <input
          type="text"
          className="bg-[transparent] border-[2px] py-2 lg:py-4 rounded outline-none px-2 text-center text-white lg:w-[30rem] lg:text-lg  focus:shadow-lg"
          name="playerName"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="mt-5 lg:mt-7 text-center">
        <input
          type="text"
          className="bg-[transparent] border-[2px] py-2 lg:py-4 rounded outline-none px-2 text-center text-white lg:w-[30rem] lg:text-lg  focus:shadow-lg"
          name="roomName"
          placeholder="Enter Room Name"
        />
      </div>
      <div className="text-center mt-7 lg:mt-10">
        {creationRequestStatus === "NOT_STARTED" && (
          <button
            type="submit"
            className="bg-[lawngreen] w-[7rem] lg:w-[10rem] py-2 rounded active:scale-[0.95] hover:shadow-lg lg:text-lg text-[white]"
          >
            Create
          </button>
        )}
        {creationRequestStatus === "CREATING" && (
          <button
            type="button"
            className="bg-[lawngreen] w-[8rem] lg:w-[10rem] py-2 rounded active:scale-[0.95] hover:shadow-lg lg:text-lg text-[white]"
          >
            Creating <i className="fa-solid fa-spinner animate-spin ml-1"></i>
          </button>
        )}
        {creationRequestStatus === "CREATION_FAILED" && (
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

export default CreateRoom;
