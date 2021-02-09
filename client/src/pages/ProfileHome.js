import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileCarousel from "../components/Carousel";

const ProfileHome = ({ profileType, profiles }) => {
  return (
    <Container fluid>
      <Row>
        <Col size="12">
          <ProfileCarousel profileType={profileType} profiles={profiles} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileHome;
