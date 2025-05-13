import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _ from "lodash"; // type 정보가 제공되어야 사용 가능

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
