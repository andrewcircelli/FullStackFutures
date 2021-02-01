import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import CadetRegForm from "../components/CadetRegForm";
import ProfileCarousel from "../components/Carousel";

const CadetHome = () => {
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
          <CadetRegForm profileType={profileType} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
};

export default CadetHome;
