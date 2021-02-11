import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Reg from "./pages/Reg";
import Home from "./pages/Home";
import HeroSection from "./components/HeroSection";
// import UserProfile from "./pages/UserProfile";
import GetProfile from "./components/GetProfile";

class App extends React.Component {
  state = {
    isSignedIn: false,
    signedInUser: "",
  };

  setLoginStatus = (userDetails) => {
    this.setState({
      isSignedIn: true,
      signedInUser: userDetails,
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={"/"}>
              {this.state.isSignedIn ? (
                <>
                  <GetProfile username={this.state.signedInUser} />
                </>
              ) : (
                <HeroSection setLoginStatus={this.setLoginStatus} />
              )}
            </Route>
            <Route exact path={"/profiles/reg/:profileType"}>
              <Reg />
            </Route>
            <Route exact path={"/profiles/:profileType"}>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
