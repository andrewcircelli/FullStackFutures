import React from "react";
import { Card } from "react-bootstrap";

export function FrontAthleteBody({ profile }) {
  return (
    <>
      <Card.Title>{`${profile.firstName} ${profile.lastName}`}</Card.Title>
      <Card.Text>{profile.position}</Card.Text>
    </>
  );
}

export function FrontStudentBody({ profile }) {
  return (
    <>
      <Card.Title>{`${profile.firstName} ${profile.lastName}`}</Card.Title>
      <Card.Text>{profile.achievements[0]}</Card.Text>
    </>
  );
}

export function FrontCadetBody({ profile }) {
  return (
    <>
      <Card.Title>{`${profile.firstName} ${profile.lastName}`}</Card.Title>
      <Card.Text>{profile.DesiredMilitaryOccupationalSpecialty}</Card.Text>
    </>
  );
}
