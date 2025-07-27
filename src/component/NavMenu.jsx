import { Link } from "react-router";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillTrophyFill,
  BsPostcardFill,
  BsJustify,
  BsXLg,
} from "react-icons/bs";
import { useState } from "react";

export const NavMenu = () => {
  const [mostrar, setMostrar] = useState(false);
  console.log(mostrar);
  return (
    <nav
      className={`w-screen h-auto flex flex-col justify-around items-start gap-y-3 px-2 py-4 bg-menu fixed top-0 left-0`}
    >
      <div>
        {mostrar ? (
          <BsXLg
            className="text-3xl text-cabecera cursor-pointer"
            onClick={() => {
              setMostrar(!mostrar);
            }}
          />
        ) : (
          <BsJustify
            className="text-3xl text-cabecera cursor-pointer"
            onClick={() => {
              setMostrar(!mostrar);
            }}
          />
        )}
      </div>
      <div className={!mostrar ? "hidden" : "flex flex-col gap-y-3"}>
        <Link
          to="/"
          className="flex items-center gap-x-3"
          onClick={() => setMostrar(false)}
        >
          <BsFillHouseFill className={`text-3xl text-cabecera`} />
          <p className="font-bold text-cabecera text-[16px]">Inicio</p>
        </Link>
        <Link
          to="/puntaje"
          className="flex items-center gap-x-3"
          onClick={() => setMostrar(false)}
        >
          <BsFillTrophyFill className={`text-3xl text-cabecera`} />
          <p className="font-bold text-cabecera text-[16px]">Puntaje</p>
        </Link>
        <Link
          to="/actividades"
          className="flex items-center gap-x-3"
          onClick={() => setMostrar(false)}
        >
          <BsPostcardFill className={`text-3xl text-cabecera`} />
          <p className="font-bold text-cabecera text-[16px]">Actividades</p>
        </Link>
        <Link
          to="/lideres"
          className="flex items-center gap-x-3"
          onClick={() => setMostrar(false)}
        >
          <BsFillPersonFill className={`text-3xl text-cabecera`} />
          <p className="font-bold text-cabecera text-[16px]">Alinaza</p>
        </Link>
      </div>
    </nav>
  );
};
