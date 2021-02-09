import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

// import Store into this component

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            <SignIn />
            <SignUp />
          </Route>
          <Route exact path={"/profiles/:profileType"}>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
