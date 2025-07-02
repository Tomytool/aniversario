import { useState } from "react";

export const Actividad = ({ fila, index }) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <div
        key={index}
        className={
          "flex w-80 bg-contenedor rounded-2xl flex-col items-start px-3.5 py-3.5 gap-y-2.5 mb-2"
        }
      >
        <h2 className="text-lg font-bold">{fila.actividad}</h2>
        <p className={mostrar ? null : "text-base hidden"}>
          {fila.Descripcion}
        </p>
        <button
          className={
            mostrar
              ? "px-3 py-1 rounded-xl bg-focus text-center text-texto font-bold hover:bg-hover"
              : "px-3 py-1 rounded-xl bg-fondo text-center text-texto font-bold hover:bg-hover"
          }
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? "Ocultar..." : "Leer.."}
        </button>
      </div>
    </>
  );
};
