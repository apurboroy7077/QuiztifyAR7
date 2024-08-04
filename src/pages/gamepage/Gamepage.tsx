import HeaderAR7 from "../../components/global/header/HeaderAR7";
import ar7Id from "../../utils/unique-id/ar7Id";
import FooterAR7 from "../../components/global/footer/FooterAR7";

const Gamepage = () => {
  return (
    <>
      <HeaderAR7 />
      <main>
        <section>
          <div className="bg-[#594ECA] px-5 py-16 lg:flex lg:justify-around">
            <div className="hidden lg:block lg:w-[25%]">
              <ul className="flex flex-col gap-5">
                {Array.from({ length: 5 }).map(() => {
                  return (
                    <li key={ar7Id()}>
                      <div className="bg-[#6054D7] px-5 py-5 rounded-lg relative hover:bg-[#7062F4] hover:shadow-lg cursor-pointer">
                        <div className="text-[white] font-medium">
                          QUESTION 1
                        </div>
                        <div className="text-[white] mt-2 lg:text-xl">
                          In what year did the simpson go to caging?
                        </div>
                        <div className="absolute top-2 right-2">
                          <button className="active:scale-[0.95]">
                            <i className="fa-solid fa-xmark text-[white]"></i>{" "}
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:w-[65%]">
              <div className="bg-[#7062F4] px-5 lg:px-10 py-5 lg:py-10 rounded-lg lg:rounded-3xl shadow-lg">
                <div className="bg-[#594ECA] px-3 py-3 lg:py-6 rounded-lg text-[white] text-center font-medium lg:text-3xl">
                  In What year did The Simpsons go to air?
                </div>
                <div className="mt-5 lg:mt-10 flex items-center justify-center">
                  <img
                    src="/images/1/carodpati-1.avif"
                    alt=""
                    className="w-[70%]"
                  />
                </div>
                <ul className="mt-10 lg:mt-16 grid gap-4 lg:grid-cols-2">
                  {Array.from({ length: 4 }).map(() => {
                    return (
                      <li key={ar7Id()}>
                        <div className="flex justify-between items-center bg-[#594ECA] px-5 py-3 lg:py-5 rounded lg:rounded-xl border-[3px] border-[transparent] hover:border-[lawngreen] cursor-pointer active:scale-[0.98]">
                          <div className="text-[white] lg:text-xl">1989</div>
                          <div>
                            <div className="bg-[lawngreen] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center">
                              <i className="fa-solid fa-check text-[white] text-xs lg:text-sm"></i>
                            </div>
                            {/* <div className="bg-[#7062F4] w-[1.3rem] lg:w-[1.5rem] h-[1.3rem] lg:h-[1.5rem] rounded-full flex justify-center items-center"></div> */}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterAR7 />
    </>
  );
};

export default Gamepage;
