import { Link } from "react-router";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillTrophyFill,
  BsPostcardFill,
} from "react-icons/bs";

export const NavMenu = () => {
  return (
    <nav
      className={`w-screen flex justify-around items-center px-2 py-1.5 bg-[#4CA5A5] fixed bottom-0 left-0 `}
    >
      <Link to="/aniversario" className="flex flex-col items-center">
        <BsFillHouseFill className={`text-3xl text-[#C3E1E1]`} />
        <p>Inicio</p>
      </Link>
      <Link to="/aniversario/puntaje" className="flex flex-col items-center">
        <BsFillTrophyFill className={`text-3xl text-[#C3E1E1]`} />
        Puntaje
      </Link>
      <Link
        to="/aniversario/actividades"
        className="flex flex-col items-center"
      >
        <BsPostcardFill className={`text-3xl text-[#C3E1E1]`} />
        Actividades
      </Link>
      <Link to="/aniversario/lideres" className="flex flex-col items-center">
        <BsFillPersonFill className={`text-3xl text-[#C3E1E1]`} />
        Alinaza
      </Link>
    </nav>
  );
};
