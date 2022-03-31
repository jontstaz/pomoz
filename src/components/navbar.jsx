import { useState } from "react";
import { Link } from "wouter";
import { switchTheme } from "../utils";

import { Ghost, MoonStars, Nut, Target, User } from "phosphor-react";

import "../css/navbar.css";

function BrandInfo() {
  return (
    <div className="brand">
      <Target className="brandLogo" size={30} weight="fill" />
      <Link href="/">
        <div className="brandTitle">Pomochad</div>
      </Link>
    </div>
  );
}

function NavbarLinks() {
  let default_Theme = document.querySelector("body").dataset.theme;
  let [theme, setTheme] = useState(default_Theme);

  function addTheme() {
    switch (theme) {
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
    <div className="navBtns">
      <MoonStars
        className="themeToggle"
        size={26}
        onClick={() => addTheme()}
      />

      <div className="navbarLinks">
        <Link href="/todos">
          <div className="todosBtn">
            <Ghost className="todosIcon" size={23} />
            Todos
          </div>
        </Link>

        <User
          className="userIcon"
          size={23}
          onClick={() => alert("WIP! data stored in localstorage for now")}
        />

        <Link href="/settings">
          <Nut className="settingsBtn" size={25} />
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <BrandInfo />
      <NavbarLinks />
    </nav>
  );
}

export default Navbar;
