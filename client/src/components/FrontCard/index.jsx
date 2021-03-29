import React from "react";
import styled from "styled-components";
import { Card, Badge } from "react-bootstrap";
import {
  FrontAthleteBody,
  FrontStudentBody,
  FrontCadetBody,
} from "../FrontCardBody";
import athlete from "./imgs/athlete.png";
import cadet from "./imgs/cadet.png";
import student from "./imgs/student.png";

export default function FrontCard({ profile, flipCard }) {
  return (
    <Wrapper>
      <SCard className="text-center">
        {profile.profileType === "athlete" ? (
          <>
            <Card.Header as="h5">
              <Badge variant="secondary"> Athlete - {profile.sport}</Badge>
            </Card.Header>

            <Image>
              <Card.Img variant="top" src={athlete} onClick={flipCard} />
            </Image>

            <Card.Body>
              <FrontAthleteBody profile={profile} />
            </Card.Body>

            <Card.Footer className="text-muted">
              {profile.graduationYear}
            </Card.Footer>
          </>
        ) : profile.profileType === "student" ? (
          <>
            <Card.Header as="h5">
              <Badge variant="secondary">Student - {profile.university}</Badge>
            </Card.Header>

            <Image>
              <Card.Img variant="top" src={student} onClick={flipCard} />
            </Image>

            <Card.Body>
              <FrontStudentBody profile={profile} />
            </Card.Body>

            <Card.Footer className="text-muted">
              {profile.graduationYear}
            </Card.Footer>
          </>
        ) : (
          <>
            <Card.Header as="h5">
              <Badge variant="secondary">Cadet - {profile.branch}</Badge>
            </Card.Header>

            <Image>
              <Card.Img variant="top" src={cadet} onClick={flipCard} />
            </Image>

            <Card.Body>
              <FrontCadetBody profile={profile} />
            </Card.Body>

            <Card.Footer className="text-muted">
              {profile.graduationYear}
            </Card.Footer>
          </>
        )}
      </SCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px;
  width: auto;
  padding: 0;
  display: inline-block;
  position: center;
  border: 1px solid rgb(248, 248, 248);
  backdrop-filter: blur(27.3844px);
  border-radius: 14px;
  box-sizing: border-box;
  overflow: hidden;
`;

const SCard = styled(Card)`
  width: 500px;
  height: 500px;
`;

const Image = styled.div`
  width: 80%;
  margin-left: 30px;
  position: center;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 248, 248);
  backdrop-filter: blur(27.3844px);
  border-radius: 500px;
  box-sizing: border-box;
  overflow: hidden;
`;
