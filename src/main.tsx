import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Home lastName="Pinheiro" />
  </React.StrictMode>
);
