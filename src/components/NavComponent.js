import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import navlogo from "../assets/nav-brand.png";
import { Fade } from "react-awesome-reveal";

export const NavPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Fade in>
        <Navbar expand="lg" className="nav-g fixed-top " dark fixed="top">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={450}
            style={{ textDecoration: "none" }}
          >
            <NavbarBrand className="mx-5 nav-img animate__animated animate__fadeIn  animate__slower">
              <img alt="logo" src={navlogo} />
            </NavbarBrand>
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto mx-5 nav-c" navbar>
              <NavItem>
                <NavLink className="ibm-font nav-text animate__animated animate__fadeInDown  n-1">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className="ibm-font nav-code"
                      style={{ textDecoration: "none" }}
                    >
                      01.
                    </span>{" "}
                    About
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="ibm-font nav-text animate__animated animate__fadeInDown n-2">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={450}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="ibm-font nav-code">02.</span> Skills{" "}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ibm-font nav-text animate__animated animate__fadeInDown n-3">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={450}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="ibm-font nav-code">03.</span> Projects
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ibm-font nav-text animate__animated  animate__fadeInDown n-4">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={1500}
                    duration={450}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="ibm-font nav-code">04.</span> Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <a href="resume/Resume.pdf" target="_blank">
                  <Button className="nav-btn ibm-font n-5 animate__animated  animate__fadeIn n-5">
                    Resume
                  </Button>
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fade>
    </div>
  );
};
