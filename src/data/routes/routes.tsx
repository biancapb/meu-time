import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";

const BrowserRoutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
    </Routes>
  );
};

export default BrowserRoutes;
