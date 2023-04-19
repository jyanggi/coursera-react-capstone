import logo from "./Logo.svg";
import "./MobileNav.scss";
import React, { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import NavList from "../nav-list/NavList";
import { NavLink } from "react-router-dom";
function MobileNav() {
  const [isHidden, setIsHidden] = useState(true);
  const navRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);
  return (
    <header id="mobile-nav">
      <NavLink to="/">
        <img className="logo" src={logo} alt="header logo" />
      </NavLink>
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

      <nav ref={navRef} className={isHidden ? "hidden" : "show"}>
        <NavLink to="/" onClick={() => setIsHidden(true)}>
          <img src={logo} alt="header logo" />
        </NavLink>
        <NavList
          callBack={() => {
            setIsHidden(true);
          }}
        />
      </nav>
    </header>
  );
}

export default MobileNav;
