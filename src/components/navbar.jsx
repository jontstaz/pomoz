import { switchTheme } from "../utils";

import { createSignal } from "solid-js";

import { RiSystemSettingsLine, RiWeatherMoonClearLine } from "solid-icons/ri";
import { BiNotepad } from "solid-icons/bi";
import { SiTarget } from "solid-icons/si";
import { AiOutlineUser } from "solid-icons/ai";

import "../css/navbar.css";

function BrandInfo() {
  return (
    <div class="brand">
      <SiTarget size={25} class="brandLogo" />
      <div class="brandTitle">Pomochad</div>
    </div>
  );
}

function NavbarLinks() {
  let default_Theme = document.querySelector("body").dataset.theme;
  const [theme, setTheme] = createSignal(default_Theme);

  function addTheme() {
    switch (theme()) {
      case "light":
        setTheme("dark");
        switchTheme("dark");
        break;

      default:
        setTheme("light");
        switchTheme("light");
    }
  }

  return (
    <div class="navBtns">
      <RiWeatherMoonClearLine
        size={26}
        class="themeToggle"
        onclick={() => addTheme()}
      />

      <div class="navbarLinks">
        <div class="todosBtn">
          <BiNotepad size={23} class="todosIcon" />
          Todos
        </div>

        <AiOutlineUser
          size={23}
          class="userIcon"
          onclick={() => alert("WIP! data is stored in localstorage for now")}
        />

        <RiSystemSettingsLine size={25} class="settingsBtn" />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav class="navbar">
      <BrandInfo />
      <NavbarLinks />
    </nav>
  );
}

export default Navbar;
