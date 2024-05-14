import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSS, Git, Home } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/git" element={<Git />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
