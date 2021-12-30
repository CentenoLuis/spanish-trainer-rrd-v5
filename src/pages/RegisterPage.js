import React from "react";
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
import registerResolver from "../validations/registerResolver";
import { routes } from "../helpers/routes";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: registerResolver });

  const onSubmit = (formData) => {
    alert("user created");
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-4">
            <Card
              style={{ maxWidth: "360px", height: "auto" }}
              className="p-4 mx-auto"
            >
              <h1>Register</h1>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("name")}
                    placeholder="Name"
                    className="mb-2"
                  ></Form.Control>
                  {errors?.name && (
                    <Form.Text>
                      <Alert variant="danger">{errors.name.message}</Alert>
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="mb-2"
                  ></Form.Control>
                  {errors?.email && (
                    <Form.Text>
                      <Alert variant="danger">{errors.email.message}</Alert>
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="mb-2"
                  ></Form.Control>
                  {errors?.password && (
                    <Form.Text>
                      <Alert variant="danger">{errors.password.message}</Alert>
                    </Form.Text>
                  )}
                </Form.Group>
              </Form>
              <Button onClick={handleSubmit(onSubmit)}>Register</Button>
              <p className="mt-4 text-center">
                Already have an account? <Link to={routes.login}>Login</Link>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
