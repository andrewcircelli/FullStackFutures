import React from "react";
import { Col, Row, Container } from "../components/Grid";
import StudentRegForm from "../components/StudentRegForm";
import ProfileCarousel from "../components/Carousel";

const StudentHome = ({ profileType, profiles }) => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <ProfileCarousel
            deviceType={"desktop"}
            profileType={profileType}
            profiles={profiles}
          />
        </Col>
      </Row>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <StudentRegForm profileType={profileType} profiles={profiles} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
};

export default StudentHome;
