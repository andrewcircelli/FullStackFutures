import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Button from "./components/Button";
import Display from "./components/Display";
import PageNotFound from "./components/PageNotFound";
// import Store into this component

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  const [counter, setCounter] = useState(8);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"}>
            {<h1>Hello from Project 3!</h1>}
          </Route>
          <Route exact path="/button">
            <Button onClickFunction={incrementCounter}/>
            <Display message={counter}/>
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
