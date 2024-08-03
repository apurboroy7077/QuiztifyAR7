import { create } from "zustand";
type screenSizeType = "SMALL_SCREEN" | "MEDIUM_SCREEN" | "LARGE_SCREEN";
type useBasicType = {
  screenSize: screenSizeType;
  setScreenSize: (screenWidth: number) => void;
};

const useBasic = create<useBasicType>((set) => ({
  screenSize: "SMALL_SCREEN",
  setScreenSize: (screenWidth) => {
    let myScreenSize: screenSizeType;
    if (screenWidth < 768) {
      myScreenSize = "SMALL_SCREEN";
    } else if (screenWidth > 768 && screenWidth < 1024) {
      myScreenSize = "MEDIUM_SCREEN";
    } else if (screenWidth > 1023) {
      myScreenSize = "LARGE_SCREEN";
    }
    set((state) => {
      return { ...state, screenSize: myScreenSize };
    });
  },
}));

export default useBasic;
