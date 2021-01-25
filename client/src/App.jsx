import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import AthleteProfileCard from "./components/AthleteProfileCard"
import PageNotFound from "./components/PageNotFound";
// import Store into this component

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <div>
        <Header />
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
