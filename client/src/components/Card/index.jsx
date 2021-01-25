import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FrontCard({flipCard}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Andrew Circelli</Card.Title>
        <Card.Text>
          Athlete Profile
        </Card.Text>
        <Card.Text>
          Summary of some of the information that is in the database.
        </Card.Text>
        <Button onClick={flipCard} variant="dark">Click to Flip</Button>
      </Card.Body>
    </Card>
  )
}
