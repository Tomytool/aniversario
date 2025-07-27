import { Lider } from "../component/Lider";
import lider1 from "../assets/lider 1.png";
import lider2 from "../assets/lider 2.png";

export const Lideres = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-2">
        Encargados de Alianza
      </h2>
      <div className="flex flex-col gap-y-5 md:flex md:flex-row md:justify-around md:flex-wrap md:py-5 md:w-full ">
        <Lider img={lider1} nombre="Lider Alianza 1" />
        <Lider img={lider2} nombre="Lider Alianza 2" />
      </div>
    </>
  );
};
