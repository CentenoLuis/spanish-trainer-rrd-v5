import React, { useState } from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import DeleteModal from "./components/DeleteModal";

const DashboardPage = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { user } = useAuth();

  const openModal = () => setIsOpenDeleteModal(true);
  const closeModal = () => setIsOpenDeleteModal(false);

  return (
    <>
      <DeleteModal isOpen={isOpenDeleteModal} close={closeModal}></DeleteModal>
      <Container>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src="/img/female_avatar.svg"
              alt="profile-avatar"
            />
          </Col>
          <Col className="mt-2">
            <Card style={{ maxWidth: "360px" }} className="p-4 mx-auto">
              <p className="text-center">
                <b>Name: </b> {user.name}
              </p>
              <p className="text-center">
                <b> Email: </b>
                {user.email}
              </p>
              <p className="text-center">
                <b>Role:</b> {user.role}
              </p>
              <Button variant="warning">Edit Account</Button>
              <Button className="mt-1" variant="link">
                Change Password
              </Button>
              <Button
                className="mt-4 text-danger"
                variant="link"
                onClick={() => openModal()}
              >
                Erase account
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
