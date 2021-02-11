import React from "react";
import styled from "styled-components";
import { Card, Badge } from "react-bootstrap";
import {
  FrontAthleteBody,
  FrontStudentBody,
  FrontCadetBody,
} from "../FrontCardBody";
import Sport1 from "../../static/images/pictures/Sport1.svg";
import Military1 from "../../static/images/pictures/Military1.svg";
import Student1 from "../../static/images/pictures/Student1.svg";

export default function FrontCard({ profile, flipCard }) {
  return (
    <Wrapper>
      <Card className="text-center" style={{ width: "18rem" }}>
        {profile.profileType === "athlete" ? (
          <>
            <Header as="h5">
              <Badge variant="secondary"> Athlete - {profile.sport}</Badge>
            </Header>

            <Image>
              {/* <div className="Sport1" > */}
              <Card.Img variant="top" src={Sport1} onClick={flipCard} />
              {/* </div> */}
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
              {/* <div className="Sport1" > */}
              <Card.Img variant="top" src={Student1} onClick={flipCard} />
              {/* </div> */}
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
              {/* <div className="Sport1" > */}
              <Card.Img variant="top" src={Military1} onClick={flipCard} />
              {/* </div> */}
            </Image>

            <Card.Body>
              <FrontCadetBody profile={profile} />
            </Card.Body>

            <Card.Footer className="text-muted">
              {profile.graduationYear}
            </Card.Footer>
          </>
        )}
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px;
  width: auto;
  padding: 0;
  display: inline-block;
  position: center;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(27.3844px);
  border-radius: 14px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Header = styled.div``;
const Image = styled.div`
  width: 80%;
  margin-left: 30px;
  position: center;
  justify-content: center;
  align-items: center;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(27.3844px);
  border-radius: 500px;
  box-sizing: border-box;
  overflow: hidden;
`;
