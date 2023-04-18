import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Marvel } from "../heroes/pages/Marvel";
import { Dc } from "../heroes/pages/Dc";
import { Login } from "../auth/pages/Login";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<Dc />} />

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};
