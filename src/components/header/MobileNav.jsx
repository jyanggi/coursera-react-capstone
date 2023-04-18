import logo from "./Logo.svg";
import "./MobileNav.scss";
import React, { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { handleClick, SECTIONS } from "../../util/Utils";
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

      <nav ref={navRef} className={isHidden ? "hidden" : "show"}>
        <img src={logo} alt="header logo" />
        <ul>
          {SECTIONS.map((p) => (
            <li key={p.id}>
              <a
                href={p.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(p.id);
                }}
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MobileNav;
