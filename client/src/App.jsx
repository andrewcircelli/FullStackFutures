import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GetAuthenticated from "./components/GetAuthenticated";
import UserProfile from "./pages/UserProfile";
import "./App.css";

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
                  {/* send them to a profiles select page */}
                  <UserProfile username={this.state.signedInUser} />
                </>
              ) : (
                <>
                  <GetAuthenticated setLoginStatus={this.setLoginStatus} />
                </>
              )}
            </Route>
            <Route exact path={"/profiles/:profileType"}>
              <Route exact path={"/dashboard/:user"} component={UserProfile} />
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
