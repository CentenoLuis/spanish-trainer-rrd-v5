import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../auth/useAuth";
import { roles } from "../../../helpers/roles";
import addQuizzResolver from "../../../validations/addQuizzResolver";
import axios from "axios";

const AddQuizzModal = ({ isOpen, close, quizzes, userId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: addQuizzResolver });

  const onSubmit = (formData) => {
    const id = nanoid();
    const date = Date.now();

    const newQuizz = {
      title: formData.title,
      content: formData.content,
      date,
      id,
    };

    quizzes.push(newQuizz);
    axios.put(
      `https://ancient-wave-13204.herokuapp.com/api/quizzes/${userId}`,
      newQuizz
    );
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Quizz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              {...register("title")}
              placeholder="Title"
              className="mb-2"
            ></Form.Control>
            {errors?.title && (
              <Form.Text>
                <Alert variant="danger">{errors.title.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              {...register("content")}
              placeholder="Type something"
              className="mb-2"
            ></Form.Control>
            {errors?.content && (
              <Form.Text>
                <Alert variant="danger">{errors.content.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Add Quizz</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuizzModal;
