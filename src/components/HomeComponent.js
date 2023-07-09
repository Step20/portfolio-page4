import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { NavPage } from "./NavComponent";
import { Helmet } from "react-helmet";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export const Home = () => {
  return (
    <div className="home-out">
      <NavPage />
      <div className="home-group mx-auto">
        <Container className="home-content " id="home">
          <Fade up>
            <Row>
              <Col>
                <p className="ibm-font">Hello, my name is</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Armand Robinson</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Web Developer & UI Designer</h2>
              </Col>
            </Row>
            <Row>
              <Col>
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
                  <Button className="home-btn">About Me</Button>
                </Link>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  <Button className="home-btn">Contact</Button>{" "}
                </Link>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>{" "}
      <ScrollToTop
        className="scroll"
        smooth
        color="#242424"
        width="35"
        height="35"
      />
    </div>
  );
};
