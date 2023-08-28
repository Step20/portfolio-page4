import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  return (
    <div className="contact-out">
      <div className="contact-group mx-auto">
        <Container id="contact" className="contact-content mx-auto">
          <div className="contact-body mx-auto text-center">
            <Fade up>
              <Row className="contact-title  animate__animated animate__fadeInUp animate__delay-1s">
                <p className="ibm-font ">04. What's Next?</p>
                <h1>Contact Me </h1>
              </Row>
              <Row className="contact-text my-3 mx-auto  animate__animated animate__fadeInUp animate__delay-1s">
                <p>
                  Currently looking for any new opportunities. Whether you have
                  a question or just want to say hi, I’ll try my best to get
                  back to you!
                </p>
              </Row>
              <Row className="mx-auto my-5">
                <Col>
                  <a href="mailto:armand.robinson20@gmail.com" target="_blank">
                    <Button className="contact-btn mx-auto  animate__animated animate__fadeInUp animate__delay-1s">
                      Get In Touch
                    </Button>
                  </a>
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </div>
    </div>
  );
};
