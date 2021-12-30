import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { routes } from "../helpers/routes";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5 ">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-6">
          <h1>Welocome to Spanish Trainer</h1>
          <p>
            This app is design to help teachers and student when teaching and
            learning Spanish. You will have all of your material ready to open
            and beatufly presented. Start now and surf our Quizz Library to test
            your skils.
          </p>
          <p>
            Learning is easy. You just have to use the tools that help to be
            consistent because prseverance is the key.
          </p>
          <p>
            Upgrade your Spanish skills <b>now!</b>
          </p>
        </Col>

        <Col>
          <img
            className="img-fluid"
            src="/img/3255469.jpg"
            alt="spanish trainer"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
