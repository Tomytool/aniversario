import { useState } from "react";

import { ContenidoDescripcion } from "./ContenidoDescripcion";

export const BodyActividad = ({ data }) => {
  return (
    <section className="bg-[#3F8A8A] w-screen h-full rounded-t-3xl flex flex-col items-center gap-y-2 py-9 px-2.5">
      {data.map((row, index) => {
        return <ContenidoDescripcion row={row} key={index} mostrar={false} />;
      })}
    </section>
  );
};
