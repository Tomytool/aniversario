import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../peges/Home";
import { NavMenu } from "./NavMenu";
import { Puntajes } from "../peges/Puntajes";
import { Lideres } from "../peges/Lideres";
import { Actividades } from "../peges/Actividades";
import { HeadData } from "./HeadData";
import { LogoColegio } from "./LogoColegio";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza con la URL que obtuviste al publicar tu Google Sheet
  const GOOGLE_SHEET_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9bJNVKQr3koK3EJ6VuVIlnIDVAtisaqXf5r9eS8F_o66Q_CGveMEy00SdZWyKhhCrK2QFNnAtwYgq/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        // console.log("CSV Raw Text:", csvText); // Para depuración

        // Parsear el CSV (ejemplo simple, para CSV complejos considera una librería como 'papaparse')
        const rows = csvText.trim().split("\n");
        const headers = rows[0].split(","); // Asume que la primera fila son los encabezados
        const parsedData = rows.slice(1).map((row) => {
          const values = row.split(",");
          let rowObject = {};
          headers.forEach((header, index) => {
            rowObject[header.trim()] = values[index]
              ? values[index].trim()
              : "";
          });
          return rowObject;
        });

        setData(parsedData);
      } catch (e) {
        setError(e);
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  // Asumiendo que todos los objetos en data tienen las mismas claves (encabezados)
  const headers = Object.keys(data[0]);
  console.log(data.length);

  return (
    <BrowserRouter>
      <div className="w-screen h-auto flex flex-col items-center gap-y-5">
        <NavMenu />
        <LogoColegio />
        <HeadData data={data} />
        {/* rutas de la aplicacion  */}
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/puntaje" element={<Puntajes data={data} />} />
          <Route path="/lideres" element={<Lideres data={data} />} />
          <Route path="/actividades" element={<Actividades data={data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
