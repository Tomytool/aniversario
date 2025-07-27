import logo from "../assets/logoCarlomagno.png";

export const LogoColegio = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 mt-16">
      <img src={logo} alt="Logo colegio CarloMagno" />
      <h2 className="text-2xl font-bold">Aniversario 2025</h2>
    </div>
  );
};
