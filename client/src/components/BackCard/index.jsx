import React from "react";
import styled from "styled-components";
import { Card, Badge } from "react-bootstrap";
import {
  BackAthleteBody,
  BackStudentBody,
  BackCadetBody,
} from "../BackCardBody";

export default function BackCard({ profile, flipCard }) {
  return (
    <SCard className="text-center">
      {profile.profileType === "athlete" ? (
        <>
          <Card.Header as="h5">
            <Badge variant="secondary"> Athlete - {profile.sport}</Badge>
          </Card.Header>
          <Card.Body onClick={flipCard}>
            <BackAthleteBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">
            {`${profile.age}yo | ${profile.height}in | ${profile.weight}lbs`}
          </Card.Footer>
        </>
      ) : profile.profileType === "student" ? (
        <>
          <Card.Header as="h5">
            <Badge variant="secondary">Student - {profile.university}</Badge>
          </Card.Header>
          <Card.Body onClick={flipCard}>
            <BackStudentBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">
            Student Footer (BackCard)
          </Card.Footer>
        </>
      ) : (
        <>
          <Card.Header as="h5">
            <Badge variant="secondary">Cadet - {profile.branch}</Badge>
          </Card.Header>
          <Card.Body onClick={flipCard}>
            <BackCadetBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">
            {`${profile.age}yo | ${profile.height}in | ${profile.weight}lbs`}
          </Card.Footer>
        </>
      )}
    </SCard>
  );
}

const SCard = styled(Card)`
  width: 500px;
  height: 500px;
  margin: 20px;
`;
