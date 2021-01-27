import React from "react";
import { Card, Button } from "react-bootstrap";
import logo from "./athlete.png"


export default function FrontCard({profile, flipCard}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{profile.firstName} ({profile.age})</Card.Title>
        <Card.Text>
          {profile.profileType} || ({profile.graduationYear})
        </Card.Text>
        <Card.Text>
          Contact Me at {profile.emailAddress} || {profile.phoneNumber}
        </Card.Text>
        <Button onClick={flipCard} variant="dark">Click to Flip</Button>
      </Card.Body>
    </Card>
  )
}
