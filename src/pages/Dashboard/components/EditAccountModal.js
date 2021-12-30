import React, { useEffect } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
import { useForm } from "react-hook-form";
import editAccountResolver from "../../../validations/editAccountResolver";
import { roles } from "../../../helpers/roles";

const EditAccountModal = ({ isOpen, close }) => {
  const { user, updateUser, hasRole } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: editAccountResolver });

  const isDirty = !!Object.keys(dirtyFields).length;

  const onSubmit = (formData) => {
    if (!isDirty) return;
    let newUserData;

    if (formData.role) {
      newUserData = formData;
    } else {
      const { role, ...rest } = formData;
      newUserData = rest;
    }

    updateUser(newUserData);
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    }
  }, [user]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              {...register("role")}
              className="mb-2"
              disabled={!hasRole("admin")}
            >
              {Object.keys(roles).map((role) => {
                return <option key={role}>{role}</option>;
              })}
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">{errors.role.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button disabled={!isDirty} onClick={handleSubmit(onSubmit)}>
          Edit Account
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAccountModal;
