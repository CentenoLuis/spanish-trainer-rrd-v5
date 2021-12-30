import React, { useEffect } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
import { useForm } from "react-hook-form";
import changePasswordResolver from "../../../validations/changePasswordResolver";

const ChangePasswordModal = ({ isOpen, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: changePasswordResolver });

  const onSubmit = (formData) => {
    alert("cambiando contraseña");
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Type New Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              placeholder="New Password"
              className="mb-2"
            ></Form.Control>
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          {/* <Form.Group className="mt-3">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control placeholder="Confirm Password"></Form.Control>
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Change Password</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePasswordModal;
