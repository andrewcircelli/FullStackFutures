import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Home from "./pages/Home";

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
          </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
