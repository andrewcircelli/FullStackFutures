import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Home from "./pages/Home";
<<<<<<< HEAD
import APIcall from "./pages/APIcall";
=======
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
>>>>>>> 3c55ea3f9ade381e6a16dbc0ae36fb3a23337fcf

// import Store into this component

function App() {
  return (
<<<<<<< HEAD
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
=======
    <>
      <SignUp />
      <SignIn />
    </>
    // <Router>
    //   <Layout>
    //     <Switch>
    //       <Route exact path={"/"}>
    //         <HeroSection />
    //       </Route>
    //       <Route exact path={"/profiles/:profileType"}>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </Layout>
    // </Router>
>>>>>>> 3c55ea3f9ade381e6a16dbc0ae36fb3a23337fcf
  );
}

export default App;
