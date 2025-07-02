export const Puntajes = ({ data }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-2">
        Puntajes por actividad
      </h2>
      <section>
        {data.map((fila, index) => {
          return (
            <div className="flex w-80 bg-[#3F8A8A] rounded-2xl flex-col items-start px-2.5 py-2   mb-2">
              <h2 className="text-[18px] font-bold">{fila.actividad}</h2>
              <div className="flex items-center justify-between w-full p-1">
                <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                <p className="text-2xl font-bold">{fila.alianza1}</p>
              </div>
              <div className="flex items-center justify-between w-full p-1">
                <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                <p className="text-2xl font-bold">{fila.alianza2}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
