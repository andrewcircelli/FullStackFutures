// what kind of components would be on the Profiles page
import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";

class Profile extends React.Component {
  state = {
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
  };
  saveProfile = (event) => {
    event.preventDefault();
    console.log("State", this.state);
    API.saveProfile(this.state).then((studentProfile) => {
      console.log("From Profiles.js", studentProfile);
    });
  };

  handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Form className="container">
        <Form.Group controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInput}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInput}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleInput}
            placeholder="Enter Age"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control
            type="number"
            name="graduationYear"
            value={this.state.graduationYear}
            onChange={this.handleInput}
            placeholder="Enter Graduation Year"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleInput}
            placeholder="Enter Phone Number"
          />
        </Form.Group>

        <Form.Group controlId="formBasicemail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>University</Form.Label>
          <Form.Control
            type="text"
            name="university"
            value={this.state.university}
            onChange={this.handleInput}
            placeholder="Enter University"
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Achievements</Form.Label>
          <Form.Control
            type="text"
            name="achievements"
            value={this.state.achievements}
            onChange={this.handleInput}
            placeholder="Enter Achievements"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>GPA</Form.Label>
          <Form.Control
            type="number"
            name="GPA"
            value={this.state.GPA}
            onChange={this.handleInput}
            placeholder="Enter GPA"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>SAT</Form.Label>
          <Form.Control
            type="number"
            name="SAT"
            value={this.state.SAT}
            onChange={this.handleInput}
            placeholder="Enter SAT"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>ACT</Form.Label>
          <Form.Control
            type="number"
            name="ACT"
            value={this.state.ACT}
            onChange={this.handleInput}
            placeholder="Enter ACT"
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Extracurriculars</Form.Label>
          <Form.Control
            type="text"
            name="extracurriculars"
            value={this.state.extracurriculars}
            onChange={this.handleInput}
            placeholder="Enter Extracurriculars"
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Prior Work Experience</Form.Label>
          <Form.Control
            type="text"
            name="priorWorkExperience"
            value={this.state.priorWorkExperience}
            onChange={this.handleInput}
            placeholder="Enter Prior Work Experience"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.saveProfile}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Profile;
