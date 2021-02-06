import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
              <h1 className="text-center border border-dark">My React App</h1>
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
