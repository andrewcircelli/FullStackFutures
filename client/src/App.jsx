import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import APIcall from "./pages/APIcall";

// import Store into this component

function App() {
  return (
    <Router>
      <Layout>
        <main>
          <Switch>
            <Route exact path={"/"}>
              <HeroSection />
            </Route>
            <Route exact path={"/profiles/:profileType"}>
              <Home />
            </Route>
            <Route exact path="/details/all" component={APIcall}/>
          </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
