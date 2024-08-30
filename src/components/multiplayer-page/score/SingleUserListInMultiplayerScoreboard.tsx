type propsType = {
  userData: multiplayerSingleUserInfoType;
};

const SingleUserListInMultiplayerScoreboard = (props: propsType) => {
  const { name } = props.userData;
  let finalName: string;
  if (name.length > 5) {
    finalName = name.substring(0, 4);
  } else {
    finalName = name;
  }

  return (
    <li>
      <div className="w-[4rem] lg:w-[6rem] h-[4rem] lg:h-[6rem] relative rounded overflow-hidden cursor-pointer hover:translate-y-[-0.7rem] duration-700">
        <img
          src="/images/2/bill-gates.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="text-xs absolute bottom-0 right-0 bg-[black] bg-opacity-[0.6] px-1 lg:px-3 lg:py-1 w-full text-center">
          {finalName}: 0
        </div>
      </div>
    </li>
  );
};

export default SingleUserListInMultiplayerScoreboard;
