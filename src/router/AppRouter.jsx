import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Marvel, Dc } from "../heroes";
import { Login } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<Dc />} />

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};
