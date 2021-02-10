import React, { useState } from "react";
import { Container, Row, Col } from "../Grid";
import { Form, Button } from "react-bootstrap";
import SignUpModal from "../SignUpModal";
import API from "../../utils/API";

function GetAuthenticated({ setLoginStatus }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [modalShow, setModalShow] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const sendUser = (event) => {
    event.preventDefault();
    API.sendUser(user).then((dbUser) => {
      console.log("GetAuth-SendUser", dbUser);
      // setUser({ username: dbUser.username, password: dbUser.password });
      setLoginStatus(dbUser.data.username);
    });
  };

  return (
    <Form name="sign-in-form">
      <Container>
        <Row>
          <Col size="12">
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                value={user.username}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={user.password}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col size="4" className="pr-2">
            <Button variant="primary" type="submit" onClick={sendUser}>
              Sign In!
            </Button>
          </Col>
          <Col size="4" className="pl-2">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button>
            <SignUpModal
              setLoginStatus={setLoginStatus}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default GetAuthenticated;
