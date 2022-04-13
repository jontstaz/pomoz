import "./css/style.css";
import "./css/themes.css";
import "./css/animations.css";

import { lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";

// components
import Navbar from "./components/navbar";

const Timer = lazy(() => import("./components/timer"));
const Settings = lazy(() => import("./components/settings"));
const TodoPage = lazy(() => import("./components/todoPage"));

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
