import { Link } from "react-router-dom";

const HomepageHeroButtons = () => {
  return (
    <div className="mt-10 ">
      <div>
        <button className="w-full bg-[#FFA41C] py-5 text-[white] rounded-full active:scale-[0.95]">
          <i className="fa-solid fa-users text-xl mr-2"></i>
          <span className="font-bold text-lg">Setup Multiplayer</span>
        </button>
      </div>
      <div className="mt-5">
        <Link to={"/game"}>
          <button className="w-full  py-5 text-[white] rounded-full border-[3px] border-[white] active:scale-[0.95]">
            <i className="fa-solid fa-user text-xl mr-2"></i>
            <span className="font-bold text-lg">Play Solo</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomepageHeroButtons;
