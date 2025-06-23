import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GoogleSheetDataViewer from "./GoogleSheetDataViewer";
import logoCarlomagno from "./assets/logoCarlomagno.png";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#0B5353] h-auto flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold text-[#FED532]">Aniversario 2025</h1>
      <img src={logoCarlomagno} alt="Logo del colegio" />
      <BrowserRouter>
        <GoogleSheetDataViewer />
      </BrowserRouter>
    </div>
  </StrictMode>
);
