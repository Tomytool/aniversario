export const BodyActividad = ({ data }) => {
  console.log(data);
  return (
    <section className="bg-[#3F8A8A] w-screen h-full rounded-t-3xl flex flex-col items-center gap-y-2 py-9 px-2.5">
      {data.map((row, index) => {
        return (
          <div
            key={index}
            className="bg-[#336E6E] w-80 h-auto rounded-2xl px-2.5 py-2 flex flex-col items-start gap-y-2 text-[#C3E1E1]"
          >
            <h4 className="font-bold text-[16px]">{row.actividad}</h4>
            <p className="text-[14px]">{row.Descripcion}</p>
          </div>
        );
      })}
    </section>
  );
};
