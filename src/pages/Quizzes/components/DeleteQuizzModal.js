import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import addQuizzResolver from "../../../validations/addQuizzResolver";
import axios from "axios";

const DeleteQuizzModal = ({
  isOpen,
  close,
  quizzes,
  userId,
  setQuizzes,
  quizzIndex,
}) => {
  const onSubmit = () => {
    const quizzId = {
      id: quizzes[quizzIndex].id,
    };
    console.log(quizzes);
    console.log("deleting quizz");
    console.log(quizzIndex);
    console.log(quizzId);
    let newList = quizzes.filter((quizz) => quizz.id !== quizzId.id);
    setQuizzes(newList);
    axios.put(
      `https://ancient-wave-13204.herokuapp.com/api/deletequizz/${userId}`,
      quizzId
    );
    close();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Button className="mx-4" variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button className="mx-4" variant="danger" onClick={() => onSubmit()}>
            Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteQuizzModal;
