import { Link } from "react-router";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsClipboardCheckFill } from "react-icons/bs";

export const NavMenu = () => {
  return (
    <nav className="w-screen flex justify-around items-center h-16 bg-[#0B5353] fixed bottom-0 left-0">
      <Link to="/aniversario">
        <BsFillHouseDoorFill className="text-5xl" />
      </Link>
      <Link to="/aniversario/puntaje">
        <BsClipboardCheckFill className="text-5xl" />
      </Link>
    </nav>
  );
};
