import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "./styles.css";
import reportWebVitals from "../reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
