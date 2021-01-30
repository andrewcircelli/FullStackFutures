import React from "react";
import { Form, Button, Fade } from "react-bootstrap";
import API from "../../utils/API";

class AthleteRegForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    graduationYear: "",
    phoneNumber: "",
    email: "",
    sport: "",
    position: "",
    height: "",
    weight: "",
    achievements: "",
    open: false,
  };
  saveProfile = (event) => {
    event.preventDefault();
    console.log("State", this.state);
    API.saveProfile(this.state).then((studentProfile) => {
      // will need to push this profile doc to logged in user
      console.log("From Profiles.js", studentProfile);
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
              <Form.Label>Sport</Form.Label>
              <Form.Control
                type="text"
                name="sport"
                value={this.state.sport}
                onChange={this.handleInput}
                placeholder="Enter sport"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.handleInput}
                placeholder="Enter position"
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={this.state.height}
                onChange={this.handleInput}
                placeholder="Enter height"
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                value={this.state.weight}
                onChange={this.handleInput}
                placeholder="Enter weight"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Achievements\</Form.Label>
              <Form.Control
                type="text"
                name="achievements"
                value={this.state.achievements}
                onChange={this.handleInput}
                placeholder="Enter achievements"
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
              Create New Athlete
            </Button>
          </Form>
        </Fade>
      </>
    );
  }
}

export default AthleteRegForm;
