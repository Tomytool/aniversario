import { BsEarbuds, BsFlagFill } from "react-icons/bs";
import lider1 from "../assets/lider 1.png";

export const Lider = ({ img, nombre }) => {
  return (
    <section className="flex w-80 bg-[#3F8A8A] rounded-2xl flex-col items-center px-3.5 py-3.5 gap-y-2.5 ">
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-3">
          {/* <div className="rounded-full w-16 h-16 bg-gray-500"></div> */}
          <img src={img} alt="" className="rounded-full w-16 h-16" />
          <h3>{nombre}</h3>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-3">
            <div className="flex justify-center items-center bg-[#0B5353] rounded-2xl w-12 h-12">
              <BsFlagFill className="text-[#C3E1E1]" />
            </div>

            <h3>Descicion de la alianza</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            maxime, cumque libero obcaecati accusantium porro dignissimos
            reiciendis, dolorem ad ipsam dolores, at velit eligendi quos
            corrupti veniam dicta reprehenderit hic.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-3">
            <div className="flex justify-center items-center bg-[#0B5353] rounded-2xl w-12 h-12">
              <BsEarbuds className="text-[#C3E1E1]" />
            </div>
            <h3>Grito Alianza 1</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi autem
            consectetur quaerat recusandae in totam. Adipisci atque provident
            deleniti pariatur illo dicta tenetur error, eum ullam delectus quam,
            facere sapiente.
          </p>
        </div>
      </div>
    </section>
  );
};
