import { Link } from "react-router-dom";
import ar7Id from "../../../utils/unique-id/ar7Id";
const LargeScreenNavbar = () => {
  return (
    <nav>
      <ul className="bg-[#2F2684] px-16 py-7 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to={"/"}>
            <li className="text-2xl ethnocentric-font text-white">Earnshaw</li>
          </Link>
          {["Home", "Features", "Reviews"].map((data) => {
            return (
              <Link to={"/"} key={ar7Id()}>
                <li className="text-base text-white font-medium">{data}</li>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-10">
          {["Support", "Sign In"].map((data) => {
            return (
              <Link to={"/"} key={ar7Id()}>
                <li className="text-base text-white font-medium">{data}</li>
              </Link>
            );
          })}
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
