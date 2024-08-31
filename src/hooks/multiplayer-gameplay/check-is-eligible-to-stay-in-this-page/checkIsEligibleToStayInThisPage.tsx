import { useNavigate } from "react-router-dom";
import useMultiplayer from "../useMultiplayer";
import { failureMessageAR7 } from "../../../functions/utils/sweetAlertMessage";
import useSetupMultiplayer from "../../setup-multiplayer/useSetupMultiplayer";

const checkIsEligibleToStayInThisPage = () => {
  const roomId = useMultiplayer((state) => state.roomId);
  const setSetupMultiplayerPageSelectedOption = useSetupMultiplayer(
    (state) => state.setSelectedOption
  );
  const navigate = useNavigate();
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

  if (!isEligibleToJoinRoom) {
    functionToActivateWhenUserIsNotEligibleToJoinRoom();
  }
};

export default checkIsEligibleToStayInThisPage;
