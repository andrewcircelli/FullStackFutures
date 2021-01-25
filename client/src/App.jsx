import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import AthleteProfileCard from "./components/AthleteProfileCard"
import PageNotFound from "./components/PageNotFound";
// import Store into this component

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            My React App
          </Route>
          <Route exact path="/profiles">
            <AthleteProfileCard />
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
