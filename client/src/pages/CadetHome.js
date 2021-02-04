import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CadetRegForm from "../components/CadetRegForm";
import ProfileCarousel from "../components/Carousel";

const CadetHome = ({ profileType, profiles }) => {
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
          <CadetRegForm profileType={profileType} profiles={profiles} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
};

export default CadetHome;
