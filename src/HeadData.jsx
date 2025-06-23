import { useEffect, useState } from "react";

export const HeadData = ({ data, alianza1, alianza2 }) => {
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
      <header className="w-screen flex items-center justify-center gap-x-5  mb-3">
        <div className="flex flex-col items-center gap-y-2.5">
          <h3 className="text-[18px] font-bold text-[#FED532]">
            {nombreAlianzas[0]}
          </h3>
          <div className="bg-neutral-400 w-24 h-24 rounded-full"></div>
          <p className="text-[16px] text-[#FED532]">{alianzaUno}</p>
        </div>
        <div className="flex flex-col items-center text-3xl font-bold text-[#FED532]">
          V/S
        </div>
        <div className="flex flex-col items-center gap-y-2.5">
          <h3 className="text-[18px] font-bold text-[#FED532]">
            {nombreAlianzas[1]}
          </h3>
          <div className="bg-neutral-400 w-24 h-24 rounded-full"></div>
          <p className="text-[16px] text-[#FED532]">{alianzaDos}</p>
        </div>
      </header>
    </>
  );
};
