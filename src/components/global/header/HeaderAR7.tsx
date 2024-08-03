import useBasic from "../../../hooks/zustand/useBasic";
import LargeScreenHeader from "./LargeScreenHeader";
import SmallScreenHeader from "./SmallScreenHeader";

const HeaderAR7 = () => {
  const screenSizeAR7 = useBasic((state) => state.screenSize);
  console.log(screenSizeAR7);
  return (
    <>
      {(screenSizeAR7 === "SMALL_SCREEN" ||
        screenSizeAR7 === "MEDIUM_SCREEN") && <SmallScreenHeader />}
      {screenSizeAR7 === "LARGE_SCREEN" && <LargeScreenHeader />}
    </>
  );
};

export default HeaderAR7;
