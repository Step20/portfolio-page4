import React from "react";
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
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";

export const Over2 = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="over-g2 fixed-bottom ms-auto"
        dark
        fixed="bottom"
      >
        <Nav className=" mx-5 over-c me-auto" navbar>
          <NavItem className="ibm-font over-group-r ">
            <NavLink className="ibm-font over-text ">
              <ul className="over-r  animate__animated animate__fadeIn animate__delay-3s">
                <li>
                  <a href="mailto:armand.robinson20@gmail.com" target="_blank">
                    <p>armand.robinson@gmail.com</p>
                  </a>
                </li>
                <li>
                  <div className="vert mx-auto animate__animated animate__fadeIn animate__delay-1s">
                    {" "}
                  </div>
                </li>
              </ul>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
