import "./mobile-nav.component.scss";

import { Link, NavLink } from "react-router-dom";
import { PAGE_ROUTES, ROUTE_PATH } from "@ipp/pages/page-route/page-route";
import React, { useCallback, useContext, useEffect, useState } from "react";

import { SET_MOBILE_NAV_OPTS } from "@ipp/context/actionTypes";

const HIDDEN_CLASS = "is-hidden";
const VISIBLE_CLASS = "is-visible";
const IS_OPEN_CLASS = "is-open";
const OVERFLOW_HIDDEN_CLASS = "overflow-hidden";

const autoHideOn = 992; // autohide on 992px and up

const MobileNav = (props) => {
  const options = props?.acfOptionsGeneral?.options;
  const { dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showMenu = useCallback(() => {
    document.body.classList.add(OVERFLOW_HIDDEN_CLASS);
    setIsOpen(true);
    setIsOverlayVisible(true);
    setIsDrawerVisible(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsDrawerVisible(false);
    setIsOverlayVisible(false);
    dispatch({
      type: SET_MOBILE_NAV_OPTS,
      payload: {
        show: false,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    const init = () => {
      props.show && showMenu();
      bindEvents();
    };

    const handleWinResize = () => {
      if (window.outerWidth >= autoHideOn) closeMenu();
    };

    const bindEvents = () => {
      window.addEventListener("resize", handleWinResize);
    };

    const unbindEvents = () => {
      window.removeEventListener("resize", handleWinResize);
    };

    init();

    return () => {
      unbindEvents();
    };
  }, [props.show, showMenu, closeMenu]);

  const handleDrawerTransEnd = () => {
    if (!isDrawerVisible) {
      setIsOpen(false);
      document.body.classList.remove(OVERFLOW_HIDDEN_CLASS);
    }
  };

  return (
    <div className={`mobile-nav ${isOpen ? IS_OPEN_CLASS : HIDDEN_CLASS}`}>
      <div
        className={`mobile-nav__overlay ${
          isOverlayVisible ? VISIBLE_CLASS : ""
        }`}
        onClick={closeMenu}
      ></div>
      <div
        onTransitionEnd={handleDrawerTransEnd}
        className={`mobile-nav__drawer ${isDrawerVisible ? VISIBLE_CLASS : ""}`}
      >
        <div className="mobile-nav-logo">
          <Link to={ROUTE_PATH.HOME} onClick={closeMenu}>
            <img
              className="mobile-nav-logo-img"
              src="img/logo-alt.png"
              alt=""
            />
          </Link>

          {options && (
            <div className="mobile-nav-contact">
              <a href={`tel:${options.contactNumber}`}>
                <i className="fa fa-phone"></i>
              </a>
              <a href={`mailto:${options.emailAddress}`}>
                <i className="fa fa-envelope"></i>
              </a>
              <a
                href={` http://maps.google.com/?q=${options.address}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-map-marker"></i>
              </a>
            </div>
          )}
        </div>
        <hr />
        <div className="mobile-nav-body">
          <ul>
            {PAGE_ROUTES.routes
              .filter((p) => p.isVisible)
              .map((p) => (
                <li key={p.label}>
                  <NavLink to={p.path} onClick={closeMenu}>
                    {p.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
        <div className="mobile-nav-footer">
          <hr />
          <div className="mobile-nav-footer-content">
            {options &&
              options.socialMediaList.map((item) => (
                <a
                  className="social"
                  key={item.socialMedia}
                  target="_blank"
                  href={item.url}
                  rel="noreferrer"
                >
                  <i className={item.iconClass}></i>
                </a>
              ))}
            <div className="mobile-nav-footer-content-bottom">
              <div> &copy; incrementtum 2022</div>
              <div>
                {" "}
                <Link to={ROUTE_PATH.PRIVACY_POLICY} onClick={closeMenu}>
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link to={ROUTE_PATH.TERMS_AND_CONDITIONS} onClick={closeMenu}>
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileNav.defaultProps = {
  show: false,
};

export default MobileNav;
