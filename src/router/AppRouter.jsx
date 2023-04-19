import React from "react";
import { Route, Routes } from "react-router-dom";

import { HeroesRoute } from "../heroes";
import { Login } from "../auth";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRoute />} />
      </Routes>
    </div>
  );
};
