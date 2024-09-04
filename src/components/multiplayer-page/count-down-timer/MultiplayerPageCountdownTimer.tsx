import React from "react";
import useMultiplayer from "../../../hooks/multiplayer-gameplay/useMultiplayer";

const MultiplayerPageCountdownTimer = () => {
  const countDownTimerTime = useMultiplayer(
    (state) => state.countDownTimerTime
  );
  return (
    <div className="my-3 text-[white] text-center font-medium md:text-xl">
      {countDownTimerTime !== 0 && countDownTimerTime}
      {countDownTimerTime === 0 && "Moved To Next Question"}
    </div>
  );
};

export default MultiplayerPageCountdownTimer;
