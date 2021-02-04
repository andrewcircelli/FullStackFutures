import React from "react";
import { Container, Row, Col } from "../Grid";
import { ListGroup } from "react-bootstrap";

export function BackAthleteBody({ profile }) {
  return (
    <>
      <Container>
        <Row>
          <Col size="12">
            <ListGroup variant="flush">
              {profile.achievements.map((li, index) => {
                return <ListGroup.Item key={index}>{li}</ListGroup.Item>;
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function BackStudentBody({ profile }) {
  return (
    <>
      <Container>
        <Row>
          <Col size="12">
            <ListGroup variant="flush">
              {profile.extracurriculars.map((li, index) => {
                return <ListGroup.Item key={index}>{li}</ListGroup.Item>;
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function BackCadetBody({ profile }) {
  return (
    <>
      <Container>
        <Row>
          <Col size="12">Body</Col>
        </Row>
      </Container>
    </>
  );
}
