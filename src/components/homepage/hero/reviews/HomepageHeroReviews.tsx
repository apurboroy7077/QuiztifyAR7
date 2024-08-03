import ar7Id from "../../../../utils/unique-id/ar7Id";

const HomepageHeroReviews = () => {
  return (
    <div className="mt-16 lg:ml-3 lg:flex lg:items-center lg:gap-10">
      <div>
        <div className="flex justify-center ">
          {[
            "/images/2/bill-gates.jpg",
            "/images/2/bill-gates.jpg",
            "/images/2/bill-gates.jpg",
            "/images/2/bill-gates.jpg",
            "/images/2/bill-gates.jpg",
          ].map((data) => {
            return (
              <img
                key={ar7Id()}
                src={data}
                alt=""
                className="w-[3.2rem] lg:w-[3.5rem] h-[3.2rem] lg:h-[3.5rem] object-cover object-center rounded-full gap-2 ml-[-5px]"
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-5 lg:mt-0">
          {Array.from({ length: 5 }).map(() => {
            return <i className="fa-solid fa-star text-[gold]"></i>;
          })}
        </div>
        <div className="text-white text-center mt-5 lg:mt-2">
          loved by 10000+ customers
        </div>
      </div>
    </div>
  );
};

export default HomepageHeroReviews;
