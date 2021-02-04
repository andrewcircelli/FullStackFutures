import React from "react";
import { Card } from "react-bootstrap";
import {
  BackAthleteBody,
  BackStudentBody,
  BackCadetBody,
} from "../BackCardBody";

export default function BackCard({ profile, flipCard }) {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      {profile.profileType === "athlete" ? (
        <>
          <Card.Header as="h5" onClick={flipCard}>
            Athlete - {profile.sport}
          </Card.Header>
          <BackAthleteBody profile={profile} />
          <Card.Footer className="text-muted">
            {`${profile.age}yo | ${profile.height}in | ${profile.weight}lbs`}
          </Card.Footer>
        </>
      ) : profile.profileType === "student" ? (
        <>
          <Card.Header as="h5" onClick={flipCard}>
            Student - {profile.university}
          </Card.Header>
          <BackStudentBody profile={profile} />
          <Card.Footer className="text-muted">
            Student Footer (BackCard)
          </Card.Footer>
        </>
      ) : (
        <>
          <Card.Header as="h5" onClick={flipCard}>
            Cadet - {profile.branch}
          </Card.Header>
          <BackCadetBody profile={profile} />
          <Card.Footer className="text-muted">
            {`${profile.age}yo | ${profile.height}in | ${profile.weight}lbs`}
          </Card.Footer>
        </>
      )}
    </Card>
  );
}
