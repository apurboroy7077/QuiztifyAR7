import { useNavigate } from "react-router-dom";
import useMultiplayer from "../useMultiplayer";
import { failureMessageAR7 } from "../../../functions/utils/sweetAlertMessage";
import useSetupMultiplayer from "../../setup-multiplayer/useSetupMultiplayer";
import { getDataFromLocalStorage } from "../../../functions/localstorage/get-data-from-localstorage/getDataFromLocalStorage";
import axios from "axios";
import { NORMAL_SERVER_ADDRESS } from "../../../data/routes-addresses/addresses";

const checkIsEligibleToStayInThisPage = () => {
  const navigate = useNavigate();
  const setSetupMultiplayerPageSelectedOption = useSetupMultiplayer(
    (state) => state.setSelectedOption
  );
  const localStorageData = getDataFromLocalStorage();
  const roomId = localStorageData.roomId;
  const playerId = localStorageData.playerId;
  const roomName = localStorageData.roomName;

  const isEligibleToJoinRoom = roomId !== undefined && roomId !== "";
  const resetSetupMultplayerPage = () => {
    setSetupMultiplayerPageSelectedOption("NOT_SELECTED");
  };
  const functionToActivateWhenUserIsNotEligibleToJoinRoom = () => {
    failureMessageAR7("Error Joining Room", "Please Join the Room Again");
    setTimeout(() => {
      resetSetupMultplayerPage();
      navigate("/setup-multiplayer");
    }, 2000);
  };
  // if roomId does not exists in localstorage
  if (!isEligibleToJoinRoom) {
    functionToActivateWhenUserIsNotEligibleToJoinRoom();
  }
  // if roomid exists in localstorage then check that it exists in server
  const dataForServer = { roomId };
  axios
    .post(`${NORMAL_SERVER_ADDRESS}/check-room`, dataForServer)
    .then(() => {})
    .catch((error) => {
      failureMessageAR7("This Room Expired", "Please Create a Room Again");
      setTimeout(() => {
        resetSetupMultplayerPage();
        navigate("/setup-multiplayer");
      }, 2000);
      console.log(error);
    });

  const setRoomName = useMultiplayer((state) => state.setRoomName);
  const setRoomId = useMultiplayer((state) => state.setRoomId);
  const setPlayerId = useMultiplayer((state) => state.setPlayerId);

  setRoomName(roomName);
  setRoomId(roomId);
  setPlayerId(playerId);

  const gameRunningStatus = useMultiplayer((state) => state.gameRunningStatus);
  if (gameRunningStatus === "GAME_OVER") {
    navigate("/setup-multiplayer");
  }
};

export default checkIsEligibleToStayInThisPage;
