import { useEffect } from "react";
import useBasic from "../../hooks/solo-gameplay/useBasic";

const StartupFunctions = () => {
  const setScreenSize = useBasic((state) => state.setScreenSize);

  const handleResize = () => {
    const screendWidth = window.innerWidth;
    setScreenSize(screendWidth);
  };
  const setScreenSizeForTheFirstTime = () => {
    const screendWidth = window.innerWidth;
    setScreenSize(screendWidth);
  };
  useEffect(() => {
    setScreenSizeForTheFirstTime();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <></>;
};

export default StartupFunctions;
