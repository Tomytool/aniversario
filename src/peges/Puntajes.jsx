export const Puntajes = ({ data }) => {
  return (
    <>
      <section>
        {data.map((fila, index) => {
          return (
            <div className="flex w-80 bg-[#3F8A8A] rounded-2xl flex-col items-start px-3.5 py-3.5  mb-2">
              <h2 className="text-[18px] font-bold">{fila.actividad}</h2>
              <div className="flex items-center justify-between w-full p-2.5">
                <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                <p>{fila.alianza1}</p>
              </div>
              <div className="flex items-center justify-between w-full p-2.5">
                <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                <p>{fila.alianza2}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
