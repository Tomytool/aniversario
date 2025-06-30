import { useState } from "react";

export const Actividad = ({ fila, index }) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <div
        key={index}
        className={
          "flex w-80 bg-[#3F8A8A] rounded-2xl flex-col items-start px-3.5 py-3.5 gap-y-2.5 mb-2"
        }
      >
        <h2 className="text-[18px] font-bold">{fila.actividad}</h2>
        <p className={mostrar ? null : "text-[16px] hidden"}>
          {fila.Descripcion}
        </p>
        <button
          className="px-3 py-1 rounded-xl bg-[#023131] text-center text-[#D5F2F2]"
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? "Ocultar..." : "Leer.."}
        </button>
      </div>
    </>
  );
};
