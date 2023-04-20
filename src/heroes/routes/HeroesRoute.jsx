import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, Marvel, Search } from "../pages";

export const HeroesRoute = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
