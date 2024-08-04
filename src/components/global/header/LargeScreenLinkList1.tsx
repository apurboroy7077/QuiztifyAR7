import { Link, useLocation } from "react-router-dom";
import ar7Id from "../../../utils/unique-id/ar7Id";

const linkData = [
  { name: "Home", link: "/" },
  { name: "Game", link: "/game" },
  { name: "Reviews", link: "/reviews" },
];
type activeStatusType = "ACTIVE" | "NOT_ACTIVE";
const LargeScreenLinkList1 = () => {
  const myLocation = useLocation();
  const currentPathName = myLocation.pathname;

  return (
    <>
      {linkData.map((data) => {
        let activeStatus: activeStatusType = "NOT_ACTIVE";
        if (currentPathName === data.link) {
          activeStatus = "ACTIVE";
        }
        return (
          <Link to={data.link} key={ar7Id()}>
            <li
              className={`text-base text-white font-medium hover:bg-[#505050] px-7 py-2 rounded ${
                activeStatus === "ACTIVE" ? "bg-[#505050]" : ""
              }`}
            >
              {data.name}
            </li>
          </Link>
        );
      })}
    </>
  );
};

export default LargeScreenLinkList1;
