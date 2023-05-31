import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Heading from "./components/Heading";
import CarProvider from "./storage/CarProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarProvider>
      <BrowserRouter>
        <Heading />
        <App />
      </BrowserRouter>
    </CarProvider>
  </React.StrictMode>
);
