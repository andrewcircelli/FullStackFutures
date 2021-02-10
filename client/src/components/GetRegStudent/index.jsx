import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";

export default function GetRegStudent() {
  const [dbProfile, setdbProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    graduationYear: "",
    phoneNumber: "",
    email: "",
    university: "",
    achievements: "",
    GPA: "",
    SAT: "",
    ACT: "",
    extracurriculars: "",
    priorWorkExperience: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdbProfile({
      ...dbProfile,
      [name]: value,
    });
  };

  const saveProfile = (event) => {
    event.preventDefault();
    API.saveProfile("student", dbProfile).then((dbProfile) => {
      console.log("From StudentRegForm.js", dbProfile);
      // clear the form some how!
    });
  };
  return (
    <>
      <Form className="container" style={{ color: "white" }}>
        <Form.Group controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={dbProfile.firstName}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={dbProfile.lastName}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={dbProfile.age}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control
            type="number"
            name="graduationYear"
            value={dbProfile.graduationYear}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            value={dbProfile.phoneNumber}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={dbProfile.email}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>University</Form.Label>
          <Form.Control
            type="text"
            name="university"
            value={dbProfile.university}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>GPA</Form.Label>
          <Form.Control
            type="number"
            name="GPA"
            value={dbProfile.GPA}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>SAT</Form.Label>
          <Form.Control
            type="number"
            name="SAT"
            value={dbProfile.SAT}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>ACT</Form.Label>
          <Form.Control
            type="number"
            name="ACT"
            value={dbProfile.ACT}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Achievements</Form.Label>
          <Form.Control
            type="text"
            name="achievements"
            value={dbProfile.achievements}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Extracurriculars</Form.Label>
          <Form.Control
            type="text"
            name="extracurriculars"
            value={dbProfile.extracurriculars}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Prior Work Experience</Form.Label>
          <Form.Control
            type="text"
            name="priorWorkExperience"
            value={dbProfile.priorWorkExperience}
            onChange={handleInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={saveProfile}>
          Submit
        </Button>
      </Form>
    </>
  );
}
