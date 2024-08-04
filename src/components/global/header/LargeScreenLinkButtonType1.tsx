import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
type propsType = {
  name: string;
  link: string;
};
type activeStatusType = "ACTIVE" | "NOT_ACTIVE";
const LargeScreenLinkButtonType1 = (props: propsType) => {
  const { name, link } = props;
  const [activeStatus, setActiveStatus] = useState(
    "NOT_ACTIVE" as activeStatusType
  );
  const myLocation = useLocation();
  const currentPathName = myLocation.pathname;
  const checkActiveStatusFunction = () => {
    if (link === currentPathName) {
      setActiveStatus("ACTIVE");
    }
  };
  useEffect(() => {
    checkActiveStatusFunction();
  }, []);
  return (
    <Link to={link}>
      <li
        className={`text-base text-white font-medium hover:bg-[#505050] px-7 py-2 rounded ${
          activeStatus === "ACTIVE" ? "bg-[#505050]" : ""
        }`}
      >
        {name}
      </li>
    </Link>
  );
};

export default LargeScreenLinkButtonType1;
