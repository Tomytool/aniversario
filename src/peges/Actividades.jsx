import { Actividad } from "../component/Actividad";

export const Actividades = ({ data }) => {
  return (
    <>
      {" "}
      <h2 className="text-2xl font-bold text-center mb-2">
        Actividades de Aniversario
      </h2>
      <section>
        {data.map((fila, index) => {
          return <Actividad key={index} fila={fila} />;
        })}
      </section>
    </>
  );
};
