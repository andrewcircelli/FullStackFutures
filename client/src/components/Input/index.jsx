import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const Input = () => {
  return (
    <Container>
      <StyledInputWrapper required />
      <InputColorCircles />
    </Container>
  );
};

const StyledInputWrapper = styled(Form.Control)`
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  z-index: 9999;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputColorCircles = styled.div`
  height: 15px;
  width: 15px;
  background: rgb(157, 157, 157);
  border-radius: 10px;
  margin-left: 1rem;
  border: 2px solid rgba(206, 189, 189, 0.445);
  ${StyledInputWrapper}:focus + & {
    background: rgb(226, 162, 140);
  }
  ${StyledInputWrapper}:invalid + & {
    background: rgb(254, 47, 117);
  }
  ${StyledInputWrapper}:valid + & {
    background: rgb(112, 237, 185);
  }
`;

export default Input;
