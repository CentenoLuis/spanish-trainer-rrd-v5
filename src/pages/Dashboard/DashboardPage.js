import useModal from "../../customHooks/useModal";
import React, { useState } from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import ChangePasswordModal from "./components/ChangePasswordModal";
import DeleteModal from "./components/DeleteModal";
import EditAccountModal from "./components/EditAccountModal";
import ProfilePicModal from "./components/ProfilePicModal";

const DashboardPage = () => {
  const { user } = useAuth();
  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
  const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] =
    useModal();
  const [
    isOpenChangePasswordModal,
    openChangePasswordModalModal,
    closeChangePasswordModalModal,
  ] = useModal();
  const [isOpenEditAccountModal, openEditAccountModal, closeEditAccount] =
    useModal();

  return (
    <>
      <EditAccountModal
        isOpen={isOpenEditAccountModal}
        close={closeEditAccount}
      ></EditAccountModal>

      <DeleteModal
        isOpen={isOpenDeleteModal}
        close={closeDeleteModal}
      ></DeleteModal>

      <ChangePasswordModal
        isOpen={isOpenChangePasswordModal}
        close={closeChangePasswordModalModal}
      ></ChangePasswordModal>

      <ProfilePicModal
        isOpen={isOpenProfilePicModal}
        close={closeProfilePicModal}
      ></ProfilePicModal>

      <Container>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={openProfilePicModal}
              src={user?.profilePic || "/img/female_avatar.svg"}
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
              <Button
                className="mt-1"
                variant="warning"
                onClick={openEditAccountModal}
              >
                Edit Account
              </Button>
              <Button
                className="mt-2"
                variant="secondary"
                onClick={openChangePasswordModalModal}
              >
                Change Password
              </Button>
              <Button
                className="mt-4 text-danger"
                variant="link"
                onClick={openDeleteModal}
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
