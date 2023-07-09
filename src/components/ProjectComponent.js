import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { PROJECT_DATA } from "../shared/project";
import Tilt from "react-vanilla-tilt";
import Fade from "react-reveal/Fade";

export const Projects = () => {
  return (
    <div className="projects-out">
      <div className="projects-group mx-auto">
        {" "}
        <Fade up>
          <Container id="projects" className="projects-content mx-auto">
            <div className="projects-body">
              <Row className="projects-title  animate__animated animate__fadeInUp animate__delay-1s">
                <Col md="7">
                  <h1>
                    <span className="ibm-font ">03.</span> Projects{" "}
                  </h1>
                </Col>
                <Col className="ms-auto" md="6">
                  <div className="title-dash ">&nbsp;</div>
                </Col>
              </Row>
              <Row className="projects-cards my-4  animate__animated animate__fadeInUp animate__delay-1s">
                {PROJECT_DATA.map((project, i) => (
                  <Col className="my-3" xs="12" sm="6" key={i}>
                    {" "}
                    <Fade up>
                      <Tilt
                        className="card "
                        style={{
                          ":hover": {
                            cursor: "pointer",
                            backgroundColor: "#ffff9b",
                            color: "#fd0808",
                          },
                        }}
                        options={{ max: 100 }}
                      >
                        <div className="card-content">
                          <div className="card-image">
                            <img src={project.img} />
                          </div>
                          <div className="card-text  mx-4">
                            <h3>{project.title}</h3>
                            <div className="card-tags">
                              <h4>{project.tag1}</h4>
                              <h4>{project.tag2}</h4>
                              <h4>{project.tag3}</h4>
                            </div>
                            <p href={project.gitUrl}>GitHub</p>
                            <p href={project.liveUrl}>Live Site</p>
                            <p href={project.uiUrl}>UI Design</p>
                          </div>
                        </div>
                      </Tilt>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </Fade>
      </div>
    </div>
  );
};
