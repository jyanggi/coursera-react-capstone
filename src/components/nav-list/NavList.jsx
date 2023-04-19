import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./NavList.scss";

const NavList = (props) => {
  const { callBack } = props;
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const handleClick = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (callBack) {
      callBack();
    }
  };
  useEffect(() => {
    const { pathname } = location;
    setIsHome(pathname === "/");
  }, [location]);
  return (
    <ul>
      {props?.header && <h2>{props.header}</h2>}
      <li>
        <NavLink to="/" onClick={() => callBack && callBack()}>
          HOME
        </NavLink>
      </li>
      {isHome ? (
        <li>
          <a
            href="#about-section"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#about-section");
            }}
          >
            ABOUT
          </a>
        </li>
      ) : (
        <li>
          <NavLink to="/#about-section" onClick={() => callBack && callBack()}>
            ABOUT
          </NavLink>
        </li>
      )}
      {isHome ? (
        <li>
          <a
            href="#menu-section"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#menu-section");
            }}
          >
            MENU
          </a>
        </li>
      ) : (
        <li>
          <NavLink to="/#menu-section" onClick={() => callBack && callBack()}>
            MENU
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/reservation" onClick={() => callBack && callBack()}>
          RESERVATIONS
        </NavLink>
      </li>
      {isHome ? (
        <li>
          <a
            href="#menu-section"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#online-menu");
            }}
          >
            ORDER ONLINE
          </a>
        </li>
      ) : (
        <li>
          <NavLink to="/#online-menu" onClick={() => callBack && callBack()}>
            ORDER ONLINE
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/" onClick={() => callBack && callBack()}>
          LOGIN
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
