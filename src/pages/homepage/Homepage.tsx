import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[green] text-[white]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptas.
        Hic modi inventore, non deserunt explicabo totam rerum voluptatum
        pariatur libero labore quis quaerat quae, odit nihil eius vero. Quia
        dolor quibusdam quisquam, earum cupiditate dolorum iure explicabo libero
        amet? Eos quia officiis voluptatem modi dolor eveniet ipsum
        voluptatibus? Iure mollitia dolores laboriosam dolorum dolorem,
        dignissimos, culpa soluta necessitatibus consequuntur, voluptate
        inventore suscipit ex eaque incidunt veritatis autem dicta facere qui.
        Corporis soluta quo repellendus sint deleniti illo repellat quas placeat
        veniam quaerat, a aperiam. Ullam, assumenda sit earum nisi vero eum
        ducimus hic reiciendis. Tenetur numquam maxime quo ipsam.
      </div>
      <button
        onClick={() => {
          navigate("/test");
        }}
      >
        Test
      </button>
    </div>
  );
};

export default Homepage;
