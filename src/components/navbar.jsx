import { switchTheme } from "../utils";
import { createSignal } from "solid-js";

import { Link } from "solid-app-router";

import { RiSystemSettingsLine, RiWeatherMoonClearLine } from "solid-icons/ri";
import { BiNotepad } from "solid-icons/bi";
import { SiTarget } from "solid-icons/si";
import { AiOutlineUser } from "solid-icons/ai";

import "../css/navbar.css";

function BrandInfo() {
  return (
    <Link href="/">
      <div class="brand">
        <SiTarget size={24} class="brandLogo" />
        <div class="brandTitle">Pomochad</div>
      </div>
    </Link>
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
        size={21}
        class="themeToggle"
        onclick={() => addTheme()}
      />

      <div class="navbarLinks">
        <Link href="/todos">
          <div class="todosBtn">
            <BiNotepad size={21} class="todosIcon" />
            Todos
          </div>
        </Link>

        <AiOutlineUser
          size={21}
          class="userIcon"
          onclick={() => alert("WIP! data is stored in localstorage for now")}
        />

        <Link href="/settings">
          <RiSystemSettingsLine size={21} class="settingsBtn" />
        </Link>
      </div>
    </div>
  );
}

// Navbar

export default () => {
  return (
    <nav class="navbar">
      <BrandInfo />
      <NavbarLinks />
    </nav>
  );
};
