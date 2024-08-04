// import React from "react";
// import DropdownListType1 from "./DropdownListType1";

import { useEffect, useRef } from "react";
import DropDownListType1 from "./DropDownListType1";

// import DropdownListType2 from "./DropDownListType2";
type dropDownOpenStatusType = "OPENED" | "CLOSED";
type propsType = {
  dropDownOpenStatus: dropDownOpenStatusType;
};

const DropDownMenu = (props: propsType) => {
  const { dropDownOpenStatus } = props;
  const divRefAR7 = useRef(null);
  const handleSetHeight = () => {
    if (divRefAR7.current) {
      const divAR7 = divRefAR7.current as HTMLDivElement;
      const divHeightAR7 = divAR7.scrollHeight + "px";
      if (dropDownOpenStatus === "OPENED") {
        divAR7.style.height = divHeightAR7;
      } else if (dropDownOpenStatus === "CLOSED") {
        divAR7.style.height = "0px";
      }
    }
  };
  useEffect(() => {
    handleSetHeight();
  }, [dropDownOpenStatus]);
  return (
    <div
      ref={divRefAR7}
      className={`mt-1  border-t-[white] transition-all duration-[0.7s] overflow-hidden h-0 ${
        dropDownOpenStatus === "OPENED" ? "border-t-[1px]" : ""
      }`}
    >
      <ul>
        <DropDownListType1 name="Home" link="/" />
        <DropDownListType1 name="Game" link="/game" />
        <DropDownListType1 name="Test" link="/test" />
      </ul>
    </div>
  );
};

export default DropDownMenu;
