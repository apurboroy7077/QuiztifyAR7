import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
type dropDownOpenStatusType = "OPENED" | "CLOSED";
const SmallScreenNavbar = () => {
  const [dropDownOpenStatus, setDropDownOpenStatus] = useState(
    "CLOSED" as dropDownOpenStatusType
  );
  const handleClickOnMenuIcon = () => {
    setDropDownOpenStatus("OPENED");
  };
  const handleClickOnCloseMenuIcon = () => {
    setDropDownOpenStatus("CLOSED");
  };
  return (
    <nav>
      <div className="bg-[#2F2684]">
        <div className="px-2 py-3 ">
          <div className="flex justify-between items-center">
            <div className=" flex items-center">
              <div className="font-medium text-lg tracking-widest text-white ethnocentric-font">
                Earnshaw
              </div>
            </div>
            <div>
              {dropDownOpenStatus === "CLOSED" && (
                <div onClick={handleClickOnMenuIcon}>
                  <i className="fa-solid fa-bars text-[white] text-2xl"></i>
                </div>
              )}
              {dropDownOpenStatus === "OPENED" && (
                <div onClick={handleClickOnCloseMenuIcon}>
                  <i className="fa-solid fa-xmark text-[white] text-2xl"></i>
                </div>
              )}
            </div>
          </div>
        </div>
        <DropDownMenu dropDownOpenStatus={dropDownOpenStatus} />
      </div>
    </nav>
  );
};

export default SmallScreenNavbar;
