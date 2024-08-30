import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gamepage from "../pages/gamepage/Gamepage";
import MultiplayerPage from "../pages/multiplayer-page/MultiplayerPage";
import SetupMultiplayerPage from "../pages/setup-multiplayer-page/SetupMultiplayerPage";

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
            <Route path="/multiplayer-game" element={<MultiplayerPage />} />
            <Route
              path="/setup-multiplayer"
              element={<SetupMultiplayerPage />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default RouterAR7;
