import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaNodeJs } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-vanilla-tilt";

export const Skills = () => {
  const data = [
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      text: "Node. js is an open source, cross-platform runtime environment for executing JavaScript code.",
    },
    {
      icon: <DiReact />,
      title: "React",
      text: "React is a library for building composable user interfaces, creation of reusable UI components.",
    },
    {
      icon: <DiSass />,
      title: "Sass",
      text: "An extension of CSS that enables you to use things like variables, nested rules, and more.",
    },
    {
      icon: <IoLogoJavascript />,
      title: "Javascript",
      text: "JavaScript is a just-in-time compiled programming language with first-class functions.",
    },
    {
      icon: <DiMongodb />,
      title: "MongoDB",
      text: "MongoDB is a non-relational document database that provides support for JSON-like storage.",
    },
    {
      icon: <SiFigma />,
      title: "Figma",
      text: " Figma is a cloud-based design tool that's similar to Sketch in functionality and features.",
    },
  ];

  return (
    <div className="skills-out">
      <div className="skills-group mx-auto">
        <Container id="skills" className="skills-content mx-auto">
          <div className="skills-body">
            <Fade up>
              <Row className="skills-title animate__animated animate__fadeInUp animate__delay-1s">
                <Col md="7">
                  <h1>
                    <span className="ibm-font ">02.</span> My Skills{" "}
                  </h1>
                </Col>
                <Col className="ms-auto" md="6">
                  <div className="title-dash ">&nbsp;</div>
                </Col>
              </Row>{" "}
            </Fade>{" "}
            <Row className="skills-cards my-4 animate__animated animate__fadeInUp animate__delay-1s">
              {data.map((skill, i) => (
                <Col className="my-3" xs="12" sm="6" md="4" key={i}>
                  <Fade up>
                    <Tilt
                      className="card"
                      style={{
                        ":hover": {
                          cursor: "pointer",
                          backgroundColor: "#ffff9b",
                          color: "#fd0808",
                        },
                      }}
                      options={{ max: 5 }}
                    >
                      <div className="card-content mx-auto my-auto">
                        <div className="card-icon">{skill.icon} </div>
                        <h4>{skill.title}</h4>
                        <p>{skill.text}</p>
                      </div>
                    </Tilt>
                  </Fade>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
