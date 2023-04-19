import logo from "./Logo.svg";
import "./Header.scss";
import NavList from "../nav-list/NavList";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header-nav">
      <NavLink to="/">
        <img className="logo" src={logo} alt="header logo" />
      </NavLink>

      <nav>
        <NavList />
      </nav>
    </header>
  );
}

export default Header;
