import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../auth/useAuth";
import useModal from "../../customHooks/useModal";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  Alert,
  Form,
} from "react-bootstrap";
import AddQuizzModal from "./components/AddQuizzModal";
import DeleteQuizzModal from "./components/DeleteQuizzModal";

const QuizzesPage = () => {
  const { user } = useAuth();
  const [quizzesList, setQuizzesList] = useState([]);
  const [isOpenAddQuizzModal, openAddQuizzModal, closeAddQuizzModal] =
    useModal(false);
  const [isOpenDeleteQuizzModal, openDeleteQuizzModal, closeDeleteQuizzModal] =
    useModal(false);

  useEffect(() => {
    const userId = {
      _id: user._id,
    };
    axios
      .post("https://ancient-wave-13204.herokuapp.com/api/storeddata", userId)
      .then((res) => {
        console.log(res.data[0].quizzes);
        setQuizzesList(res.data[0].quizzes);
      });
  }, []);

  return (
    <>
      <AddQuizzModal
        isOpen={isOpenAddQuizzModal}
        close={closeAddQuizzModal}
        quizzes={quizzesList}
        userId={user._id}
      ></AddQuizzModal>
      <Container style={{ minHeight: "60vh" }}>
        <h1 className="text-center my-4">My Quizzes</h1>
        <Row className="mt-4">
          {quizzesList.map((quizz, index) => {
            return (
              <>
                <DeleteQuizzModal
                  isOpen={isOpenDeleteQuizzModal}
                  close={closeDeleteQuizzModal}
                  quizzes={quizzesList}
                  userId={user._id}
                  setQuizzes={setQuizzesList}
                  quizzIndex={index}
                ></DeleteQuizzModal>
                <Col
                  xs={{ span: 12 }}
                  md={{ span: 3 }}
                  className="text-center mb-4"
                  key={quizz._id || quizz.title}
                >
                  <Card className="p-2">
                    <Card.Title>{quizz.title}</Card.Title>
                    <Card.Body>{quizz.content}</Card.Body>
                    <Card.Footer>
                      <div>
                        <p>created: {quizz.date}</p>
                        <p>id: {quizz.id}</p>
                      </div>
                      <div>
                        <Button className="mx-4" variant="warning">
                          Edit
                        </Button>
                        <Button
                          variant="link"
                          className="text-danger"
                          onClick={openDeleteQuizzModal}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
        <Row>
          <Col className="text-center my-4">
            <Button onClick={openAddQuizzModal}>Add Quizz</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QuizzesPage;
