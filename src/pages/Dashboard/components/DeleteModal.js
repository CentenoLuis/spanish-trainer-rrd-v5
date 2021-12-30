import React from "react";
import { Modal, Alert, Button } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";

const DeleteModal = ({ isOpen, close }) => {
  const { logout } = useAuth();

  const handleDelete = () => {
    // peticion http
    logout();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Erase Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">Are you sure?</Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} variant="secondary">
          Cancel
        </Button>
        <Button className="text-danger" variant="link" onClick={handleDelete}>
          Erase Account
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
