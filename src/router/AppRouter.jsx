import React from "react";
import { Route, Routes } from "react-router-dom";

import { HeroesRoute } from "../heroes";
import { Login } from "../auth";
import { PriveteRoute } from "./PriveteRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PriveteRoute>
              <HeroesRoute />
            </PriveteRoute>
          }
        />
      </Routes>
    </div>
  );
};
