import { Link } from "react-router";
import imagenSvg from "../assets/Winners-pana.svg";
import { BsFacebook, BsInstagram, BsTwitter, BsGlobe2 } from "react-icons/bs";
export const Home = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center">Aniversario 2025</h1>

      <img src={imagenSvg} alt="" srcset="" />
      <a className="text-focus text-xs" href="https://storyset.com/people">
        People illustrations by Storyset
      </a>
      <div className="flex justify-center items-center gap-x-4 mt-4">
        <Link to="https://colegiocarlomagno.cl/">
          <BsGlobe2 className="text-2xl text-focus" />
        </Link>
        <Link to="https://www.facebook.com/colegiocarlomagnoquilpue">
          <BsFacebook className="text-2xl text-focus" />
        </Link>
        <Link to="https://www.instagram.com/colegio_carlomagno/">
          <BsInstagram className="text-2xl text-focus" />
        </Link>
      </div>
    </>
  );
};
