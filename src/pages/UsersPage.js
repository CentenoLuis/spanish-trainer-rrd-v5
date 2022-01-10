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
  Table,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

const UsersPage = () => {
  const { listUsers } = useAuth();
  return (
    <>
      <Container style={{ minHeight: "60vh" }}>
        <h1 className="mx-4 text-center">Users</h1>
        <Table variant="dark" className="mx-4 text-center" responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((user) => {
              return (
                <tr key={user.name}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default UsersPage;
