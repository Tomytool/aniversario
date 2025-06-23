import { useState } from "react";
import { Boton } from "./Boton";

export const ContenidoDescripcion = ({ row, mostrar }) => {
  const [contenido, setContenido] = useState(mostrar);

  return (
    <>
      <div className="bg-[#336E6E] w-80 h-auto rounded-2xl px-2.5 py-2 flex flex-col items-start gap-y-2 text-[#C3E1E1]">
        <h4 className="font-bold text-[16px]">{row.actividad}</h4>
        {contenido ? (
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
            <p>{row.Profesor}</p>
          </div>
        ) : null}

        {contenido ? <p className="text-[14px] ">{row.Descripcion}</p> : null}

        <Boton contenido={contenido} setContenido={setContenido} />
      </div>
    </>
  );
};
