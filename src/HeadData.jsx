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
      <h3>Alianza 1</h3>
      <h4>{alianzaUno} </h4>
      <h3>Alianza 2</h3>
      <h4>{alianzaDos} </h4>
    </>
  );
};
