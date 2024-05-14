import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSS, Home } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CSS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
