import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/BosqueApp.scss";
import { Router } from "./routes/Router";

export default function BosqueApp() {
  ReactDOM.render(
    <div className="BosqueApp"> 
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>,
    document.getElementById("root")
  );
  
}
