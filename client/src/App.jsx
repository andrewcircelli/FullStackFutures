import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Button from "./components/Button";
import AthleteProfileCard from "./components/AthleteProfileCard"
import Display from "./components/Display";
import PageNotFound from "./components/PageNotFound";
// import Store into this component

function App() {
  const [counter, setCounter] = useState(8);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"}>
            <AthleteProfileCard />
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
