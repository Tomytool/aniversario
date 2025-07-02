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
      className={`w-screen flex justify-around items-center px-2 py-2.5 bg-menu fixed bottom-0 left-0 `}
    >
      <Link to="/aniversario" className="flex flex-col items-center">
        <BsFillHouseFill className={`text-3xl text-cabecera`} />
        <p className="font-bold text-cabecera text-[16px]">Inicio</p>
      </Link>
      <Link to="/aniversario/puntaje" className="flex flex-col items-center">
        <BsFillTrophyFill className={`text-3xl text-cabecera`} />
        <p className="font-bold text-cabecera text-[16px]">Puntaje</p>
      </Link>
      <Link
        to="/aniversario/actividades"
        className="flex flex-col items-center"
      >
        <BsPostcardFill className={`text-3xl text-cabecera`} />
        <p className="font-bold text-cabecera text-[16px]">Actividades</p>
      </Link>
      <Link to="/aniversario/lideres" className="flex flex-col items-center">
        <BsFillPersonFill className={`text-3xl text-cabecera`} />
        <p className="font-bold text-cabecera text-[16px]">Alinaza</p>
      </Link>
    </nav>
  );
};
