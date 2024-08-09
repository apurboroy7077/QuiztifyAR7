import useScoreInSoloGameplay from "../../../hooks/solo-gameplay/useScore/useScore";

const SoloGamePlayScoreboard = () => {
  const currentScore = useScoreInSoloGameplay((state) => state.currentScore);

  return (
    <div className="text-[white] text-center mb-3 text-lg font-bold opacity-[0.7]">
      Score : {currentScore}
    </div>
  );
};

export default SoloGamePlayScoreboard;
