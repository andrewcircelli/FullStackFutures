import React from "react";
import { Card, Badge } from "react-bootstrap";
import {
  FrontAthleteBody,
  FrontStudentBody,
  FrontCadetBody,
} from "../FrontCardBodyOld";
import athlete from "./imgs/athlete.png";
import cadet from "./imgs/cadet.png";
import student from "./imgs/student.png";

export default function FrontCard({ profile, flipCard }) {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      {profile.profileType === "athlete" ? (
        <>
          <Card.Header as="h5">
            <Badge variant="secondary">Athlete - {profile.sport}</Badge>
          </Card.Header>
          <Card.Img variant="top" src={athlete} onClick={flipCard} />
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
          <Card.Img variant="top" src={student} onClick={flipCard} />
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
          <Card.Img variant="top" src={cadet} onClick={flipCard} />
          <Card.Body>
            <FrontCadetBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">
            {profile.graduationYear}
          </Card.Footer>
        </>
      )}
    </Card>
  );
}
