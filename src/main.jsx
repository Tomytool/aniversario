import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GoogleSheetDataViewer from "./GoogleSheetDataViewer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h2>Hola react</h2>
    <GoogleSheetDataViewer/>
  </StrictMode>
);
