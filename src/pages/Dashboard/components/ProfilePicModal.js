import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
import { toast } from "react-toastify";

const ProfilePicModal = ({ isOpen, close }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { logout, updateUser } = useAuth();

  const handleDelete = () => {
    // peticion http
    logout();
  };

  const handleFileChange = (e) => {
    const [file] = e.target.files;
    const isValidSize = file.size < 50 * 1024 * 1024;
    if (!isValidSize) return toast.error("Image must be 50MB max.");

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUpdateUser = () => {
    if (!selectedFile) return toast.error("You must select an image");
    updateUser({ profilePic: selectedFile });
    close();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control
              type="file"
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .gif, .png"
            />
          </Form.Group>
          <img
            className="img-fluid mt-2"
            src={selectedFile}
            alt="preview"
          ></img>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdateUser}>Update Picture</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfilePicModal;
