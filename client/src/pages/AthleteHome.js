import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AthleteRegForm from "../components/AthleteRegForm";
import ProfileCarousel from "../components/Carousel";

const AthleteHome = () => {
  const { profileType } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <ProfileCarousel deviceType={"desktop"} />
        </Col>
      </Row>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <AthleteRegForm profileType={profileType} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
};

export default AthleteHome;
