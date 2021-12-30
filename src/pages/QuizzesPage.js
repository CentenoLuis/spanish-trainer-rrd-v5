import React from "react";
import { routes } from "../helpers/routes";
import useAuth from "../auth/useAuth";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  Alert,
  Form,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

const QuizzesPage = () => {
  const { user } = useAuth();
  const quizzes = user.quizzes;
  return (
    <>
      <Container>
        <h1 className="text-center my-4">My Quizzes</h1>
        <Row className="mt-4">
          {user.quizzes.map((quizz) => {
            return (
              <Col
                xs={{ span: 12 }}
                md={{ span: 3 }}
                className="text-center mb-4"
                key={quizz.title}
              >
                <Card>
                  <Card.Title>{quizz.title}</Card.Title>
                  <Card.Body>{quizz.content}</Card.Body>
                  <Card.Footer>{quizz.date}</Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default QuizzesPage;
