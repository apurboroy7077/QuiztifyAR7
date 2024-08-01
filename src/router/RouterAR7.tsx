import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default RouterAR7;
