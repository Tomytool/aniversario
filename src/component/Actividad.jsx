import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const Actividad = ({ fila, index }) => {
  const [expandir, setExpandir] = useState(false);
  return (
    <>
      {/* contenedor de las actividades  */}
      <div className=" bg-contenedor rounded-2xl overflow-hidden mt-2">
        {/* seccion de cabecera de las actividades nombre de las actividades  */}
        <div className="text-[14px] font-bold bg-focus w-full px-4 py-2  flex items-center gap-x-2">
          <div className=" bg-hover rounded-full p-1 w-auto h-auto">
            {expandir ? (
              <BsChevronUp
                className="text-texto text-[14px]"
                onClick={() => setExpandir(!expandir)}
              />
            ) : (
              <BsChevronDown
                className="text-texto text-[14px]"
                onClick={() => setExpandir(!expandir)}
              />
            )}
          </div>

          <p>{fila.actividad}</p>
        </div>

        <div
          key={index}
          className={
            "flex w-80 rounded-2xl flex-col items-start px-3.5 py-3.5 gap-y-2.5 mb-2"
          }
        >
          <p className={expandir ? null : "text-base hidden"}>
            {fila.Descripcion}
          </p>
        </div>
      </div>
    </>
  );
};
