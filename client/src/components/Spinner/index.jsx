import React from "react";
import { Spinner } from "react-bootstrap";

// https://www.davidhu.io/react-spinners/

const SpinnerPage = () => {
  return (
    <>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

export default SpinnerPage;
