import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { routes } from "../helpers/routes";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h1>Welocome to Spanish Trainer</h1>
          <p>
            This app is design to help teachers and student when teaching and
            learning Spanish. You will have all of your material ready to open
            and beatufly presented. Start now and surf our Quizz Library to test
            your skils.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            sapiente porro accusamus quibusdam labore. Dolorem reiciendis
            quaerat numquam asperiores repellendus voluptates quos suscipit, non
            aliquam at error minima. Aperiam, doloribus!. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Vel alias cumque pariatur quia
            debitis ab fugiat consectetur quos eaque, excepturi sapiente
            reiciendis nesciunt eos vitae deserunt ipsa? Accusantium, numquam
            quisquam.
          </p>
          <div>
            <Link to={routes.login}>Login</Link> to your account or
            <Button className="m-2" as={Link} to={routes.register}>
              Register
            </Button>
          </div>
        </Col>

        <Col>
          <img
            className="img-fluid"
            src="/img/task-manager.svg"
            alt="spanish trainer"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non facere
            corrupti praesentium et quod. Sequi tempora voluptas, consequuntur
            deserunt, delectus asperiores quas incidunt ducimus vitae non
            nostrum cum! Fuga, exercitationem.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
