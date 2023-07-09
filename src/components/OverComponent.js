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

export const Over = () => {
  return (
    <div>
      <Navbar expand="lg" className="over-g fixed-bottom " dark fixed="bottom">
        <Nav className=" mx-5 over-c " navbar>
          <NavItem className="">
            <NavLink className="ibm-font  over-group">
              <ul className="over-icon">
                <li class="animate__animated animate__fadeInUp animate__delay-1s">
                  <a href="mailto:armand.robinson20@gmail.com" target="_blank">
                    <AiOutlineMail />
                  </a>
                </li>
                <li class="animate__animated animate__fadeInUp animate__delay-2s">
                  <a href="https://github.com/Step20" target="_blank">
                    {" "}
                    <AiOutlineGithub />{" "}
                  </a>
                </li>
                <li class="animate__animated animate__fadeInUp animate__delay-3s">
                  <a
                    href="https://www.linkedin.com/in/armandrobinsonjr/"
                    target="_blank"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </li>
                <li class="animate__animated animate__fadeIn animate__delay-1s">
                  <div className="vert mx-auto"> </div>
                </li>
              </ul>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
