import "./css/style.css";
import "./css/themes.css";
import "./css/animations.css";

import { Route, Routes } from "solid-app-router";
import { lazy } from "solid-js";

// components
import Navbar from "./components/navbar";

const Timer = lazy(() => import("./components/timer"));
const Settings = lazy(() => import("./components/settings"));

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
