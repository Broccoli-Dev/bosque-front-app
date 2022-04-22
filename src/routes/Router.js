import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginStep } from "../components/loginPage/LoginStep";
import MainPage from "../components/mainPage/MainPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginStep />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}
