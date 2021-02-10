import React from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  saveUser = (event) => {
    event.preventDefault();
    API.saveUser(this.state).then((dbUser) => {
      console.log("SignUp", dbUser);
    });
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    return (
      <>
        <Form name="sign-up-form">
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.saveUser}>
            Sign Up!
          </Button>
        </Form>
      </>
    );
  }
}

export default SignUp;
