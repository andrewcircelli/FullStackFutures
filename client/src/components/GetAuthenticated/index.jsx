import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../Grid";
import { Form } from "react-bootstrap";
import API from "../../utils/API";

function GetAuthenticated({ setLoginStatus }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // const [modalShow, setModalShow] = useState(false);

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
    <FormWrapper>
      <CustomForm>
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
              <button type="submit" onClick={sendUser}>
                Sign In!
              </button>
              <button type="submit" onClick={saveUser}>
                Sign Up!
              </button>
            </Col>
          </Row>
        </Container>
      </CustomForm>
    </FormWrapper>
  );
}

export default GetAuthenticated;

const FormWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding: 10px 25px;
  border: 0.5px solid rgba(255, 255, 255, 0.098);
  background-color: rgba(255, 255, 255, 0.235);

  border-radius: 14px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 40px 40px 20px -15px rgba(69, 47, 47, 0.181);
`;

const CustomForm = styled.form`
  padding: 0;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(122, 138, 216);
  h3 {
    margin-bottom: 2rem;
    letter-spacing: 2px;
  }

  button {
    background-color: none;
    box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.425);
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    border-radius: 8px;
    color: rgb(199, 208, 255);
    font-weight: 900;
    cursor: pointer;
    transition: all 0.2s ease-in;
    border: 0.5px solid rgba(255, 255, 255, 0.557);
    background-color: rgba(138, 25, 138, 0.897);
    border-radius: 500px;
    box-sizing: border-box;
    overflow: hidden;
    letter-spacing: 2px;
    &:hover {
      transform: translateY(-3px);
      color: rgb(159, 77, 159);
      box-shadow: 10px 10px 13px 0px rgb(0, 0, 0);
    }
  }
`;
