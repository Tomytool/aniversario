export const Puntajes = ({ data }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-2">
        Puntajes por actividad
      </h2>
      <section>
        {data.map((fila, index) => {
          return (
            <div key={index} className="mb-4">
              <div className="flex w-80 bg-[#3F8A8A] rounded-2xl flex-col items-startmb-2 overflow-hidden">
                {/* descripcion de la actividad  */}
                <div className="text-[14px] font-bold bg-focus w-full px-4 py-2  flex items-center gap-x-2">
                  <p>{fila.actividad}</p>
                </div>
                {/* seccion de los puntajes por alianza  */}
                <div className="flex flex-col items-center justify-between w-full p-4">
                  {/* puntaje de cada alianza  */}
                  <div className="flex items-center justify-between w-full p-1">
                    <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                    <p className="text-[20px]">{fila.alianza1}</p>
                  </div>
                  <div className="flex items-center justify-between w-full p-1">
                    <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                    <p className="text-[20px]">{fila.alianza2}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
