import { Link } from "react-router-dom";
type propsType = {
  name: string;
  link: string;
};
const DropDownListType1 = (props: propsType) => {
  const { name } = props;

  return (
    <li>
      <Link
        to={"/"}
        className="py-3 px-4 block text-[white] hover:bg-[#505050] hover:text-[white]"
      >
        {name}
      </Link>
    </li>
  );
};

export default DropDownListType1;
