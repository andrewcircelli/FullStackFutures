import React from "react";
import { Card } from "react-bootstrap";
import {
  FrontAthleteBody,
  FrontStudentBody,
  FrontCadetBody,
} from "../FrontCardBody";
import athlete from "./athlete.png";
import cadet from "./cadet.png";
import student from "./student.png";

export default function FrontCard({ profile, flipCard }) {
  return (
    <Card style={{ width: "18rem" }}>
      {profile.profileType === "athlete" ? (
        <>
          <Card.Header as="h5">Athlete - {profile.sport}</Card.Header>
          <Card.Img variant="top" src={athlete} onClick={flipCard} />
          <Card.Body>
            <FrontAthleteBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">Athlete Footer</Card.Footer>
        </>
      ) : profile.profileType === "student" ? (
        <>
          <Card.Header as="h5">Student - {profile.university}</Card.Header>
          <Card.Img variant="top" src={student} onClick={flipCard} />
          <Card.Body>
            <FrontStudentBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">Student Footer</Card.Footer>
        </>
      ) : (
        <>
          <Card.Header as="h5">Cadet - {profile.branch}</Card.Header>
          <Card.Img variant="top" src={cadet} onClick={flipCard} />
          <Card.Body>
            <FrontCadetBody profile={profile} />
          </Card.Body>
          <Card.Footer className="text-muted">Cadet Footer</Card.Footer>
        </>
      )}
    </Card>
  );
}
