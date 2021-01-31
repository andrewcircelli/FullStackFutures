import React from "react";
import { Card } from "react-bootstrap";

export default function FrontCard({ profile, flipCard }) {
  return (
    <Card style={{ width: "18rem" }}>
      {profile.profileType === "athlete" ? (
        <>
          <Card.Header as="h5" onClick={flipCard}>
            Athlete - {profile.sport}
          </Card.Header>
          <Card.Body>BODY</Card.Body>
          <Card.Footer className="text-muted">
            Athlete Footer (BackCard)
          </Card.Footer>
        </>
      ) : profile.profileType === "student" ? (
        <>
          <Card.Header as="h5" onClick={flipCard}>
            Student - {profile.university}
          </Card.Header>
          <Card.Body>BODY</Card.Body>
          <Card.Footer className="text-muted">
            Student Footer (BackCard)
          </Card.Footer>
        </>
      ) : (
        <>
          <Card.Header as="h5" onClick={flipCard}>
            Cadet - {profile.branch}
          </Card.Header>
          <Card.Body>BODY</Card.Body>
          <Card.Footer className="text-muted">
            Cadet Footer (BackCard)
          </Card.Footer>
        </>
      )}
    </Card>
  );
}
