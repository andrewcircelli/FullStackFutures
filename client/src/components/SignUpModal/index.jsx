import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

export default function SignUpModal(props) {
  const { setLoginStatus } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const saveUser = (event) => {
    event.preventDefault();
    console.log(user);
    API.saveUser(user).then((dbUser) => {
      console.log("SignUpModal-SaveUser", dbUser);
      // setUser({ username: dbUser.username, password: dbUser.password });
      setLoginStatus(dbUser.data.username);
    });
  };
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form name="sign-up-form">
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={user.username}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={user.password}
              onChange={handleInput}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={saveUser}>
          Sign Up!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
