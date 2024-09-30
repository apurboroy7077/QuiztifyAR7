import { useEffect } from "react";
import useMultiplayer from "../useMultiplayer";

const turnOnLiveScore = () => {
  const socketAR7 = useMultiplayer((state) => state.socket);

  const setScore = (score: any) => {
    console.log(score);
  };
  useEffect(() => {
    socketAR7?.on("getLiveScore", setScore);
    return () => {
      socketAR7?.off("getLiveScore", setScore);
    };
  }, [socketAR7]);
};

export default turnOnLiveScore;
