import { useEffect, useState } from "react";
import SmallScreenNavbar from "./SmallScreenNavbar";
type stickyType = "STICKY" | "NOT_STICKY";
const SmallScreenHeader = () => {
  const [isSticky, setIsSticky] = useState("NOT_STICKY" as stickyType);
  const handleScroll = () => {
    const myScrollYCordinates = window.scrollY;
    if (myScrollYCordinates > 300) {
      setIsSticky("STICKY");
    } else {
      setIsSticky("NOT_STICKY");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-[white] z-50 ${
          isSticky === "STICKY" ? " sticky top-0" : ""
        }`}
      >
        <SmallScreenNavbar />
      </header>
    </>
  );
};

export default SmallScreenHeader;
