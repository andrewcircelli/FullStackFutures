import React from "react";
import { Form, Button, Fade } from "react-bootstrap";
import API from "../../utils/API";

class StudentRegForm extends React.Component {
  // need to reset state when the form is submitted
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
    open: false,
  };
  saveProfile = (event) => {
    event.preventDefault();
    API.saveProfile(this.props.profileType, this.state).then(
      (studentProfile) => {
        // will need to push this profile doc to logged in user
        console.log("From StudentRegForm.js", studentProfile);
      }
    );
    this.setState({
      open: false,
    });
  };

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFade = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <>
        {/* potentially use derived state to disable/enable toggle form based on if user is logged in */}
        <Button onClick={this.handleFade}>Toggle Form</Button>
        <Fade in={this.state.open}>
          <Form className="container">
            <Form.Group controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Graduation Year</Form.Label>
              <Form.Control
                type="number"
                name="graduationYear"
                value={this.state.graduationYear}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                name="university"
                value={this.state.university}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>GPA</Form.Label>
              <Form.Control
                type="number"
                name="GPA"
                value={this.state.GPA}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>SAT</Form.Label>
              <Form.Control
                type="number"
                name="SAT"
                value={this.state.SAT}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>ACT</Form.Label>
              <Form.Control
                type="number"
                name="ACT"
                value={this.state.ACT}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Achievements</Form.Label>
              <Form.Control
                type="text"
                name="achievements"
                value={this.state.achievements}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Extracurriculars</Form.Label>
              <Form.Control
                type="text"
                name="extracurriculars"
                value={this.state.extracurriculars}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Prior Work Experience</Form.Label>
              <Form.Control
                type="text"
                name="priorWorkExperience"
                value={this.state.priorWorkExperience}
                onChange={this.handleInput}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.saveProfile}>
              Create New Student Profile
            </Button>
          </Form>
        </Fade>
      </>
    );
  }
}

export default StudentRegForm;
