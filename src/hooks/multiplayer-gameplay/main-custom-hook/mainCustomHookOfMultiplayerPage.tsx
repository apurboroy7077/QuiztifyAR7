import { useEffect } from "react";
import useMultiplayer from "../useMultiplayer";
import checkIsEligibleToStayInThisPage from "../check-is-eligible-to-stay-in-this-page/checkIsEligibleToStayInThisPage";
import turnOnUpdatingGamingData from "../gaming-data/turnOnUpdatingGamingData";

const mainCustomHookOfMultiplayerPage = () => {
  checkIsEligibleToStayInThisPage();
  turnOnUpdatingGamingData();
  const turnOnSocket = useMultiplayer((state) => state.turnOnSocket);
  const turnOffSocket = useMultiplayer((state) => state.turnOffSocket);
  useEffect(() => {
    turnOnSocket();
    return () => {
      turnOffSocket();
    };
  }, []);
};

export default mainCustomHookOfMultiplayerPage;
