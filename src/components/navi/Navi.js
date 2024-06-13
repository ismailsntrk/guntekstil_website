import React, { useEffect, useRef, useState } from "react";
import "./Navi.scss";
import iplik from "../../assets/iplik.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import LanguageSelect from "../languageSelect";

const Navi = () => {
  const { t } = useTranslation();
  const windowWidth = useRef(window.innerWidth);
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (windowWidth.current > 600) {
      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("logo").style.width = "60%";
          document.getElementById("logo").style.height = "90%";
          document.getElementById("navbar-main").style.background = "#5C8374";
          document.getElementById("navbar-main").style.opacity = "0.96";
          document.getElementById("navbar-main").style.height = "10vh";
        } else {
          document.getElementById("logo").style.width = "80%";
          document.getElementById("navbar-main").style.opacity = "1";
          document.getElementById("navbar-main").style.height = "15vh";
          document.getElementById("logo").style.height = "70%";
          document.getElementById("navbar-main").style.background =
            "linear-gradient(180deg, rgba(255,255,255,0.8323704481792717) 0%, rgba(255,255,255,0.3) 100%)";
          document.getElementById("navbar-main").style.opacity = "1";
        }
      }

      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);

  return (
    <div>
      {windowWidth.current >= 600 ? (
        <div id="navbar-main">
          <div id="logo">
            <img id="iplik-logo" src={iplik} alt="logo" />
          </div>
          <div></div>
          <div></div>
          <NavLink
            to="/"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            {t("Ana Sayfa")}
          </NavLink>
          <NavLink
            to="/aboutus"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            {t("Kurumsal")}
          </NavLink>
          <NavLink
            to="/production"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            {t("Üretim")}
          </NavLink>
          <NavLink
            to="/media"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            {t("Medya")}
          </NavLink>
          <NavLink
            to="/contact"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            {t("İletişim")}
          </NavLink>
          <LanguageSelect />
        </div>
      ) : (
        <Navbar id="mobile-navbar" color="faded" light>
          <img id="iplik-logo" src={iplik} alt="logo" />
          <NavbarToggler
            id="nav-tog"
            onClick={toggleNavbar}
            className="me-2"
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem style={{ marginTop: "2em" }}>
                <NavLink
                  to="/"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  {t("Ana Sayfa")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/aboutus"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  {t("Kurumsal")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/production"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  {t("Üretim")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/media"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  {t("Medya")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  {t("İletişim")}
                </NavLink>
              </NavItem>
              <LanguageSelect />
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default Navi;
