import { Link } from "react-router-dom";
import ar7Id from "../../../utils/unique-id/ar7Id";

const FooterAR7 = () => {
  return (
    <footer>
      <div className="bg-[#2F2684] px-5 py-10 lg:pt-20">
        <div className="lg:flex lg:items-start lg:justify-around">
          <div className="lg:w-[30%]">
            <div className="ethnocentric-font text-white">Earnshaw</div>
            <div className="text-[white] mt-2 opacity-[0.7] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              laudantium esse, voluptatem sit dicta labore deleniti iure cumque
              velit laboriosam.
            </div>
            <div className="mt-5 flex gap-5 items-center">
              <Link to={"https://www.facebook.com/apurboroy7077/"}>
                <i className="fa-brands fa-square-facebook text-white text-2xl opacity-[0.7] hover:opacity-[1] transition-all duration-300"></i>
              </Link>
              <Link to={"https://www.linkedin.com/in/apurboroy7077/"}>
                <i className="fa-brands fa-linkedin text-white text-2xl opacity-[0.7] hover:opacity-[1] transition-all duration-300"></i>
              </Link>
              <Link to={"https://github.com/apurboroy7077/"}>
                <i className="fa-brands fa-github text-white text-2xl opacity-[0.7] hover:opacity-[1] transition-all duration-300"></i>
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 grid gap-5 grid-cols-2 lg:grid-cols-4 lg:w-[50%] ">
            <div>
              <div className="text-lg font-medium text-[white]">Tools</div>
              <div className="mt-2">
                <ul className="mt-3 flex flex-col gap-2">
                  {Array.from({ length: 4 }).map(() => {
                    return (
                      <Link key={ar7Id()} to={"/test"}>
                        <li className="text-[white] font-medium opacity-[0.7]">
                          Categories
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="text-lg font-medium text-[white]">Tools</div>
              <div className="mt-2">
                <ul className="mt-3 flex flex-col gap-2">
                  {Array.from({ length: 4 }).map(() => {
                    return (
                      <Link key={ar7Id()} to={"/test"}>
                        <li className="text-[white] font-medium opacity-[0.7]">
                          Categories
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="text-lg font-medium text-[white]">Tools</div>
              <div className="mt-2">
                <ul className="mt-3 flex flex-col gap-2">
                  {Array.from({ length: 4 }).map(() => {
                    return (
                      <Link key={ar7Id()} to={"/test"}>
                        <li className="text-[white] font-medium opacity-[0.7]">
                          Categories
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="text-lg font-medium text-[white]">Tools</div>
              <div className="mt-2">
                <ul className="mt-3 flex flex-col gap-2">
                  {Array.from({ length: 4 }).map(() => {
                    return (
                      <Link key={ar7Id()} to={"/test"}>
                        <li className="text-[white] font-medium opacity-[0.7]">
                          Categories
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5 lg:mt-10 opacity-[0.5]" />
        <div className="text-center mt-5 lg:mt-10 text-[white]">
          &copy; 2024 Apurbo Roy
        </div>
      </div>
    </footer>
  );
};

export default FooterAR7;
