import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gamepage from "../pages/gamepage/Gamepage";

const Homepage = lazy(() => import("../pages/homepage/Homepage"));
const Testpage = lazy(() => import("../pages/testpage/Testpage"));
const RouterAR7 = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/test" element={<Testpage />} />
            <Route path="/game" element={<Gamepage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default RouterAR7;
