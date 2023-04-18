import logo from "./Logo.svg";
import "./MobileNav.scss";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
const SECTIONS = [
  { title: "HOME", id: "#hero-section" },
  { title: "ABOUT", id: "#about-section" },
  { title: "MENU", id: "#menu-section" },
  { title: "ORDER ONLINE", id: "#home" },
  { title: "LOGIN", id: "#home" },
];
function MobileNav() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <header id="mobile-nav">
      <img className="logo" src={logo} alt="header logo" />
      <section className="burger-container">
        <button className="burger" onClick={() => setIsHidden((prev) => !prev)}>
          {isHidden ? (
            <FiMenu
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          ) : (
            <MdClose style={{ width: "32px", height: "32px" }} />
          )}
        </button>
      </section>

      <nav className={isHidden ? "hidden" : "show"}>
        <img src={logo} alt="header logo" />
        <ul>
          {SECTIONS.map((p) => (
            <li key={p.id}>
              <a href={p.id}>{p.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MobileNav;
