export const Boton = ({ contenido, setContenido }) => {
  return (
    <button
      className="px-3 py-1 rounded-xl bg-[#023131] text-center text-[#D5F2F2]"
      onClick={() => setContenido(!contenido)}
    >
      Boton
    </button>
  );
};
