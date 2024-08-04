import { Link } from "react-router-dom";
import ar7Id from "../../../utils/unique-id/ar7Id";

import LargeScreenLinkButtonType1 from "./LargeScreenLinkButtonType1";

const LargeScreenNavbar = () => {
  return (
    <nav>
      <ul className="bg-[#2F2684] px-16 py-7 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link to={"/"}>
            <li className="text-2xl ethnocentric-font text-white">Earnshaw</li>
          </Link>
          <div className="flex items-center gap-5">
            <LargeScreenLinkButtonType1 name="Home" link="/" />
            <LargeScreenLinkButtonType1 name="Game" link="/game" />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <LargeScreenLinkButtonType1 name="Support" link="/support" />
            <LargeScreenLinkButtonType1 name="Sign in" link="/sign-in" />
          </div>
          <Link to={"/"} key={ar7Id()}>
            <li className="text-base text-[black] bg-[white] px-5 py-2 rounded-xl font-medium active:scale-[0.95]">
              Sign up for Free
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default LargeScreenNavbar;
