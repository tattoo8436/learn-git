import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSS, Git, Home } from "../pages";
import React from "../pages/react";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/git" element={<Git />} />
        <Route path="/react" element={<React />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
