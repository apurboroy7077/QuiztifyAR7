import HomepageHeroTitle1 from "../title-1/HomepageHeroTitle1";
import HomepageHeroTitle2 from "../title-2/HomepageHeroTitle2";
import HomepageHeroCarousel from "../carousel/HomepageHeroCarousel";
import HomepageHeroButtons from "../buttons/HomepageHeroButtons";
import HomepageHeroReviews from "../reviews/HomepageHeroReviews";
import useBasic from "../../../../hooks/solo-gameplay/useBasic";

const HomepageHeroSection = () => {
  const screenSize = useBasic((state) => state.screenSize);
  return (
    <section>
      <div className="bg-[#5B4FCC] px-5 lg:px-28 py-10 lg:py-28">
        {(screenSize === "SMALL_SCREEN" || screenSize === "MEDIUM_SCREEN") && (
          <>
            <HomepageHeroTitle1 />
            <HomepageHeroTitle2 />
            <HomepageHeroCarousel />
            <HomepageHeroButtons />
            <HomepageHeroReviews />
          </>
        )}

        {screenSize === "LARGE_SCREEN" && (
          <>
            <div className="flex items-center justify-around">
              <div className="w-[45%]">
                <HomepageHeroTitle1 />
                <HomepageHeroTitle2 />
                <HomepageHeroButtons />
                <HomepageHeroReviews />
              </div>
              <div className="w-[45%] min-h-full">
                <HomepageHeroCarousel />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HomepageHeroSection;
