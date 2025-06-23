export const BodyPuntaje = ({ data }) => {
  return (
    <section className="bg-[#3F8A8A] w-screen h-full rounded-t-3xl flex flex-col items-center gap-y-2 py-9 px-2.5">
      {data.map((row, index) => {
        return (
          <div
            key={index}
            className="bg-[#336E6E] w-80 h-auto rounded-2xl px-2.5 py-2 flex flex-col items-start gap-y-2 text-[#C3E1E1] font-bold"
          >
            <h3>{row.actividad}</h3>
            <div className="flex justify-between gap-x-2 items-center w-full">
              <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
              <p>{row.alianza1}</p>
            </div>
            <div className="flex justify-between gap-x-2 items-center w-full">
              <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
              <p>{row.alianza2}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
