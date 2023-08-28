import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div className="about-out">
      <div className="about-group mx-auto">
        <Container id="about" className="about-content mx-auto">
          <div className="about-body">
            <Fade up>
              <Row className="about-title animate__animated animate__fadeInUp animate__delay-1s">
                <Col md="7">
                  <h1>
                    <span className="ibm-font ">01.</span> About Me{" "}
                  </h1>
                </Col>
                <Col className="ms-auto" md="6">
                  <div className="title-dash ">&nbsp;</div>
                </Col>
              </Row>
            </Fade>{" "}
            <Fade up>
              <Row className="animate__animated animate__fadeInUp animate__delay-1s">
                <Col>
                  <p className="my-4">
                    My interest in{" "}
                    <span className="p-bold"> web development </span> began when
                    I was much younger as I created simple websites for fun. The
                    creative process that when into
                    <span className="p-bold"> developing websites </span> and
                    being able to <span className="p-bold"> execute </span> upon
                    that vision intrigued me very much and I continued to
                    improve my skills
                  </p>
                  <p className="my-1">
                    Through my <span className="p-bold"> web development </span>{" "}
                    journey, I realized that my abilities can be used to create
                    more useful and pleasant{" "}
                    <span className="p-bold">experiences </span>
                    across an unlimited variety of
                    <span className="p-bold"> platforms </span>to reach users
                    needs.
                  </p>{" "}
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </div>
    </div>
  );
};
