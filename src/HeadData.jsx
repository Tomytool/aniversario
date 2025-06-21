import { useEffect, useState } from "react";

export const HeadData = ({ data }) => {
  const [alianzaUno, setAlianzaUno] = useState(0);
  const [alianzaDos, setAlianzaDos] = useState(0);

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
      <header className="flex justify-between items-center gap-x-7 px-2.5 py-4">
        <div className="flex flex-col items-center gap-y-2.5">
          <h3 className="text-[18px] font-bold text-[#FED532]">Alianza 1</h3>
          <div className="bg-neutral-400 w-24 h-24 rounded-full"></div>
          <p className="text-[16px] text-[#FED532]">{alianzaUno}</p>
        </div>
        <div className="flex flex-col items-center text-3xl font-bold text-[#FED532]">
          V/S
        </div>
        <div className="flex flex-col items-center gap-y-2.5">
          <h3 className="text-[18px] font-bold text-[#FED532]">Alianza 2</h3>
          <div className="bg-neutral-400 w-24 h-24 rounded-full"></div>
          <p className="text-[16px] text-[#FED532]">{alianzaDos}</p>
        </div>
      </header>
    </>
  );
};
