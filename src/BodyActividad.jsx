export const BodyActividad = ({ data }) => {
  console.log(data);
  return (
    <section className="bg-[#3F8A8A] w-full h-full rounded-t-3xl flex flex-col items-center gap-y-2 py-9 px-2.5">
      {data.map((row, index) => {
        return (
          <div className="bg-[#336E6E] w-80 h-auto rounded-2xl px-2.5 py-2 flex flex-col items-start gap-y-2">
            <h4>{row.actividad}</h4>
            <p>{row.Descripcion}</p>
          </div>
        );
      })}
    </section>
  );
};
