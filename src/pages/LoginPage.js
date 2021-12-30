import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
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
import loginResolver from "../validations/loginResolver";
import { routes } from "../helpers/routes";

const userCredentials = {};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: loginResolver });
  const location = useLocation();
  const { login, isLogged } = useAuth();

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
              <div>
                <h1>Login</h1>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
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

              <Button
                onClick={() => login(userCredentials, location.state?.from)}
              >
                Login
              </Button>

              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to={routes.register}>Register</Link>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
