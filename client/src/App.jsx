import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
// import Store into this component

function App() {
  const [counter, setCounter] = useState(8);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div>
      <h1>Hello from Project 3 (App.js)!</h1>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter} />
    </div>
  );
}

export default App;
