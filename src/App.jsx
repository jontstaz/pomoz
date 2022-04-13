import "./css/style.css";
import "./css/themes.css";
import "./css/animations.css";

// components
import Navbar from "./components/navbar";
import Timer from "./components/timer";
// import Settings from "./components/settings";
// import TodoPage from "./components/todoPage.jsx";

import { switchTheme } from "./utils";

import { render } from "solid-js/web";
// import { createSignal } from "solid-js";

function App() {
  return (
    <>
      <Navbar />
      <Timer />
    </>
  );
}

// set theme
(localStorage.theme == "undefined" || !localStorage.theme)
  ? switchTheme("light")
  : switchTheme(localStorage.theme);

render(() => <App />, document.getElementById("app"));
