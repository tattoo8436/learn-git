import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/home"));
const CSS = lazy(() => import("../pages/css"));
const Git = lazy(() => import("../pages/git"));
const React = lazy(() => import("../pages/react"));
const Login = lazy(() => import("../pages/login"));
const Zustand = lazy(() => import("../pages/zustand"));

const Outlet1 = () => {
  return <div>Outlet 1</div>;
};

const AppRouter = () => {
  const auth = true;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            {auth ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/css" element={<CSS />} />
                <Route path="/git" element={<Git />} />
                <Route path="/react" element={<React />}>
                  <Route path="outlet1" element={<Outlet1 />}></Route>
                </Route>
                <Route path="/zustand" element={<Zustand />} />
              </>
            ) : (
              <Route path="/*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
