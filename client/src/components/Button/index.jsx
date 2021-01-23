import React from "react";

function Button({ onClickFunction }) {
  return (
  <button className={"btn btn-primary"} onClick={onClickFunction}>+1</button>)
}

export default Button;
