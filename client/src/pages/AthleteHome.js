import React from "react";
import { Col, Row, Container } from "../components/Grid";
import AthleteRegForm from "../components/AthleteRegForm";
import ProfileCarousel from "../components/Carousel";

const AthleteHome = ({ profileType, profiles }) => {
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
          <AthleteRegForm profileType={profileType} profiles={profiles} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
};

export default AthleteHome;
