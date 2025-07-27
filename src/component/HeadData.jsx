import { useEffect, useState } from "react";

export const HeadData = ({ data, thema }) => {
  const [alianzaUno, setAlianzaUno] = useState(0);
  const [alianzaDos, setAlianzaDos] = useState(0);
  const [nombreAlianzas, setNombreAlianza] = useState(["Roja", "Azul"]);

  useEffect(() => {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < data.length; i++) {
      sum1 += parseInt(data[i].alianza1);
      sum2 += parseInt(data[i].alianza2);
    }

    setAlianzaUno(sum1);
    setAlianzaDos(sum2);
  }, [data]);

  return (
    <>
      {/* contenedor de la cabecera con puntajes totales de las alianzas  */}
      <header className="w-full flex justify-around px-2 py-2">
        {/* cabecera del puntaje por alianza  */}
        <div className="w-[45%] flex flex-col items-center gap-y-2.5 bg-texto rounded-lg overflow-hidden">
          <p className="text-[18px] font-bold bg-menu w-full px-2 py-1">
            {nombreAlianzas[0]}
          </p>
          <div className="bg-neutral-400 w-24 h-24 rounded-full"></div>
          <p className="text-lg font-bold">{alianzaUno}</p>
        </div>
        {/* cabecera del puntaje por alianza  */}
        <div className="w-[45%] flex flex-col items-center gap-y-2.5 bg-texto rounded-lg overflow-hidden">
          <p className="text-[18px] font-bold bg-menu w-full px-2 py-1">
            {nombreAlianzas[1]}
          </p>
          <div className="bg-neutral-400 w-24 h-24 rounded-full"></div>
          <p className="text-lg font-bold">{alianzaDos}</p>
        </div>
      </header>
    </>
  );
};
