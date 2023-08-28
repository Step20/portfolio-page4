import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <div className="footer-out">
      <div className="footer-group mx-auto">
        <Container id="contact" className="footer-content mx-auto">
          <Fade up>
            <div className="footer-body mx-auto text-center  animate__animated animate__fadeIn animate__delay-1s">
              <Row className="icon-row my-5">
                <ul className="icons">
                  <a href="mailto:armand.robinson20@gmail.com" target="_blank">
                    {" "}
                    <li className="icons">
                      <AiOutlineMail />
                    </li>
                  </a>
                  <a href="https://github.com/Step20" target="_blank">
                    <li>
                      <AiOutlineGithub />
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/armandrobinsonjr/"
                    target="_blank"
                  >
                    <li>
                      <AiOutlineLinkedin />
                    </li>
                  </a>
                </ul>
                <p>Design & Built by Armand Robinson</p>
              </Row>
            </div>{" "}
          </Fade>
        </Container>
      </div>
    </div>
  );
};
