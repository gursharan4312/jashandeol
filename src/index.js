import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Store from "./CategoryContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
  document.getElementById("root")
);
