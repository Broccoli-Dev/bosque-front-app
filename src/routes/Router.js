import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginStep } from "../components/loginPage/LoginStep";

export function Router() {
  return (
      <Routes>
        <Route path="/" element={<LoginStep />} />
      </Routes>
  );
}